/* Juego "Ahorra como jugando" + hub de 4 juegos interactivos.
   - Juego 1: simulación de 6 semanas de ingresos variables (venta en feria).
   - Juegos 2, 3 y 4: quizzes de opción múltiple con retroalimentación
     inmediata (correcto/incorrecto + respuesta correcta explicada),
     usando el mismo motor genérico (buildQuiz). */

(function () {
  /* =========================================================
     0. NAVEGACIÓN ENTRE EL HUB Y CADA JUEGO
     ========================================================= */
  const hubEl = document.getElementById("gameHub");
  const boards = {
    savings: document.getElementById("board-savings"),
    budget: document.getElementById("board-budget"),
    wallet: document.getElementById("board-wallet"),
    credit: document.getElementById("board-credit")
  };

  function showBoard(key) {
    if (hubEl) hubEl.style.display = "none";
    Object.values(boards).forEach((b) => { if (b) b.style.display = "none"; });
    if (boards[key]) boards[key].style.display = "block";
  }

  function showHub() {
    Object.values(boards).forEach((b) => { if (b) b.style.display = "none"; });
    if (hubEl) hubEl.style.display = "block";
  }

  document.querySelectorAll("[data-open-game]").forEach((btn) => {
    btn.addEventListener("click", () => showBoard(btn.dataset.openGame));
  });
  document.querySelectorAll("[data-back-hub]").forEach((btn) => {
    btn.addEventListener("click", showHub);
  });

  /* =========================================================
     1. JUEGO — "Ahorra como jugando" (simulación de ingresos)
     ========================================================= */
  const WEEKS = [
    { income: 80, event: null },
    { income: 120, event: null },
    { income: 60, event: "expense" },
    { income: 150, event: null },
    { income: 70, event: null },
    { income: 130, event: null }
  ];

  let savingsState = { week: 0, total: 0 };

  const weekNumEl = document.getElementById("weekNum");
  const weekIncomeEl = document.getElementById("weekIncome");
  const weekEventEl = document.getElementById("weekEvent");
  const totalSavedEl = document.getElementById("totalSaved");
  const meterFillEl = document.getElementById("meterFill");
  const choiceRowEl = document.getElementById("choiceRow");
  const feedbackBoxEl = document.getElementById("feedbackBox");
  const gameBoardEl = document.getElementById("gameBoard");
  const resultBoardEl = document.getElementById("resultBoard");
  const resultMedalEl = document.getElementById("resultMedal");
  const resultBadgeNameEl = document.getElementById("resultBadgeName");
  const resultTotalEl = document.getElementById("resultTotal");
  const resultTipEl = document.getElementById("resultTip");
  const playAgainBtn = document.getElementById("playAgainBtn");

  const MAX_POSSIBLE = 6 * Math.round(((80 + 120 + 60 + 150 + 70 + 130) / 6) * 0.4);

  function choiceOptions(income) {
    const opts = [0, Math.round(income * 0.1), Math.round(income * 0.25), Math.round(income * 0.4)];
    return [...new Set(opts)];
  }

  function renderWeek() {
    if (!weekNumEl) return;
    const w = WEEKS[savingsState.week];
    weekNumEl.textContent = savingsState.week + 1;
    weekIncomeEl.textContent = w.income;
    weekEventEl.textContent = w.event === "expense" ? t("game.feedback.expense") : "";
    totalSavedEl.textContent = savingsState.total;
    meterFillEl.style.width = Math.min(100, (savingsState.total / MAX_POSSIBLE) * 100) + "%";
    feedbackBoxEl.classList.remove("show");

    choiceRowEl.innerHTML = "";
    choiceOptions(w.income).forEach((amount) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = "S/ " + amount;
      btn.addEventListener("click", () => handleChoice(amount, w));
      choiceRowEl.appendChild(btn);
    });
  }

  function handleChoice(amount, w) {
    savingsState.total += amount;
    totalSavedEl.textContent = savingsState.total;
    meterFillEl.style.width = Math.min(100, (savingsState.total / MAX_POSSIBLE) * 100) + "%";

    let key = "game.feedback.mid";
    if (amount === 0) key = "game.feedback.low";
    else if (amount >= Math.round(w.income * 0.4)) key = "game.feedback.high";
    feedbackBoxEl.textContent = t(key);
    feedbackBoxEl.classList.add("show");

    setTimeout(() => {
      savingsState.week += 1;
      if (savingsState.week >= WEEKS.length) {
        showSavingsResult();
      } else {
        renderWeek();
      }
    }, 1100);
  }

  function showSavingsResult() {
    if (gameBoardEl) gameBoardEl.style.display = "none";
    resultBoardEl.style.display = "block";
    resultTotalEl.textContent = savingsState.total;

    let badgeKey = "bronze", medal = "🥉";
    if (savingsState.total >= MAX_POSSIBLE * 0.75) { badgeKey = "gold"; medal = "🥇"; }
    else if (savingsState.total >= MAX_POSSIBLE * 0.45) { badgeKey = "silver"; medal = "🥈"; }

    resultMedalEl.textContent = medal;
    resultBadgeNameEl.setAttribute("data-i18n", "game.badge." + badgeKey);
    resultBadgeNameEl.textContent = t("game.badge." + badgeKey);
    resultTipEl.textContent = t("game.badge." + badgeKey + ".tip");

    try {
      localStorage.setItem("yanapay-game-best", Math.max(
        savingsState.total, parseInt(localStorage.getItem("yanapay-game-best") || "0", 10)
      ));
    } catch (e) {}
  }

  function resetSavingsGame() {
    savingsState = { week: 0, total: 0 };
    resultBoardEl.style.display = "none";
    if (gameBoardEl) gameBoardEl.style.display = "block";
    renderWeek();
  }

  if (playAgainBtn) playAgainBtn.addEventListener("click", resetSavingsGame);

  /* =========================================================
     2. MOTOR GENÉRICO DE QUIZ (juegos 2, 3 y 4)
     ========================================================= */
  // Cada entrada define las claves i18n de sus 5 preguntas.
  const QUIZ_DEFS = {
    budget: { prefix: "quiz.budget", count: 5 },
    wallet: { prefix: "quiz.wallet", count: 5 },
    credit: { prefix: "quiz.credit", count: 5 }
  };

  function buildQuestions(prefix, count) {
    const qs = [];
    for (let i = 1; i <= count; i++) {
      qs.push({
        promptKey: `${prefix}.q${i}.prompt`,
        optionKeys: [`${prefix}.q${i}.optA`, `${prefix}.q${i}.optB`, `${prefix}.q${i}.optC`],
        correctIndex: 1, // la opción B es siempre la respuesta correcta en este set
        explanationKey: `${prefix}.q${i}.explanation`
      });
    }
    return qs;
  }
  // Ajuste: en algunas preguntas la correcta no es la opción B.
  // Se define explícitamente para no depender de una convención frágil.
  const CORRECT_INDEX = {
    "quiz.budget": [1, 1, 0, 1, 0],
    "quiz.wallet": [1, 0, 1, 1, 1],
    "quiz.credit": [1, 1, 0, 1, 1]
  };

  function initQuiz(gameKey) {
    const def = QUIZ_DEFS[gameKey];
    const questions = buildQuestions(def.prefix, def.count).map((q, idx) => ({
      ...q,
      correctIndex: CORRECT_INDEX[def.prefix][idx]
    }));

    const root = document.getElementById("board-" + gameKey);
    if (!root) return;

    const quizArea = root.querySelector(".quiz-area");
    const resultArea = root.querySelector(".quiz-result");

    let current = 0;
    let score = 0;
    let answered = false;

    function renderQuestion() {
      answered = false;
      const q = questions[current];
      quizArea.innerHTML = "";

      const progress = document.createElement("div");
      progress.className = "quiz-progress";
      progress.textContent = `${t("quiz.question")} ${current + 1} / ${questions.length}`;
      quizArea.appendChild(progress);

      const prompt = document.createElement("h3");
      prompt.className = "quiz-prompt";
      prompt.textContent = t(q.promptKey);
      quizArea.appendChild(prompt);

      const optWrap = document.createElement("div");
      optWrap.className = "quiz-options";
      q.optionKeys.forEach((optKey, i) => {
        const optBtn = document.createElement("button");
        optBtn.className = "quiz-option";
        optBtn.textContent = t(optKey);
        optBtn.addEventListener("click", () => handleAnswer(i, optBtn, optWrap, q));
        optWrap.appendChild(optBtn);
      });
      quizArea.appendChild(optWrap);

      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";
      quizArea.appendChild(feedback);

      const nextBtn = document.createElement("button");
      nextBtn.className = "btn btn-gold quiz-next";
      nextBtn.textContent = t("quiz.next");
      nextBtn.style.display = "none";
      nextBtn.addEventListener("click", () => {
        current += 1;
        if (current >= questions.length) {
          renderQuizResult();
        } else {
          renderQuestion();
        }
      });
      quizArea.appendChild(nextBtn);
    }

    function handleAnswer(selectedIndex, selectedBtn, optWrap, q) {
      if (answered) return;
      answered = true;

      const isCorrect = selectedIndex === q.correctIndex;
      if (isCorrect) score += 1;

      Array.from(optWrap.children).forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correctIndex) btn.classList.add("correct");
        if (i === selectedIndex && !isCorrect) btn.classList.add("incorrect");
      });

      const feedback = quizArea.querySelector(".quiz-feedback");
      feedback.classList.add("show");
      feedback.classList.toggle("is-correct", isCorrect);
      feedback.classList.toggle("is-incorrect", !isCorrect);
      const verdict = isCorrect ? t("quiz.correct") : t("quiz.incorrect");
      feedback.innerHTML = `<strong>${verdict}</strong><br>${t(q.explanationKey)}`;

      quizArea.querySelector(".quiz-next").style.display = "inline-block";
    }

    function renderQuizResult() {
      quizArea.style.display = "none";
      resultArea.style.display = "block";

      let badgeKey = "low", medal = "🥉";
      const ratio = score / questions.length;
      if (ratio >= 0.8) { badgeKey = "high"; medal = "🥇"; }
      else if (ratio >= 0.5) { badgeKey = "mid"; medal = "🥈"; }

      resultArea.innerHTML = `
        <div class="badge-result">
          <div class="medal">${medal}</div>
          <h3>${t("quiz.badge." + badgeKey)}</h3>
          <p>${t("quiz.score")}: ${score} / ${questions.length}</p>
          <p style="max-width:50ch;margin:14px auto 0;color:var(--ink-soft);">${t("quiz.badge." + badgeKey + ".tip")}</p>
          <div style="margin-top:22px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            <button class="btn btn-gold quiz-restart">${t("quiz.playagain")}</button>
            <button class="btn quiz-tohub" data-back-hub>${t("juego.back")}</button>
          </div>
        </div>`;

      resultArea.querySelector(".quiz-restart").addEventListener("click", () => {
        current = 0;
        score = 0;
        quizArea.style.display = "block";
        resultArea.style.display = "none";
        renderQuestion();
      });
      resultArea.querySelector(".quiz-tohub").addEventListener("click", showHub);
    }

    // Re-renderizar la pregunta actual cuando cambia el idioma,
    // sin perder el progreso del usuario.
    document.addEventListener("langchange", () => {
      if (root.style.display === "none") return;
      if (resultArea.style.display === "block") {
        renderQuizResult();
      } else {
        renderQuestion();
      }
    });

    renderQuestion();
  }

  /* =========================================================
     3. INICIALIZACIÓN
     ========================================================= */
  document.addEventListener("DOMContentLoaded", () => {
    renderWeek();
    initQuiz("budget");
    initQuiz("wallet");
    initQuiz("credit");
  });

  document.addEventListener("langchange", () => {
    if (gameBoardEl && gameBoardEl.style.display !== "none") renderWeek();
  });
})();