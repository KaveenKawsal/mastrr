# -*- coding: utf-8 -*-
"""
tutor.py -- turns retrieved chunks into a TutoringContent explanation.

run_pipeline.py's prototype left this step as a literal placeholder
string: "[LLM would generate a grounded explanation here]". This module
replaces that with a real call to the Groq API when GROQ_API_KEY is set
in the environment, and an honest extractive fallback (the retrieved
text itself, not a fake-sounding generated paragraph) when it isn't --
so the /tutor endpoint is genuinely functional either way, and it's
always clear from the response which path produced it (`generated_by`:
"llm" or "extractive_fallback").

Set MASTRR_LLM_MODEL to override the default model string.
"""
import os

from dotenv import load_dotenv

from .retrieval import retrieve_top_chunks

load_dotenv()

DEFAULT_MODEL = os.environ.get("MASTRR_LLM_MODEL", "openai/gpt-oss-120b")

# The teaching structure never varies call-to-call -- only sub_skill/context do --
# so it lives in `system` rather than being re-interpolated into the user turn on
# every request. That also gets Claude/Groq's instruction-following weighted the
# way system prompts are meant to be used, instead of competing with retrieved
# note text for attention inside a single user message.
SYSTEM_PROMPT = """You are MASTRR Tutor, an intelligent and patient personal
learning assistant for aptitude and placement preparation.

Your goal is to help learners understand concepts they
struggle with, strengthen their fundamentals, and become
confident enough to solve related problems independently.

You will be given a SUB-SKILL the learner is struggling with and
REFERENCE NOTES retrieved from the MASTRR knowledge base.

Do not assume the learner already knows the fundamentals.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEACHING INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. UNDERSTAND THE LEARNING GAP

Identify the core concept the learner needs to understand
based on the sub-skill and the reference notes.

2. EXPLAIN THE CONCEPT

Explain the concept in simple, beginner-friendly language.

Build the explanation from the fundamentals to the more
important details.

Use clear terminology and explain technical terms when
necessary.

3. EXPLAIN THE LOGIC

Explain WHY the concept works, not just WHAT it means.

Include relevant formulas and their meanings if they are
available in the reference notes.

4. WORKED EXAMPLE

Provide one simple, step-by-step worked example if the
reference notes contain a suitable example or sufficient
information to construct one.

Do not invent unsupported facts, formulas, or examples.

If the notes do not contain enough information for an
example, explicitly state that an example cannot be
provided from the available notes.

5. COMMON MISTAKES

Identify common mistakes that learners make when
understanding or applying this concept.

Only mention mistakes supported by the reference notes.

6. CHECK YOUR UNDERSTANDING

End with one short conceptual question that encourages
the learner to think about the concept.

The question must be answerable using the information
covered in your explanation.

Do not provide the answer immediately.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GROUNDING RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Use ONLY the information available in the reference notes.
- Do not introduce outside knowledge.
- Do not fabricate formulas, examples, or explanations.
- If the reference notes are insufficient, clearly state
  which parts cannot be explained from the available material.
- Never pretend that information is present in the notes
  when it is not.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSE FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📚 Concept Overview
Briefly introduce what the learner needs to understand.

## 🧠 Learn the Fundamentals
Explain the concept clearly, starting from the basics.

## 🔍 Understand the Logic
Explain the underlying reasoning, formulas, or relationships
supported by the reference notes.

## ✏️ Worked Example
Provide a step-by-step example when supported by the notes.

## ⚠️ Common Mistakes
Explain the mistakes supported by the reference notes.

## 🎯 Check Your Understanding
Ask one conceptual question without revealing the answer.

Keep the explanation focused, structured, and easy to follow.
Avoid unnecessary repetition.
"""

USER_TEMPLATE = """SUB-SKILL: {sub_skill}

REFERENCE NOTES:
{context}
"""


def _build_context(top_chunks) -> str:
    return "\n\n".join(f"[{cid}]\n{text}" for cid, text in top_chunks)


def _extractive_fallback(top_chunks) -> str:
    """No LLM key configured: return the single most relevant chunk verbatim,
    labelled honestly, rather than pretending it was generated."""
    if not top_chunks:
        return "No reference notes were found for this sub-skill yet."
    _, text = top_chunks[0]
    return text


def generate_tutoring_explanation(sub_skill: str, top_k: int = 3) -> dict:
    """Returns {"explanation": str, "source_chunks": [chunk_id, ...], "generated_by": str}."""
    top_chunks = retrieve_top_chunks(
        query=f"Explain the concept of {sub_skill} with common mistakes",
        top_k=top_k,
        sub_skill=sub_skill,
    )
    source_chunks = [cid for cid, _ in top_chunks]

    api_key = os.environ.get("GROQ_API_KEY")
    if not api_key or not top_chunks:
        return {
            "explanation": _extractive_fallback(top_chunks),
            "source_chunks": source_chunks,
            "generated_by": "extractive_fallback",
        }

    try:
        import groq

        client = groq.Groq(api_key=api_key)
        user_prompt = USER_TEMPLATE.format(sub_skill=sub_skill, context=_build_context(top_chunks))
        response = client.chat.completions.create(
            model=DEFAULT_MODEL,
            # The structured, multi-section RESPONSE FORMAT above routinely runs
            # 600-1200+ tokens -- the old 300-token cap was sized for the previous
            # one-paragraph prompt and would truncate this one mid-section.
            max_tokens=1200,
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt},
            ],
        )
        explanation = (response.choices[0].message.content or "").strip()
        if not explanation:
            raise ValueError("empty response from model")
        return {
            "explanation": explanation,
            "source_chunks": source_chunks,
            "generated_by": "llm",
        }
    except Exception as exc:  # noqa: BLE001 -- degrade to fallback on any API/network error
        return {
            "explanation": _extractive_fallback(top_chunks),
            "source_chunks": source_chunks,
            "generated_by": "extractive_fallback",
            "llm_error": str(exc),
        }
