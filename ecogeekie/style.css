
// Informações dos três capítulos
const chapters = [
  {
    title: "Escola limpa, consciência viva",
    intro: "Neste capítulo, você vai conhecer formas corretas de separar e descartar resíduos. A ideia é observar os espaços do Senac e pensar em atitudes simples para reduzir o lixo.",
    learning: "Quando os resíduos são descartados de forma incorreta, podem sujar os espaços, atrair animais transmissores de doenças e prejudicar o ambiente. Separar materiais recicláveis facilita o reaproveitamento e diminui a quantidade de lixo enviada aos aterros.",
    fact: "Na sua sala ou no pátio, quais resíduos aparecem com mais frequência? Como a turma poderia melhorar o descarte?",
    missions: [
      ["Observe os resíduos", "Observe, sem mexer em materiais perigosos, quais tipos de lixo aparecem em um espaço da escola."],
      ["Ação de recolhimento", "Com orientação de um professor, participe de uma ação segura de recolhimento e separação."],
      ["Compartilhe a ideia", "Crie um aviso ou uma mensagem incentivando o descarte correto."]
    ]
  },
  {
    title: "Senac mais verde",
    intro: "As plantas melhoram os espaços, oferecem abrigo para pequenos seres vivos e ajudam a tornar o ambiente mais agradável. Neste capítulo, a turma vai planejar como cuidar das áreas verdes da escola.",
    learning: "Plantas precisam de cuidados adequados, como água na quantidade certa, luz e solo apropriado. Antes de plantar ou regar, é importante conhecer a espécie e combinar a atividade com a equipe responsável pela escola.",
    fact: "Que local do Senac poderia receber uma planta? Quem poderia ajudar a cuidar dela depois do plantio?",
    missions: [
      ["Conheça as áreas verdes", "Observe as plantas que já existem na escola e identifique quais cuidados elas recebem."],
      ["Plante com orientação", "Participe do plantio de uma muda adequada ao espaço, com autorização da escola."],
      ["Monte uma rotina de cuidado", "Ajude a organizar uma escala para verificar a necessidade de rega e acompanhar as plantas."]
    ]
  },
  {
    title: "Lixo que vira vida",
    intro: "O terceiro capítulo apresenta o reaproveitamento de resíduos orgânicos por meio da compostagem e de outras escolhas que reduzem o desperdício.",
    learning: "Cascas de frutas, restos de verduras e folhas secas podem ser transformados em composto orgânico em um sistema adequado. A compostagem reduz o volume de resíduos enviados ao lixo comum e produz material que pode ajudar o solo.",
    fact: "Quais resíduos orgânicos são produzidos na escola? Seria possível conversar com a equipe sobre uma ação de compostagem?",
    missions: [
      ["Descubra o que pode compostar", "Pesquise e identifique exemplos de resíduos orgânicos que podem ir para uma composteira."],
      ["Planeje uma composteira", "Com seu grupo, desenhe uma proposta simples e converse com um professor antes de qualquer montagem."],
      ["Divulgue o reaproveitamento", "Crie uma dica ou cartaz explicando como reduzir o desperdício e reaproveitar resíduos orgânicos."]
    ]
  }
];

// Selecionar elementos da página
const $ = (selector) => document.querySelector(selector);

// Salvar e recuperar informações
const storage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Não foi possível salvar os dados:", error);
    }
  }
};

// Dados do estudante
let state = storage.get("ecogeekieState", {
  name: "",
  completed: [],
  quizDone: false,
  quizPoints: 0
});

if (!Array.isArray(state.completed)) {
  state.completed = [];
}

// Salvar o progresso
function save() {
  storage.set("ecogeekieState", state);
}

// Atualizar informações na tela
function render() {
  const count = state.completed.length;
  const percent = Math.round(count / 9 * 100);

  $("#points").textContent = count * 50 + state.quizPoints;
  $("#missions").textContent = count + "/9";

  $("#chapters").textContent =
    chapters.filter((_, i) =>
      [0, 1, 2].every(n => state.completed.includes(i * 3 + n))
    ).length + "/3";

  $("#percent").textContent = percent + "%";
  $("#progressFill").style.width = percent + "%";
  $("#progress").setAttribute("aria-valuenow", percent);

  $("#welcomeTitle").textContent = state.name
    ? `Olá, ${state.name}! Vamos cuidar do nosso espaço?`
    : "Olá! Vamos cuidar do nosso espaço?";

  $("#headerName").textContent = state.name || "Meu perfil";

  $("#avatar").textContent = state.name
    ? state.name.trim()[0].toUpperCase()
    : "A";

  // Atualizar medalhas
  chapters.forEach((_, i) => {
    const done = [0, 1, 2].every(n =>
      state.completed.includes(i * 3 + n)
    );

    const badge = $("#badge" + i);

    badge.classList.toggle("unlocked", done);

    badge.querySelector("b").textContent = done
      ? "Conquista desbloqueada!"
      : "Ainda não conquistada";
  });

  // Atualizar quiz
  if (state.quizDone) {
    $("#quizSubmit").disabled = true;
    $("#quizSubmit").textContent = "Quiz concluído";

    $("#quizResult").textContent =
      `Você já concluiu o quiz e ganhou ${state.quizPoints} pontos.`;

    $("#retryQuiz").hidden = false;
  } else {
    $("#quizSubmit").disabled = false;
    $("#quizSubmit").textContent = "Enviar respostas";
  }
}

