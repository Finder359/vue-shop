<template>
  <div class="home-page" style="background-color:#f2f9fd;">
    <div class="header bg-main">
      <div class="logo margin-big-left fadein-top">
        <h1>
          <img
            src="/images/y.jpg"
            class="radius-circle rotate-hover"
            height="50"
            alt=""
          />
          后台管理中心
        </h1>
      </div>
      <div class="head-l">
        <a class="button button-little bg-green" href="#" target="_blank">
          <span class="icon-home"></span> 前台首页
        </a>
        &nbsp;&nbsp;
        <a href="##" class="button button-little bg-blue">
          <span class="icon-wrench"></span> 清除缓存
        </a>
        &nbsp;&nbsp;
        <a class="button button-little bg-red" href="/login">
          <!-- 以后可以跳转到 Vue 的登录路由 -->
          <span class="icon-power-off"></span> 退出登录
        </a>
      </div>
    </div>

    <div class="leftnav">
      <div class="leftnav-title">
        <strong><span class="icon-list"></span>菜单列表</strong>
      </div>

      <h2><span class="icon-pencil-square-o"></span>用户管理</h2>
      <ul>
        <li>
          <a  @click="$router.push('/users')" target="right"><span class="icon-caret-right"></span>用户管理</a>
        </li>
        <li>
          <a href="#" target="right"><span class="icon-caret-right"></span>添加用户</a>
        </li>
        <li>
          <a href="#" target="right"><span class="icon-caret-right"></span>修改密码</a>
        </li>
      </ul>

      <h2><span class="icon-pencil-square-o"></span>商品管理</h2>
      <ul>
        <li>
          <a href="#" target="right"><span class="icon-caret-right"></span>商品管理</a>
        </li>
        <li>
          <a href="#" target="right"><span class="icon-caret-right"></span>添加商品</a>
        </li>
      </ul>

      <h2><span class="icon-pencil-square-o"></span>订单管理</h2>
      <ul>
        <li>
          <a href="#" target="right"><span class="icon-caret-right"></span>订单管理</a>
        </li>
        <li>
          <a href="#" target="right"><span class="icon-caret-right"></span>添加订单</a>
        </li>
      </ul>

      <h2><span class="icon-pencil-square-o"></span>会员管理</h2>
      <ul>
        <li>
          <a href="#" target="right"><span class="icon-caret-right"></span>会员管理</a>
        </li>
        <li>
          <a href="#" target="right"><span class="icon-caret-right"></span>添加会员</a>
        </li>
      </ul>
    </div>

    <ul class="bread">
      <li>
        <a href="#" target="right" class="icon-home"> 首页</a>
      </li>
      <li><a href="##" id="a_leader_txt">网站信息</a></li>
      <li>
        <b>当前语言：</b>
        <span style="color:red;">中文</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;切换语言：
        <a href="##">中文</a>
        &nbsp;&nbsp;<a href="##">英文</a>
      </li>
    </ul>

    <div class="admin">
      <!-- 这里原来是 iframe，可以先保留，后面用 Vue 路由替代 -->
      <iframe
        scrolling="auto"
        frameborder="0"
        src="/info.html"
        name="right"
        width="100%"
        height="100%"
      ></iframe>
    </div>

    <div style="text-align:center;">
      <p>
        来源:
        <a href="http://www.mycodes.net/" target="_blank">源码之家</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    // 使用全局引入的 jQuery（在 index.html 里）
    if (window.$) {
      window.$(function () {
        window.$(".leftnav h2").click(function () {
          window.$(this).next().slideToggle(200);
          window.$(this).toggleClass("on");
        });
        window.$(".leftnav ul li a").click(function () {
          window.$("#a_leader_txt").text(window.$(this).text());
          window.$(".leftnav ul li a").removeClass("on");
          window.$(this).addClass("on");
        });
      });
    }
  },
};
</script>

<style scoped>
/* 这里先不用写样式，直接用全局 pintuer.css + admin.css。
   如果以后想单独改某些样式，可以在这里加。 */
</style>
