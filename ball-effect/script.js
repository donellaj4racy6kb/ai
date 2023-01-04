const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      let particles = [];

      class Particle {
        constructor() {
          this.x = Math.random() * innerWidth;
          this.y = Math.random() * innerHeight;
          this.radius = Math.random() * 20 + 5;
          this.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 255)}, 1)`;
          this.velocity = {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5,
          };
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = this.color;
          ctx.fill();
        }

        update() {
          this.x += this.velocity.x;
          this.y += this.velocity.y;

          if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.velocity.x = -this.velocity.x;
          }
          if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.velocity.y = -this.velocity.y;
          }

          this.draw();
        }
      }

      function init() {
        particles = [];
        for (let i = 0; i < 100; i++) {
          particles.push(new Particle());
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
        }
      }

      canvas.addEventListener("mousemove", (event) => {
        for (let i = 0; i < particles.length; i++) {
          particles[i].x = event.clientX;
          particles[i].y = event.clientY;
        }
      });

      canvas.addEventListener("click", () => {
        init();
      });

      init();
      animate();