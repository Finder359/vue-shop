<template>
  <div>
    <h2>用户管理</h2>

    <table border="1" cellspacing="0" cellpadding="8">
      <tr>
        <th>ID</th>
        <th>用户名</th>
        <th>密码</th>
      </tr>

      <tr v-for="u in users" :key="u.id">
        <td>{{ u.id }}</td>
        <td>{{ u.username }}</td>
        <td>{{ u.password }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserList",
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios.get("http://localhost:8080/user/list")
      .then(res => {
        this.users = res.data;
      });
  }
};
</script>

<style scoped>
table {
  margin-top: 20px;
  background: white;
}
</style>
