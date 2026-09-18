# -*- coding: utf-8 -*-
"""
tutor.py -- turns retrieved chunks into a TutoringContent explanation.

run_pipeline.py's prototype left this step as a literal placeholder
string: "[LLM would generate a grounded explanation here]". This module
replaces that with a real call to the Claude API when ANTHROPIC_API_KEY
is set in the environment, and an honest extractive fallback (the
retrieved text itself, not a fake-sounding generated paragraph) when
it isn't -- so the /tutor endpoint is genuinely functional either way,
and it's always clear from the response which path produced it
(`generated_by`: "llm" or "extractive_fallback").

Set MASTRR_LLM_MODEL to override the default model string.
"""
import os

from .retrieval import retrieve_top_chunks

DEFAULT_MODEL = os.environ.get("MASTRR_LLM_MODEL", "claude-haiku-4-5-20251001")

PROMPT_TEMPLATE = """You are a tutor for an aptitude/placement-prep learner who is weak in \
"{sub_skill}". Using ONLY the reference notes below, write a short (3-5 sentence) explanation \
that would help them fix the gap. Do not introduce facts, formulas, or examples that are not in \
the reference notes. End with the single most common mistake to avoid, if the notes mention one.

Reference notes:
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

    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key or not top_chunks:
        return {
            "explanation": _extractive_fallback(top_chunks),
            "source_chunks": source_chunks,
            "generated_by": "extractive_fallback",
        }

    try:
        import anthropic

        client = anthropic.Anthropic(api_key=api_key)
        prompt = PROMPT_TEMPLATE.format(sub_skill=sub_skill, context=_build_context(top_chunks))
        response = client.messages.create(
            model=DEFAULT_MODEL,
            max_tokens=300,
            messages=[{"role": "user", "content": prompt}],
        )
        explanation = "".join(
            block.text for block in response.content if getattr(block, "type", None) == "text"
        ).strip()
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
