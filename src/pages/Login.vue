<template>
  <div class="login-container">
    <el-card class="login-card" shadow="hover">
      <h2 class="title">后台管理中心</h2>

      <el-form
        :model="form"
        :rules="rules"
        ref="loginForm"
        label-width="0"
        class="login-form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="登录账号"
            clearable
          >
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="登录密码"
            show-password
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-button
          type="primary"
          class="login-btn"
          @click="submitLogin"
        >
          登录
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import { User, Lock } from "@element-plus/icons-vue";

export default {
  name: "LoginPage",

  components: { User, Lock },

  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },

  methods: {
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) return;

        axios
          .post("http://localhost:8080/user/login", this.form)
          .then((res) => {
            if (res.data.code === 200) {
              // 保存 token（后续请求要带上）
              localStorage.setItem("token", res.data.token);

              this.$message.success("登录成功");

              // 跳转后台首页
              this.$router.push("/");
            } else {
              this.$message.error(res.data.msg);
            }
          });
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #6eb5ff, #90e0ef);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 360px;
  padding: 30px;
  border-radius: 12px;
}

.title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: bold;
}

.login-btn {
  width: 100%;
  margin-top: 20px;
}
</style>
