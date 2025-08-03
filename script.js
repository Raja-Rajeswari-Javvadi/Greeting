// Better Confetti Animation
const quotes = [
    "Yoshii: 'Logic, love, and lovely clicks!'",
    "Suji: 'Care is her language — and hugs too!'",
    "Raji: 'If silence had a prank mode — it's her!'",
    "Shannu: 'Anger + Love = Her Signature Combo'",
    "Sush: 'Tall, funny, and 100% positive'",
    "Naini: 'Cat-mode activated: Cute but chaotic 🐱'",
    "Ammu: 'Style and strength without a word'",
    "Jyo: 'Our spiritual sensor and sweet soul 💫'",
  ];
  let i = 0;
  setInterval(() => {
    document.getElementById("quote").innerText = quotes[i];
    i = (i + 1) % quotes.length;
  }, 4000);
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 200;
const confetti = [];

const colors = ["#f94144", "#f3722c", "#f8961e", "#f9844a", "#f9c74f", "#90be6d", "#43aa8b", "#577590"];

class ConfettiParticle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.radius = Math.random() * 6 + 4;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speed = Math.random() * 3 + 2;
    this.tilt = Math.random() * 10 - 5;
    this.tiltAngle = 0;
    this.tiltSpeed = Math.random() * 0.1 + 0.05;
  }

  draw() {
    ctx.beginPath();
    ctx.lineWidth = this.radius;
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x + this.tilt + this.radius / 2, this.y);
    ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.radius);
    ctx.stroke();
  }

  update() {
    this.y += this.speed;
    this.tiltAngle += this.tiltSpeed;
    this.tilt = Math.sin(this.tiltAngle) * 10;

    if (this.y > canvas.height) {
      this.reset();
    }

    this.draw();
  }
}

function initConfetti() {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push(new ConfettiParticle());
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => c.update());
  requestAnimationFrame(animateConfetti);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

initConfetti();
animateConfetti();
