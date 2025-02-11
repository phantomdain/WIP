// Snowfall Effect with Pure JavaScript
(function snowfall() {
  // Create and configure the canvas
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  // Resize the canvas to fill the window
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Create snowflake properties
  const snowflakes = [];
  function createSnowflakes(count) {
    for (let i = 0; i < count; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        wind: (Math.random() - 0.5) * 0.5,
      });
    }
  }
  createSnowflakes(200);

  // Draw and update snowflakes
  function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    snowflakes.forEach((flake) => {
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    });
    ctx.fill();
  }

  function updateSnowflakes() {
    snowflakes.forEach((flake) => {
      flake.y += flake.speed;
      flake.x += flake.wind;

      // Reset snowflake position if it moves off-screen
      if (flake.y > canvas.height) {
        flake.y = -flake.radius;
        flake.x = Math.random() * canvas.width;
      }
      if (flake.x > canvas.width || flake.x < 0) {
        flake.x = Math.random() * canvas.width;
      }
    });
  }

  // Animation loop
  function animate() {
    drawSnowflakes();
    updateSnowflakes();
    requestAnimationFrame(animate);
  }

  animate();
})();
