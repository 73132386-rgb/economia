/* Autoevaluación "antes / después" — Yanapay Finanzas.
   Funciona 100% sin conexión: el resultado se guarda en localStorage
   del propio dispositivo, nunca se envía a ningún servidor.

   Flujo:
   1) Primera visita  -> responde el quiz -> se guarda como "before".
   2) Segunda visita (después de jugar) -> responde el mismo quiz
      otra vez -> se guarda como "after" -> se muestra comparación.
   3) Visitas siguientes -> se muestra directamente la comparación,
      con opción de reiniciar todo. */

(function () {
  const STORAGE_BEFORE = "yanapay-eval-before";
  const STORAGE_AFTER = "yanapay-eval-after";

  const QUESTIONS = [
    { prefix: "eval.q1", correctIndex: 1 },
    { prefix: "eval.q2", correctIndex: 2 },
    { prefix: "eval.q3", correctIndex: 0 },
    { prefix: "eval.q4", correctIndex: 1 },
    { prefix: "eval.q5", correctIndex: 2 },
    { prefix: "eval.q6", correctIndex: 2 },
    { prefix: "eval.q7", correctIndex: 0 },
    { prefix: "eval.q8", correctIndex: 1 },
    { prefix: "eval.q9", correctIndex: 0 },
    { prefix: "eval.q10", correctIndex: 2 }
  ];

  const root = document.getElementById("evalRoot");
  const leadEl = document.getElementById("evalLead");
  if (!root) return;

  function getStored(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function setStored(key, obj) {
    try { localStorage.setItem(key, JSON.stringify(obj)); } catch (e) {}
  }
  function clearStored() {
    try {
      localStorage.removeItem(STORAGE_BEFORE);
      localStorage.removeItem(STORAGE_AFTER);
    } catch (e) {}
  }

  // Qué pantalla mostrar ahora mismo, para poder re-renderizarla si
  // cambia el idioma sin perder el progreso del usuario.
  let currentRender = null;

  function setLead(key) {
    leadEl.textContent = t(key);
  }

  /* ---------------- Pantalla de introducción ---------------- */
  function renderIntro(phase) {
    currentRender = () => renderIntro(phase);
    setLead(phase === "before" ? "eval.lead.before" : "eval.lead.after");

    root.innerHTML = "";
    const startBtn = document.createElement("button");
    startBtn.className = "btn btn-gold";
    startBtn.textContent = t("eval.start");
    startBtn.addEventListener("click", () => renderQuiz(phase));
    root.appendChild(startBtn);
  }

  /* ---------------- Pantalla del quiz ---------------- */
  function renderQuiz(phase) {
    currentRender = () => renderQuiz(phase);
    setLead(phase === "before" ? "eval.lead.before" : "eval.lead.after");

    let current = 0;
    let score = 0;
    let answered = false;

    function renderQuestion() {
      answered = false;
      const q = QUESTIONS[current];
      root.innerHTML = "";

      const progress = document.createElement("div");
      progress.className = "quiz-progress";
      progress.textContent = `${t("quiz.question")} ${current + 1} / ${QUESTIONS.length}`;
      root.appendChild(progress);

      const prompt = document.createElement("h3");
      prompt.className = "quiz-prompt";
      prompt.textContent = t(q.prefix + ".prompt");
      root.appendChild(prompt);

      const optWrap = document.createElement("div");
      optWrap.className = "quiz-options";
      ["optA", "optB", "optC"].forEach((suffix, i) => {
        const optBtn = document.createElement("button");
        optBtn.className = "quiz-option";
        optBtn.textContent = t(q.prefix + "." + suffix);
        optBtn.addEventListener("click", () => handleAnswer(i, optWrap, q));
        optWrap.appendChild(optBtn);
      });
      root.appendChild(optWrap);

      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";
      root.appendChild(feedback);

      const nextBtn = document.createElement("button");
      nextBtn.className = "btn btn-gold quiz-next";
      nextBtn.textContent = t("quiz.next");
      nextBtn.style.display = "none";
      nextBtn.addEventListener("click", () => {
        current += 1;
        if (current >= QUESTIONS.length) {
          finishQuiz();
        } else {
          renderQuestion();
        }
      });
      root.appendChild(nextBtn);
    }

    function handleAnswer(selectedIndex, optWrap, q) {
      if (answered) return;
      answered = true;

      const isCorrect = selectedIndex === q.correctIndex;
      if (isCorrect) score += 1;

      Array.from(optWrap.children).forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correctIndex) btn.classList.add("correct");
        if (i === selectedIndex && !isCorrect) btn.classList.add("incorrect");
      });

      const feedback = root.querySelector(".quiz-feedback");
      feedback.classList.add("show");
      feedback.classList.toggle("is-correct", isCorrect);
      feedback.classList.toggle("is-incorrect", !isCorrect);
      const verdict = isCorrect ? t("quiz.correct") : t("quiz.incorrect");
      feedback.innerHTML = `<strong>${verdict}</strong><br>${t(q.prefix + ".explanation")}`;

      root.querySelector(".quiz-next").style.display = "inline-block";
    }

    function finishQuiz() {
      const record = { score, total: QUESTIONS.length, date: new Date().toISOString() };
      setStored(phase === "before" ? STORAGE_BEFORE : STORAGE_AFTER, record);
      if (phase === "before") {
        renderBeforeDone();
      } else {
        renderComparison();
      }
    }

    renderQuestion();
  }

  /* ---------------- Pantalla tras completar el "antes" ---------------- */
  function renderBeforeDone() {
    currentRender = renderBeforeDone;
    setLead("eval.lead.before");
    root.innerHTML = `
      <div class="badge-result">
        <div class="medal">📝</div>
        <h3>${t("eval.before.done.title")}</h3>
        <p style="max-width:50ch;margin:14px auto 0;color:var(--ink-soft);">${t("eval.before.done.text")}</p>
        <div style="margin-top:22px;">
          <a class="btn btn-gold" href="ahorro-jugando.html">${t("eval.cta.playgames")}</a>
        </div>
      </div>`;
  }

  /* ---------------- Pantalla de comparación antes/después ---------------- */
  function renderComparison() {
    currentRender = renderComparison;
    setLead("eval.lead.done");

    const before = getStored(STORAGE_BEFORE);
    const after = getStored(STORAGE_AFTER);

    let messageKey = "eval.compare.same";
    if (after.score > before.score) messageKey = "eval.compare.improved";
    else if (after.score < before.score) messageKey = "eval.compare.lower";

    root.innerHTML = `
      <div class="badge-result">
        <h3>${t("eval.compare.title")}</h3>
        <div class="eval-compare-grid">
          <div class="eval-score-box">
            <div class="eval-score-label">${t("eval.compare.before")}</div>
            <div class="eval-score-value">${before.score} / ${before.total}</div>
          </div>
          <div class="eval-score-box">
            <div class="eval-score-label">${t("eval.compare.after")}</div>
            <div class="eval-score-value">${after.score} / ${after.total}</div>
          </div>
        </div>
        <p style="max-width:50ch;margin:14px auto 0;color:var(--ink-soft);">${t(messageKey)}</p>
        <div style="margin-top:22px;">
          <button class="btn btn-outline" id="evalRetryBtn">${t("eval.retry")}</button>
        </div>
      </div>`;

    document.getElementById("evalRetryBtn").addEventListener("click", () => {
      if (window.confirm(t("eval.retry.confirm"))) {
        clearStored();
        renderIntro("before");
      }
    });
  }

  /* ---------------- Arranque: decide en qué fase está el usuario ---------------- */
  function init() {
    const before = getStored(STORAGE_BEFORE);
    const after = getStored(STORAGE_AFTER);

    if (!before) {
      renderIntro("before");
    } else if (!after) {
      renderIntro("after");
    } else {
      renderComparison();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
  document.addEventListener("langchange", () => {
    if (currentRender) currentRender();
  });
})();