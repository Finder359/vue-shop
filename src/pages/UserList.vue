<template>
  <div>
    <el-card shadow="always">

      <div style="margin-bottom: 15px; display: flex; justify-content: space-between;align-items: center;">
        <div style="font-size: 18px; font-weight: bold;">用户管理</div>

        <div>
        <el-button type="danger"  @click="batchDelete">
          批量删除
        </el-button>
        <el-button type="primary" @click="goAdd">新增用户</el-button>
        </div>
        
      </div>

      <!-- 表格 -->
      <el-table :data="users" border style="width: 100%" ref="tableRef" @selection-change="onSelectionChange">
        <el-table-column type="selection" width="50">
        </el-table-column>

        <el-table-column prop="id" label="ID" width="80" />

        <el-table-column prop="username" label="用户名" />

        <el-table-column prop="password" label="密码" />

        <el-table-column label="操作" width="180">
          <template #default="scope">
            <!-- scope.row 就是当前行的数据 -->
            <el-button size="small" @click="edit(scope.row.id)">编辑</el-button>

            <el-button size="small" type="danger" @click="deleteUser(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>




    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {//相当于public class xxx extends Vue
  name: "UserList",

  data() {//定义一些变量
    return {
      users: [],
      selectedUsers: [],
      checkAll: false,
      keyword: "",
    };
  },

  mounted() {//页面加载完成后就执行的东西
    this.loadUsers();
  },

  methods: {//所有的功能函数都写在这里
    // 加载用户列表
    loadUsers() {
      axios.get("http://localhost:8080/user/list", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        this.users = res.data;
      })
      .catch(err => {
        console.error("获取用户列表失败:", err);
      });
    },

    // 全选/取消全选
    toggleAll() {
      if (this.checkAll) {
        this.selectedIds = this.users.map((u) => u.id);
      } else {
        this.selectedIds = [];
      }
    },

    // 搜索（现在仅模拟）
    search() {
      alert("搜索功能暂未实现，关键字：" + this.keyword);
    },

    // 单个删除
    deleteUser(id) {
         this.$confirm("确定要删除该用户吗？", "警告", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios
            .delete(`http://localhost:8080/user/${id}`)
            .then(resp => {
              if (resp.data.code === 200) {
                this.$message.success("删除成功！");
                this.loadUsers(); // 删除后刷新列表
              } else {
                this.$message.error(resp.data.msg || "删除失败");
              }
            })
            .catch(() => {
              this.$message.error("服务器错误，删除失败");
            });
        })
        .catch(() => {
          // 用户点击了取消，不做处理
        });
    },

     // 监听多选变化
    onSelectionChange(val) {
      this.selectedUsers = val;
    },

    // 批量删除
    batchDelete() {
      if (this.selectedUsers.length === 0) {
        return this.$message.warning("请选择要删除的用户");
      }

      this.$confirm(
        `你确定要删除选中的 ${this.selectedUsers.length} 个用户吗？`,
        "警告",
        {
          confirmButtonText: "删除",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          // 提取 ID 数组
          const ids = this.selectedUsers.map(u => u.id);

          axios
            .post("http://localhost:8080/user/batchDelete", ids)
            .then(resp => {
              if (resp.data.code === 200) {
                this.$message.success("批量删除成功");
                this.loadUsers();
              } else {
                this.$message.error(resp.data.msg || "批量删除失败");
              }
            });
        })
        .catch(() => {});
    },

    // 排序（占位）
    sort() {
      alert("排序功能未实现，仅保留 UI");
    },

    // 编辑用户
    edit(id) {
      // alert("编辑用户 ID: " + id);
       this.$router.push('/edit-user/' + id)
    },

    // 新增用户
    goAdd() {
      // alert("跳转新增页面（AddUser.vue）");
       this.$router.push("/add-user");
    },
  },
};
</script>

<style scoped>
/* 复用 pintuer.css/admin.css 的风格即可 */
</style>
