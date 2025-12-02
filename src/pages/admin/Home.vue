<template>
  <el-container style="height: 100vh;">
    <!-- 顶部 -->
    <el-header class="header-bar">
      <div class="logo-area">
        <img src="/images/y.jpg" alt="" class="logo" />
        <span class="title">后台管理中心</span>
      </div>

      <div class="header-buttons">
        <el-button type="success"  @click="goFront">
          前台首页
        </el-button>

        <el-button type="primary"  @click="clearCache">
          清除缓存
        </el-button>

        <el-button type="danger"  @click="logout">
          退出登录
        </el-button>
      </div>
    </el-header>

    <el-container>
      <!-- 左侧菜单 -->
      <el-aside width="220px" class="aside-menu">
        <el-menu
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
          :default-active="activeMenu"
          :unique-opened="true"
          router
          @select="onMenuSelect"
        >

          <!-- 用户管理 -->
          <el-sub-menu index="1" >
            <template #title>
              <span>用户管理</span>
            </template>

            <el-menu-item index="/admin/users">用户管理</el-menu-item>
            <el-menu-item index="/admin/add-user">添加用户</el-menu-item>
            <el-menu-item index="/admin/edit-user">编辑用户</el-menu-item>
          </el-sub-menu>

          <!-- 商品管理 -->
          <el-sub-menu index="2">
            <template #title>
              <span>商品管理</span>
            </template>

            <el-menu-item index="/goods">商品管理</el-menu-item>
            <el-menu-item index="/goods/add">添加商品</el-menu-item>
          </el-sub-menu>

          <!-- 订单管理 -->
          <el-sub-menu index="3">
            <template #title>
              <span>订单管理</span>
            </template>

            <el-menu-item index="/order">订单管理</el-menu-item>
            <el-menu-item index="/order/add">添加订单</el-menu-item>
          </el-sub-menu>

          <!-- 会员管理 -->
          <el-sub-menu index="4">
            <template #title>
              <span>会员管理</span>
            </template>

            <el-menu-item index="/member">会员管理</el-menu-item>
            <el-menu-item index="/member/add">添加会员</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <!-- 右侧内容 -->
      <el-main class="main-content">
        <router-view :key="routerKey"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
      routerKey: 0,
      activeMenu: this.$route.path
    };
  },

  watch: {
    $route(to) {
      this.activeMenu = to.path;
    }
  },

  methods: {
    onMenuSelect(index) {
      if (this.$route.path === index) {
        // 同路由 → 刷新
        this.routerKey++;
      } else {
        // 让 Element Plus 自动路由跳转
        this.$router.push(index);
      }
    },
    goFront() {
      alert("跳转前台首页（以后可改）");
    },

    clearCache() {
      this.$message.success("缓存清除成功！");
    },

    logout() {
      // 清除 token
      localStorage.removeItem("token");

      // 跳转到登录页
      this.$router.push("/login");

      // 可选：提示一下
      this.$message.success("您已退出登录");
    }
  }
};
</script>

<style scoped>
.header-bar {
  background-color: #409eff;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-area {
  display: flex;
  align-items: center;
}

.logo {
  height: 42px;
  border-radius: 50%;
  margin-right: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.header-buttons {
  display: flex;
  gap: 10px;
}

.aside-menu {
  background-color: #304156;
}

.main-content {
  background-color: #f2f3f5;
  padding: 20px;
}
</style>
