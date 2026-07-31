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