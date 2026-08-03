document.body.classList.add("js-ready");

// ===== Curseur personnalisé =====
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

if (cursorDot && cursorRing && matchMedia("(hover: hover)").matches) {
  window.addEventListener("mousemove", (e) => {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
    cursorRing.style.left = e.clientX + "px";
    cursorRing.style.top = e.clientY + "px";
  });

  document.querySelectorAll("a, button, .project-card, .skill-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorRing.style.transform = "translate(-50%, -50%) scale(1.6)";
    });
    el.addEventListener("mouseleave", () => {
      cursorRing.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });
}

// ===== Barre de progression de scroll =====
const progressFill = document.getElementById("progressFill");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  if (progressFill) progressFill.style.width = scrollPercent + "%";
});

// ===== Toggle thème clair/sombre =====
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeToggle.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
  });
}

// ===== Effet "typing" sur le sous-titre =====
const typedTextEl = document.getElementById("typedText");
const phrases = [
  "Data Analyst passionné par la donnée",
  "Data Engineer orienté automatisation",
  "Futur talent Data & IA en recherche de CDI"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  if (!typedTextEl) return;
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedTextEl.textContent = currentPhrase.substring(0, charIndex);

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(typeLoop, speed);
}

typeLoop();

// ===== Compteurs animés (stats) =====
const counters = document.querySelectorAll(".counter");

function animateCounters() {
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    let current = 0;
    const increment = Math.max(target / 60, 1);

    const update = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };
    update();
  });
}

const statsSection = document.getElementById("stats");
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !statsAnimated) {
      animateCounters();
      statsAnimated = true;
    }
  });
}, { threshold: 0.4 });

if (statsSection) statsObserver.observe(statsSection);

// ===== Barres de compétences animées =====
const bars = document.querySelectorAll(".bar-fill");

const barsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const level = entry.target.getAttribute("data-level");
      entry.target.style.width = level + "%";
    }
  });
}, { threshold: 0.4 });

bars.forEach((bar) => barsObserver.observe(bar));

// ===== Apparition des sections au scroll =====
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => revealObserver.observe(el));

// ===== Smooth scroll sur les liens internes =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ===== Particules animées en fond (canvas) =====
const canvas = document.getElementById("bg-canvas");

if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function createParticles(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3
      });
    }
  }
  createParticles(80);

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(127,90,240,0.5)";

    particles.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.strokeStyle = `rgba(127,90,240,${1 - dist / 110})`;
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

const KNOWLEDGE_BASE = [
  { keywords: ["qui", "es-tu", "présente", "présentation", "toi", "bonjour", "salut"],
    answer: "Je suis Abdoul-Aziz Ouedraogo, étudiant en 5ᵉ année Big Data & IA basé à Bondy. Je travaille en alternance chez ALCYON-E comme Data Analyst / Data Engineer." },
  { keywords: ["expérience", "alcyon", "travail", "poste", "job"],
    answer: "Depuis novembre 2023 chez ALCYON-E, je gère l'orchestration de données, la création d'indicateurs, l'automatisation Python/SQL et des dashboards Power BI." },
  { keywords: ["sncf", "peps", "consultant"],
    answer: "J'ai été alternant consultant chez SNCF Réseau via le programme PEPS, sur la consolidation de données pendant 3 ans." },
  { keywords: ["compétences", "stack", "technologies", "outils"],
    answer: "Je maîtrise Python, SQL, Power BI, TensorFlow, Scikit-learn, Azure, Docker, FastAPI, Git/GitHub et Ollama." },
  { keywords: ["machine learning", "ml", "deep learning", "ia", "modèle"],
    answer: "Je développe des modèles de ML (régression, classification) et de Deep Learning (CNN, Transformers), avec un intérêt pour les LLMs et le RAG." },
  { keywords: ["formation", "études", "école", "diplôme"],
    answer: "Je suis en 5ᵉ année Big Data & IA, avec une immersion académique au Chongqing City Management College." },
  { keywords: ["projet", "projets", "réalisation"],
    answer: "J'ai réalisé un pipeline ETL avec Power BI, un modèle prédictif sur Streamlit, un chatbot RAG avec Ollama, et un monitoring IoT." },
  { keywords: ["disponible", "cdi", "recherche", "embauche"],
    answer: "Je suis en recherche active de mon premier CDI, disponible à partir d'octobre 2026." },
  { keywords: ["contact", "email", "mail", "linkedin"],
    answer: "Contactez-moi à ouedraogoabdoulaziz1960@gmail.com ou via LinkedIn : linkedin.com/in/ouedraogoaaziz." },
  { keywords: ["localisation", "où", "habite", "bondy"],
    answer: "Je suis basé à Bondy, en Île-de-France." }
];