// Abrir capítulo escolhido
function openChapter(index) {
  const chapter = chapters[index];

  if (!chapter) return;

  $("#detailEyebrow").textContent = `CAPÍTULO 0${index + 1}`;
  $("#detailTitle").textContent = chapter.title;
  $("#detailIntro").textContent = chapter.intro;
  $("#detailLearning").textContent = chapter.learning;
  $("#detailFact").textContent = chapter.fact;

  const list = $("#missionList");
  list.replaceChildren();

  // Mostrar as missões
  chapter.missions.forEach((mission, j) => {
    const id = index * 3 + j;

    const label = document.createElement("label");

    label.className = "mission" +
      (state.completed.includes(id) ? " done" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = state.completed.includes(id);

    checkbox.addEventListener("change", () => {
      if (checkbox.checked && !state.completed.includes(id)) {
        state.completed.push(id);
      }

      if (!checkbox.checked) {
        state.completed = state.completed.filter(
          item => item !== id
        );
      }

      label.classList.toggle("done", checkbox.checked);

      save();
      render();
    });

    const text = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = mission[0];

    const desc = document.createElement("small");
    desc.textContent = mission[1];

    text.append(title, desc);
    label.append(checkbox, text);
    list.append(label);
  });

  $("#chapterDetail").hidden = false;

  $("#chapterDetail").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Botões dos capítulos
document.querySelectorAll(".open-chapter").forEach(button => {
  button.addEventListener("click", () => {
    openChapter(Number(button.dataset.chapter));
  });
});

// Fechar capítulo
$("#closeDetail").addEventListener("click", () => {
  $("#chapterDetail").hidden = true;
});

// Perfil do estudante
const profileDialog = $("#profileDialog");

function showProfile() {
  $("#studentName").value = state.name || "";
  $("#profileMessage").textContent = "";
  profileDialog.showModal();
}

$("#openProfile").addEventListener("click", showProfile);
$("#heroProfile").addEventListener("click", showProfile);
$("#editProfile").addEventListener("click", showProfile);

// Fechar perfil
$("#closeProfile").addEventListener("click", () => {
  profileDialog.close();
});

// Salvar nome
$("#profileForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#studentName").value.trim();

  if (!name) {
    $("#profileMessage").textContent =
      "Digite seu nome antes de salvar.";

    $("#studentName").focus();
    return;
  }

  state.name = name;

  save();
  render();

  profileDialog.close();
});

// Corrigir quiz
$("#quizForm").addEventListener("submit", event => {
  event.preventDefault();

  const answers = {
    q1: "b",
    q2: "c",
    q3: "a"
  };

  let score = 0;

  for (const [question, correct] of Object.entries(answers)) {
    const selected = document.querySelector(
      `input[name="${question}"]:checked`
    );

    if (!selected) {
      $("#quizResult").textContent =
        "Responda às três perguntas antes de enviar.";

      return;
    }

    if (selected.value === correct) {
      score++;
    }
  }

  state.quizDone = true;
  state.quizPoints = score * 10;

  save();
  render();

  $("#quizResult").textContent =
    `Você acertou ${score} de 3 perguntas e ganhou ${state.quizPoints} pontos!`;

  $("#retryQuiz").hidden = false;
});

// Refazer quiz
$("#retryQuiz").addEventListener("click", () => {
  state.quizDone = false;
  state.quizPoints = 0;

  save();

  $("#quizForm").reset();
  $("#quizResult").textContent = "";

  render();
});

// Reiniciar progresso
const resetDialog = $("#resetDialog");

$("#resetProgress").addEventListener("click", () => {
  resetDialog.showModal();
});

$("#confirmReset").addEventListener("click", event => {
  event.preventDefault();

  state = {
    name: state.name,
    completed: [],
    quizDone: false,
    quizPoints: 0
  };

  save();
  render();

  $("#quizForm").reset();
  $("#quizResult").textContent = "";

  resetDialog.close();
  $("#chapterDetail").hidden = true;
});

// Menu para celular
$("#menuToggle").addEventListener("click", () => {
  const nav = $("#nav");
  const open = nav.classList.toggle("open");

  $("#menuToggle").setAttribute(
    "aria-expanded",
    String(open)
  );
});

// Fechar menu ao clicar em um link
$("#nav").querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    $("#nav").classList.remove("open");

    $("#menuToggle").setAttribute(
      "aria-expanded",
      "false"
    );
  });
});

