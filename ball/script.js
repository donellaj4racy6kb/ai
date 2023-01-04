const ball = document.getElementById('ball');

let x = 0;
let y = 0;
let dx = 5;
let dy = 5;

function update() {
  // Check for wall collisions
  if (x + dx > window.innerWidth - 50 || x + dx < 0) {
    dx = -dx;
  }
  if (y + dy > window.innerHeight - 50 || y + dy < 0) {
    dy = -dy;
  }

  // Update ball position
  x += dx;
  y += dy;
  ball.style.top = `${y}px`;
  ball.style.left = `${x}px`;

  requestAnimationFrame(update);
}

update();
