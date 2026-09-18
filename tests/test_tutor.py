# -*- coding: utf-8 -*-
"""
Unit tests for tutor.py: the LLM vs. extractive-fallback branching in
generate_tutoring_explanation().

The Groq client is the one thing in this project that's legitimate to
mock -- it's a paid external network call, not project logic -- so these
tests stub groq.Groq rather than hitting the real API. Everything
else (retrieval over the real notes corpus) runs for real, same as the rest
of the suite.
"""
import groq

from backend import tutor

REAL_SUB_SKILL = "Percentages"  # has real notes on disk, so retrieval returns chunks


class _FakeMessage:
    def __init__(self, content):
        self.content = content


class _FakeChoice:
    def __init__(self, content):
        self.message = _FakeMessage(content)


class _FakeResponse:
    def __init__(self, text):
        self.choices = [_FakeChoice(text)]


class _FakeCompletions:
    def __init__(self, response=None, exc=None):
        self._response = response
        self._exc = exc
        self.calls = []

    def create(self, **kwargs):
        self.calls.append(kwargs)
        if self._exc is not None:
            raise self._exc
        return self._response


class _FakeChat:
    def __init__(self, response=None, exc=None):
        self.completions = _FakeCompletions(response=response, exc=exc)


class _FakeGroqClient:
    def __init__(self, response=None, exc=None):
        self.chat = _FakeChat(response=response, exc=exc)


def test_falls_back_to_extractive_when_no_api_key(monkeypatch):
    monkeypatch.delenv("GROQ_API_KEY", raising=False)
    result = tutor.generate_tutoring_explanation(REAL_SUB_SKILL)

    assert result["generated_by"] == "extractive_fallback"
    assert len(result["source_chunks"]) > 0
    assert result["explanation"]  # non-empty: the top chunk's own text
    assert "llm_error" not in result  # no LLM was even attempted


def test_uses_llm_when_api_key_present_and_call_succeeds(monkeypatch):
    monkeypatch.setenv("GROQ_API_KEY", "fake-key-for-tests")
    fake_client = _FakeGroqClient(response=_FakeResponse("A grounded explanation of percentages."))
    monkeypatch.setattr(groq, "Groq", lambda **kwargs: fake_client)

    result = tutor.generate_tutoring_explanation(REAL_SUB_SKILL)

    assert result["generated_by"] == "llm"
    assert result["explanation"] == "A grounded explanation of percentages."
    assert len(fake_client.chat.completions.calls) == 1
    # the sub-skill and retrieved notes actually made it into the user turn,
    # and the teaching instructions live in the system turn
    call = fake_client.chat.completions.calls[0]
    assert REAL_SUB_SKILL in call["messages"][1]["content"]
    assert call["messages"][0]["role"] == "system"


def test_falls_back_to_extractive_when_llm_call_raises(monkeypatch):
    monkeypatch.setenv("GROQ_API_KEY", "fake-key-for-tests")
    fake_client = _FakeGroqClient(exc=RuntimeError("simulated network failure"))
    monkeypatch.setattr(groq, "Groq", lambda **kwargs: fake_client)

    result = tutor.generate_tutoring_explanation(REAL_SUB_SKILL)

    assert result["generated_by"] == "extractive_fallback"
    assert result["llm_error"] == "simulated network failure"
    assert len(result["source_chunks"]) > 0


def test_falls_back_to_extractive_when_llm_returns_empty_text(monkeypatch):
    monkeypatch.setenv("GROQ_API_KEY", "fake-key-for-tests")
    fake_client = _FakeGroqClient(response=_FakeResponse(""))
    monkeypatch.setattr(groq, "Groq", lambda **kwargs: fake_client)

    result = tutor.generate_tutoring_explanation(REAL_SUB_SKILL)

    assert result["generated_by"] == "extractive_fallback"
    assert result["llm_error"] == "empty response from model"


def test_extractive_fallback_with_no_chunks_returns_friendly_message():
    assert tutor._extractive_fallback([]) == "No reference notes were found for this sub-skill yet."


def test_extractive_fallback_returns_top_chunk_text_verbatim():
    chunks = [("some_id#chunk1", "the most relevant paragraph"), ("other_id#chunk2", "a less relevant one")]
    assert tutor._extractive_fallback(chunks) == "the most relevant paragraph"