const FALLBACK_ANSWERS = [
  "Je n'ai pas encore la réponse précise, contactez-moi à ouedraogoabdoulaziz1960@gmail.com !",
  "Bonne question ! Contactez-moi via LinkedIn ou email pour en discuter."
];

const SUGGESTED_QUESTIONS = [
  "Qui es-tu ?",
  "Quelles sont tes compétences ?",
  "Parle-moi de tes projets",
  "Quelle est ton expérience chez ALCYON ?",
  "Es-tu disponible pour un CDI ?",
  "Comment te contacter ?"
];

const chatBubble = document.getElementById("chat-bubble");
const chatWindow = document.getElementById("chat-window");
const chatClose = document.getElementById("chat-close");
const chatMessages = document.getElementById("chat-messages");
const chatSuggestions = document.getElementById("chat-suggestions");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

if (chatBubble && chatWindow) {
  chatBubble.addEventListener("click", () => {
    chatWindow.classList.toggle("open");
    if (chatMessages.children.length === 0) {
      addMessage("bot", "Bonjour ! Je suis l'assistant d'Abdoul-Aziz. Posez-moi une question, ou choisissez une suggestion 👇");
      renderSuggestions();
    }
  });

  chatClose.addEventListener("click", () => chatWindow.classList.remove("open"));
  chatSend.addEventListener("click", handleSend);
  chatInput.addEventListener("keypress", (e) => { if (e.key === "Enter") handleSend(); });
} else {
  console.error("Chatbot: éléments HTML introuvables. Vérifie les id dans index.html.");
}

function renderSuggestions() {
  if (!chatSuggestions) {
    console.error("Chatbot: div #chat-suggestions introuvable dans le HTML.");
    return;
  }
  chatSuggestions.innerHTML = "";
  chatSuggestions.classList.remove("hidden");

  SUGGESTED_QUESTIONS.forEach((question) => {
    const chip = document.createElement("button");
    chip.className = "suggestion-chip";
    chip.textContent = question;
    chip.addEventListener("click", () => {
      addMessage("user", question);
      chatSuggestions.classList.add("hidden");
      setTimeout(() => {
        addMessage("bot", findAnswer(question));
        setTimeout(renderSuggestions, 400);
      }, 500);
    });
    chatSuggestions.appendChild(chip);
  });
}

function addMessage(sender, text) {
  const bubble = document.createElement("div");
  bubble.className = `chat-msg ${sender}`;
  bubble.textContent = text;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function findAnswer(userText) {
  const text = userText.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;
  KNOWLEDGE_BASE.forEach((entry) => {
    let score = 0;
    entry.keywords.forEach((kw) => { if (text.includes(kw)) score++; });
    if (score > bestScore) { bestScore = score; bestMatch = entry; }
  });
  if (bestMatch && bestScore > 0) return bestMatch.answer;
  return FALLBACK_ANSWERS[Math.floor(Math.random() * FALLBACK_ANSWERS.length)];
}

function handleSend() {
  const text = chatInput.value.trim();
  if (!text) return;
  if (chatSuggestions) chatSuggestions.classList.add("hidden");
  addMessage("user", text);
  chatInput.value = "";
  setTimeout(() => {
    addMessage("bot", findAnswer(text));
    setTimeout(renderSuggestions, 400);
  }, 500);
}