<template>
  <div class="container">
    <el-card>
      <h2>验证您不是机器人 🤖</h2>
      <p>倾斜手机左右移动滑块，使其保持 3 秒即可完成验证</p>

      <!-- 色条与滑块 -->
      <div class="bar">
        <div class="target"></div>
        <div class="slider" :style="{ left: sliderLeft + '%' }"></div>
      </div>

      <div class="info">
        <p>目标位置：0.680</p>
        <p>当前滑块位置：{{ position.toFixed(3) }}</p>
      </div>

      <div class="time-box">
        <span>保持时间：</span>
        <el-progress
          :percentage="holdPercent"
          :stroke-width="10"
          color="#67C23A"
          style="width: 100%">
        </el-progress>
      </div>

      <el-result
        v-if="verified"
        icon="success"
        title="验证通过"
        sub-title="🎉 您已成功完成验证！">
      </el-result>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const position = ref(0.5);       // 滑块位置（0~1）
const sliderLeft = ref(50);      // 滑块 left 百分比
const verified = ref(false);     // 是否验证成功
const targetMin = 0.60;
const targetMax = 0.75;

let holding = false;
let holdStart = 0;

// 进度条（保持时间占比）
const holdPercent = ref(0);

function handleTilt(event) {
  if (verified.value) return;

  let gamma = event.gamma; // 左右倾斜角度（-45~45）
  position.value += gamma / 120; // 更平稳
  position.value = Math.max(0, Math.min(1, position.value));

  sliderLeft.value = position.value * 100;

  // 判断是否进入目标区
  if (position.value >= targetMin && position.value <= targetMax) {
    if (!holding) {
      holding = true;
      holdStart = Date.now();
    } else {
      let elapsed = Date.now() - holdStart;
      holdPercent.value = Math.min((elapsed / 3000) * 100, 100);

      if (elapsed >= 3000) {
        verified.value = true;
      }
    }
  } else {
    holding = false;
    holdPercent.value = 0;
  }
}

onMounted(() => {
  window.addEventListener("deviceorientation", handleTilt, true);
});

onBeforeUnmount(() => {
  window.removeEventListener("deviceorientation", handleTilt);
});
</script>

<style scoped>
.container {
  padding: 20px;
}

.bar {
  width: 100%;
  height: 50px;
  background: #dce6ff;
  border-radius: 30px;
  position: relative;
  margin: 30px 0;
  overflow: hidden;
}

.target {
  position: absolute;
  width: 15%;
  height: 100%;
  background: rgba(103, 195, 58, 0.35); /* 绿色透明 */
  left: 60%;
  border-radius: 30px;
}

.slider {
  position: absolute;
  width: 50px;
  height: 50px;
  background: #409eff;
  border-radius: 50%;
  top: 0;
  transform: translateX(-50%);
  transition: left 0.1s linear;
}

.info {
  font-size: 14px;
  margin-bottom: 15px;
}

.time-box {
  margin-top: 10px;
}
</style>
