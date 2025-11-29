<template>
  <div class="page-edit-user">
    <el-card>
      <h2 style="margin-bottom: 20px">修改用户</h2>

      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
        status-icon
      >
        <!-- 能手动填写的 ID 输入框 -->
        <el-form-item label="用户 ID" prop="id">
          <el-input
            v-model="form.id"
            placeholder="请输入用户ID"
            style="width: 200px"
            :disabled="!manualMode"
          />

          <!-- 只有在“无路由ID模式”下显示加载按钮 -->
          <el-button
            v-if="manualMode"
            type="primary"
            style="margin-left: 10px"
            @click="loadUser"
          >加载用户</el-button>
        </el-form-item>

        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            show-password
            placeholder="请输入密码"
          />
        </el-form-item>

        <el-form-item label="确认密码" prop="repassword">
          <el-input
            v-model="form.repassword"
            type="password"
            show-password
            placeholder="请再次输入密码"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">保存修改</el-button>
          <el-button @click="resetForm">重置</el-button>
          <el-button @click="$router.push('/users')">返回列表</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const formRef = ref();

// 是否是手动模式（没有路由ID）
const manualMode = ref(false);

// 表单数据
const form = reactive({
  id: "",
  username: "",
  password: "",
  repassword: ""
});

// 表单验证规则
const rules = {
  id: [{ required: true, message: "请输入用户ID", trigger: "blur" }],
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
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

// 加载用户（手动按钮 或 自动）
const loadUser = async () => {
  if (!form.id) {
    return ElMessage.warning("请先输入用户ID");
  }

  try {
    const resp = await axios.get(`http://localhost:8080/user/${form.id}`);
    const u = resp.data;

    if (!u || !u.id) {
      return ElMessage.error("未找到该用户");
    }

    form.username = u.username;
    form.password = u.password;
    form.repassword = u.password;

    ElMessage.success("用户数据已加载");
  } catch (err) {
    ElMessage.error("加载失败，请检查 ID 是否存在");
  }
};

// 提交更新
const submitForm = () => {
  formRef.value.validate(async valid => {
    if (!valid) return;

    try {
      const resp = await axios.put("http://localhost:8080/user/update", {
        id: form.id,
        username: form.username,
        password: form.password
      });

      if (resp.data.code === 200) {
        ElMessage.success("修改成功！");
        router.push("/users");
      } else {
        ElMessage.error(resp.data.msg || "修改失败");
      }
    } catch (err) {
      ElMessage.error("服务器错误");
    }
  });
};

const resetForm = () => {
  formRef.value.resetFields();
};

onMounted(() => {
  const id = route.params.id;

  if (id) {
    // 自动模式：从路由进入，例如 /edit-user/3
    manualMode.value = false;
    form.id = id;
    loadUser();
  } else {
    // 手动输入 ID 模式：访问 /edit-user
    manualMode.value = true;
  }
});
</script>

<style scoped>
.page-edit-user {
  padding: 20px;
}
</style>
