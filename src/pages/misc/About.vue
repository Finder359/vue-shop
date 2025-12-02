<template>
  <div class="about-page">
    <div class="card">
      <h2 class="typewriter">
        {{ displayedText }}
        <span class="cursor">|</span>
      </h2>

      <p>
        这是一个基于 <strong>Spring Boot + MyBatis + Vue3 + Element Plus</strong>
        搭建的前后端分离项目。
      </p>

      <p>版本：v1.0</p>

      <el-divider />

      <h3>作者</h3>
      <p>正在自学全栈开发的大学生，暂时还没秃头🙂</p>

      <el-button type="primary" @click="$router.push('/')">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",

  data() {
    return {
      fullText: "关于本项目（About This Project）",
      displayedText: "",
      index: 0
    };
  },

  mounted() {
    this.playTyping();
  },

  methods: {
    playTyping() {
      const interval = setInterval(() => {
        this.displayedText += this.fullText[this.index];
        this.index++;

        if (this.index >= this.fullText.length) {
          clearInterval(interval);
        }
      }, 90); // 打字速度
    }
  }
};
</script>

<style scoped>
.about-page {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f1ff, #fdfbfb);
  display: flex;
  justify-content: center;
  padding-top: 80px;
}

.card {
  width: 800px;
  padding: 40px 50px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 35px rgba(0,0,0,0.15);
  animation: fadeIn 1s ease;
}

.typewriter {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
}

.cursor {
  display: inline-block;
  width: 5px;
  animation: blink 0.7s steps(1) infinite;
}


@keyframes blink {
  0%, 50% { opacity: 1; }
  50.1%, 100% { opacity: 0; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

p {
  color: #555;
  line-height: 1.7;
}
</style>
