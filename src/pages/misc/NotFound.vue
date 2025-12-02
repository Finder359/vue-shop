<template>
  <div class="star-container">
    <canvas ref="canvas" class="star-canvas"></canvas>

    <div class="content">
      <h1 class="title">404</h1>
      <h2 class="subtitle">你迷失在宇宙中了…</h2>

      <el-button type="primary" @click="goHome">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    this.initStars();
  },

  methods: {
    goHome() {
      this.$router.push("/");
    },

    // 星空动效
    initStars() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const stars = [];
      const starCount = 150;

      // 生成星星
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          speed: Math.random() * 0.3 + 0.1
        });
      }

      // 动画循环
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";
        stars.forEach((s) => {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();

          // 流星下落效果
          s.y += s.speed;
          if (s.y > canvas.height) {
            s.y = 0;
            s.x = Math.random() * canvas.width;
          }
        });

        requestAnimationFrame(animate);
      }

      animate();
    }
  }
};
</script>

<style scoped>
.star-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}

.star-canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  text-align: center;
  color: white;
  animation: fadeIn 1.6s ease-out;
}

.title {
  font-size: 120px;
  margin-bottom: 0;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
}

.subtitle {
  margin-top: 10px;
  font-size: 24px;
  opacity: 0.8;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, -35%); }
  to   { opacity: 1; transform: translate(-50%, -40%); }
}
</style>