// Carregar informações ao abrir o site
render();


// FERRAMENTAS DE ACESSIBILIDADE

const accessibilityToggle = $("#accessibilityToggle");
const accessibilityPanel = $("#accessibilityPanel");
const accessibilityStatus = $("#accessibilityStatus");

// Abrir e fechar painel
accessibilityToggle.addEventListener("click", () => {
  const isOpen =
    accessibilityToggle.getAttribute("aria-expanded") === "true";

  accessibilityToggle.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );

  accessibilityPanel.hidden = isOpen;

  if (!isOpen) {
    $("#increaseText").focus();
  }
});

// Aumentar e diminuir tamanho da página
let pageZoom = 1;

function updatePageZoom() {
  document.documentElement.style.zoom = pageZoom;

  accessibilityStatus.textContent =
    `Tamanho da página: ${Math.round(pageZoom * 100)} por cento.`;
}

$("#increaseText").addEventListener("click", () => {
  pageZoom = Math.min(
    1.4,
    Number((pageZoom + 0.1).toFixed(1))
  );

  updatePageZoom();
});

$("#decreaseText").addEventListener("click", () => {
  pageZoom = Math.max(
    0.8,
    Number((pageZoom - 0.1).toFixed(1))
  );

  updatePageZoom();
});

$("#resetText").addEventListener("click", () => {
  pageZoom = 1;
  updatePageZoom();
});

// Alto contraste
$("#contrastToggle").addEventListener("click", event => {
  const enabled = document.body.classList.toggle("high-contrast");

  event.currentTarget.setAttribute(
    "aria-pressed",
    String(enabled)
  );

  accessibilityStatus.textContent = enabled
    ? "Alto contraste ativado."
    : "Alto contraste desativado.";
});

// Espaçamento do texto
$("#spacingToggle").addEventListener("click", event => {
  const enabled = document.body.classList.toggle("extra-spacing");

  event.currentTarget.setAttribute(
    "aria-pressed",
    String(enabled)
  );

  accessibilityStatus.textContent = enabled
    ? "Espaçamento ampliado ativado."
    : "Espaçamento normal restaurado.";
});

// Sublinhado dos links
$("#underlineToggle").addEventListener("click", event => {
  const enabled = document.body.classList.toggle("underlined-links");

  event.currentTarget.setAttribute(
    "aria-pressed",
    String(enabled)
  );

  accessibilityStatus.textContent = enabled
    ? "Links destacados com sublinhado."
    : "Destaque extra dos links desativado.";
});


// LEITURA EM VOZ ALTA

const readButton = $("#readPage");
const pauseButton = $("#pauseReading");
const stopButton = $("#stopReading");

function setReadingButtons(isReading) {
  pauseButton.disabled = !isReading;
  stopButton.disabled = !isReading;
}

// Iniciar leitura
readButton.addEventListener("click", () => {
  if (!("speechSynthesis" in window)) {
    accessibilityStatus.textContent =
      "A leitura em voz alta não está disponível neste navegador. Você pode usar o leitor de tela do dispositivo.";

    return;
  }

  window.speechSynthesis.cancel();

  const mainContent = $("#conteudo").innerText;
  const cleanText = mainContent.replace(/\s+/g, " ").trim();

  if (!cleanText) {
    accessibilityStatus.textContent =
      "Não há conteúdo disponível para leitura.";

    return;
  }

  const speech = new SpeechSynthesisUtterance(cleanText);

  speech.lang = "pt-BR";
  speech.rate = 0.95;

  speech.onstart = () => {
    accessibilityStatus.textContent =
      "Leitura em voz alta iniciada.";

    setReadingButtons(true);
  };

  speech.onend = () => {
    accessibilityStatus.textContent =
      "Leitura finalizada.";

    setReadingButtons(false);
  };

  speech.onerror = () => {
    accessibilityStatus.textContent =
      "Não foi possível realizar a leitura neste momento.";

    setReadingButtons(false);
  };

  window.speechSynthesis.speak(speech);
});

// Pausar ou continuar leitura
pauseButton.addEventListener("click", () => {
  if (!("speechSynthesis" in window)) return;

  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();

    pauseButton.textContent = "Pausar leitura";

    accessibilityStatus.textContent =
      "Leitura retomada.";
  } else {
    window.speechSynthesis.pause();

    pauseButton.textContent = "Continuar leitura";

    accessibilityStatus.textContent =
      "Leitura pausada.";
  }
});

// Parar leitura
stopButton.addEventListener("click", () => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  pauseButton.textContent = "Pausar leitura";

  setReadingButtons(false);

  accessibilityStatus.textContent =
    "Leitura interrompida.";
});

// Fechar painel com a tecla Escape
document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    accessibilityToggle.getAttribute("aria-expanded") === "true"
  ) {
    accessibilityToggle.setAttribute("aria-expanded", "false");

    accessibilityPanel.hidden = true;

    accessibilityToggle.focus();
  }
});
