<template>
  <div class="page-add-user">
    <el-card>
      <h2 style="margin-bottom: 20px">新增用户</h2>

      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>

        <el-form-item label="确认密码" prop="repassword">
          <el-input
            v-model="form.repassword"
            type="password"
            placeholder="请再次输入密码"
            show-password
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

// 表单对象
const form = reactive({
  username: "",
  password: "",
  repassword: ""
});

// 表单引用
const formRef = ref();
const router = useRouter();

// 校验规则
const rules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" }
  ],
  repassword: [
    { required: true, message: "请再次输入密码", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value !== form.password) {
          callback(new Error("两次输入密码不一致"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    }
  ]
};

// 提交表单
const submitForm = () => {
  formRef.value.validate(async (valid) => {
    if (!valid) return;

    try {
      const resp = await axios.post("http://localhost:8080/user/register", {
        username: form.username,
        password: form.password
      });

      if (resp.data.code === 200) {
        ElMessage.success("新增用户成功！");
        router.push("/users");  // 添加成功跳转到用户列表
      } else {
        ElMessage.error(resp.data.msg || "新增失败");
      }
    } catch (err) {
      ElMessage.error("服务器错误，新增失败");
      console.error(err);
    }
  });
};

const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<style scoped>
.page-add-user {
  padding: 20px;
}
</style>
