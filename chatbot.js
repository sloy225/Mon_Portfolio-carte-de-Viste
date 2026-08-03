const chatBubble = document.getElementById("chat-bubble");
const chatWindow = document.getElementById("chat-window");
const chatClose = document.getElementById("chat-close");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

chatBubble.addEventListener("click", () => {
  chatWindow.classList.toggle("open");
  if (chatMessages.children.length === 0) {
    addMessage("bot", "Bonjour ! Je suis l'assistant d'Abdoul-Aziz. Posez-moi une question sur son parcours, ses compétences ou ses projets 👋");
  }
});

chatClose.addEventListener("click", () => chatWindow.classList.remove("open"));

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
    entry.keywords.forEach((kw) => {
      if (text.includes(kw)) score++;
    });
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  });

  if (bestMatch && bestScore > 0) return bestMatch.answer;
  return FALLBACK_ANSWERS[Math.floor(Math.random() * FALLBACK_ANSWERS.length)];
}

function handleSend() {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage("user", text);
  chatInput.value = "";

  setTimeout(() => {
    addMessage("bot", findAnswer(text));
  }, 500);
}

chatSend.addEventListener("click", handleSend);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSend();
});