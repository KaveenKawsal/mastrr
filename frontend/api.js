const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

async function request(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const contentType = response.headers.get("content-type") || "";
  const payload = contentType.includes("application/json") ? await response.json() : await response.text();

  if (!response.ok) {
    const message =
      typeof payload === "object" && payload !== null ? payload.detail || payload.message : payload;
    throw new Error(message || "Request failed");
  }

  return payload;
}

export const api = {
  getRoadmap: (learnerId) => request(`/roadmap/${encodeURIComponent(learnerId)}`),

  startDiagnostic: (learnerId, subSkill) =>
    request("/diagnostic/start", {
      method: "POST",
      body: JSON.stringify({ learner_id: learnerId, sub_skill: subSkill }),
    }),

  answerDiagnostic: (sessionId, selectedAnswer) =>
    request("/diagnostic/answer", {
      method: "POST",
      body: JSON.stringify({ session_id: sessionId, selected_answer: selectedAnswer }),
    }),

  requestTutoring: (learnerId, subSkill) =>
    request("/tutor", {
      method: "POST",
      body: JSON.stringify({ learner_id: learnerId, sub_skill: subSkill }),
    }),

  getQuestionsBatch: (questionIds) => {
    const ids = Array.isArray(questionIds) ? questionIds.join(",") : String(questionIds || "");
    return request(`/questions/batch?ids=${encodeURIComponent(ids)}`);
  },

  submitRetest: (gapId, answers) =>
    request("/retest", {
      method: "POST",
      body: JSON.stringify({ gap_id: gapId, answers }),
    }),
};
