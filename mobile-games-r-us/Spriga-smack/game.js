const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const sprigImg = new Image();
sprigImg.src = "assets/ball.png";

const scream = new Audio("assets/hit.mp3");

let sprigs = [];
let batSwinging = false;

function spawnSprig() {
  const y = Math.random() * 350 + 50;
  sprigs.push({ x: 800, y: y, hit: false });
}

function drawSprigs() {
  sprigs.forEach(sprig => {
    if (!sprig.hit) {
      ctx.drawImage(sprigImg, sprig.x, sprig.y, 64, 64);
    } else {
      ctx.drawImage(sprigImg, sprig.x, sprig.y, 64, 64);
      // Draw red lump on head
      ctx.beginPath();
      ctx.arc(sprig.x + 48, sprig.y + 12, 6, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
    }
  });
}

function updateSprigs() {
  sprigs.forEach(sprig => {
    if (!sprig.hit) sprig.x -= 3;
  });
}

function swingBat() {
  batSwinging = true;
  setTimeout(() => (batSwinging = false), 150);

  sprigs.forEach(sprig => {
    if (!sprig.hit && sprig.x < 150 && sprig.x > 80) {
      sprig.hit = true;
      scream.currentTime = 0;
      scream.play();
    }
  });
}

function drawBat() {
  if (batSwinging) {
    ctx.fillStyle = "#f00";
    ctx.fillRect(100, 200, 20, 100);
  }
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateSprigs();
  drawSprigs();
  drawBat();
  requestAnimationFrame(loop);
}

setInterval(spawnSprig, 1400);

document.addEventListener("keydown", e => {
  if (e.code === "Space") swingBat();
});

canvas.addEventListener("click", swingBat);
canvas.addEventListener("touchstart", swingBat);

loop();
