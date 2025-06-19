document.addEventListener("DOMContentLoaded", () => {
  console.log("javascript loading");

  const toggleBtn = document.getElementById('cursorToggle');
  let sparklesOn = false;

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('cat-cursor');
    sparklesOn = !sparklesOn;
  });

  let lastSparkleTime = 0;

  document.addEventListener('mousemove', e => {
    if (!sparklesOn) return;

    const now = Date.now();
    if (now - lastSparkleTime < 50) return; // Only sparkles every 50ms
    lastSparkleTime = now;

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    const offsetX = (Math.random() - 0.5) * 10; // tighter horizontal spread
    const offsetY = Math.random() * 5;

    const xOffset = -24; // left of cursor
    const yOffset = 10;  // below cursor

    sparkle.style.left = `${e.clientX + xOffset + offsetX}px`;
    sparkle.style.top = `${e.clientY + yOffset + offsetY}px`;
    sparkle.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1400);
  });
});
