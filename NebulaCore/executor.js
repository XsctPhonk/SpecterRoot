// Handle mode switching
const modeSelect = document.getElementById('mode');
const manualInputs = document.getElementById('manual-inputs');
const aiPrompt = document.getElementById('ai-prompt');

modeSelect.addEventListener('change', () => {
  if (modeSelect.value === 'manual') {
    manualInputs.style.display = 'block';
    aiPrompt.style.display = 'none';
  } else {
    manualInputs.style.display = 'none';
    aiPrompt.style.display = 'block';
  }
});

function executeCode() {
  const url = document.getElementById('url').value;
  const mode = modeSelect.value;

  if (mode === 'manual') {
    const code = document.getElementById('code').value;
    const type = document.getElementById('type').value;
    const lang = document.getElementById('language').value;

    if (!url || !code) return alert("Missing URL or code");

    // Example: open tab and run JS (in real scenario: needs permissions)
    const script = type === 'bookmarklet'
      ? `javascript:(function(){${code}})()`
      : code;

    window.open(url, '_blank');
    alert('Inject manually: \n' + script);
  } else {
    const query = document.getElementById('aiQuery').value;
    if (!query || !url) return alert("Missing query or URL");
    alert("AI request sent. (Not implemented)");
  }
}

// Nebula particle background
const canvas = document.getElementById("nebula");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function drawNebula() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = '#0ff';
    ctx.fill();

    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  }
  requestAnimationFrame(drawNebula);
}

drawNebula();
