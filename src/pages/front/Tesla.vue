<template>
  <div class="body">
    <!-- 顶部导航 -->
    <nav class="navbar">
      <div class="logo-container">
        <img src="/images/tesla-images/teslaLogo.png" alt="Tesla logo" class="teslaLogo" />
      </div>

      <div class="center-nav-container">
        <ul class="menu-list">
          <li class="nav-list"><a href="#models">Model S</a></li>
          <li class="nav-list"><a href="#model3">Model 3</a></li>
          <li class="nav-list"><a href="#modelx">Model X</a></li>
          <li class="nav-list"><a href="#modely">Model Y</a></li>
          <li class="nav-list"><a href="#roof">Solar Roof</a></li>
          <li class="nav-list"><a href="#panels">Solar Panels</a></li>
        </ul>
      </div>

      <div class="right-nav-container">
        <ul class="menu-list">
          <li class="nav-list hide"><a href="#">Shop</a></li>
          <li class="nav-list hide"><a href="#">Account</a></li>
          <li class="nav-list Menu"><button class="menu-btn">Menu</button></li>
        </ul>
      </div>
    </nav>

    <!-- 侧边菜单 -->
    <div class="menubar" ref="menubar">
      <div class="container-cross">
        <i class="fa-solid fa-xmark menu-cross"></i>
      </div>
      <ul>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Test-Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">PowerWall</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </div>

    <!-- 主体内容（复刻原版结构） -->
    <div id="fullpage">
      <!-- Model 3 -->
      <div style="background-image: url('/images/tesla-images/Model3.jpg')" class="model3-container">
        <a name="model3" />
        <div class="header-container">
          <h1 class="header" data-aos="fade-up" data-aos-duration="1000">Model 3</h1>
          <p data-aos="fade-up" data-aos-delay="200">Order Online for <a href="">Touchless Delivery</a></p>
          <div class="buttons" data-aos="fade-up" data-aos-delay="200">
            <a href="#" class="btn1">CUSTOM ORDER</a>
            <a href="#" class="btn2">EXISTING INVENTORY</a>
          </div>
          <div class="bottomArrow">
            <a href="#models"><i class="fa-solid fa-chevron-down down-arrow"></i></a>
          </div>
        </div>
      </div>

    <div style="background-image: url('images/tesla-images/ModelS.jpg');" class="model3-container">
        <a name="models"></a>
       <div class="header-container">
            <h1 class="header" data-aos="fade-up"  data-aos-duration="1000">Model S</h1>
            <p data-aos="fade-up"  data-aos-delay="200" data-aos-duration="1000">Order Online for <a href="">Touchless Delivery</a> </p>
          <div class="buttons"  data-aos="fade-up"  data-aos-delay="200"  data-aos-duration="1000">
                <a href="#" class="btn1">CUSTOM ORDER</a>
                <a href="#"  class="btn2">EXISTING INVENTORY</a>
            </div>
            <div class="bottomArrow">
                <a href="#modelx"><i class="fa-solid fa-chevron-down down-arrow"></i></a> 
            </div>
        </div>
        
    </div> 
    <div style="background-image: url('images/tesla-images/ModelX.jpg');" class="model3-container">
        
         <a name="modelx"></a>
       <div class="header-container">
            <h1 class="header" data-aos="fade-up"  data-aos-duration="1000">Model X</h1>
            <p data-aos="fade-up"  data-aos-delay="200" data-aos-duration="1000">Order Online for <a href="">Touchless Delivery</a> </p>
          <div class="buttons"  data-aos="fade-up"  data-aos-delay="200"  data-aos-duration="1000">
                <a href="#" class="btn1">CUSTOM ORDER</a>
                <a href="#"  class="btn2">EXISTING INVENTORY</a>
          </div>
          <div class="bottomArrow">
                <a href="#modely" style="color: white;" ><i class="fa-solid fa-chevron-down down-arrow"></i></a> 
            </div>
        </div>
    </div>
     <div style="background-image: url('images/tesla-images/ModelY.jpg');" class="model3-container">
        <a name="modely"></a>
        <div class="header-container">
            <h1 class="header" data-aos="fade-up"  data-aos-duration="1000">Model Y</h1>
            <p data-aos="fade-up"  data-aos-delay="200"  data-aos-duration="1000">Order Online for <a href="">Touchless Delivery</a> </p>
         <div class="buttons"  data-aos="fade-up"  data-aos-delay="200"  data-aos-duration="1000">
                <a href="#" class="btn1">CUSTOM ORDER</a>
                <a href="#"  class="btn2">EXISTING INVENTORY</a>
            </div>
            <div class="bottomArrow">
                <a href="#panels"><i class="fa-solid fa-chevron-down down-arrow"></i></a> 
            </div>
        </div>
    </div> 
    <div style="background-image: url('images/tesla-images/SolarPanels.jpg');" class="model3-container">
        <a name="panels"></a>
        <div class="header-container">
            <h1 class="header" data-aos="fade-up" data-aos-duration="1000">Solar Panels</h1>
            <p data-aos="fade-up"  data-aos-delay="200" data-aos-duration="1000">Order Online for <a href="">Touchless Delivery</a> </p>
          <div class="buttons"  data-aos="fade-up"  data-aos-delay="200"  data-aos-duration="1000">
                <a href="#" class="btn1">CUSTOM ORDER</a>
                <a href="#"  class="btn2">EXISTING INVENTORY</a>
            </div>
            <div class="bottomArrow">
                <a href="#roof" style="color: white;"><i class="fa-solid fa-chevron-down down-arrow"></i></a> 
            </div>
        </div>
    </div>
    <div style="background-image: url('images/tesla-images/solarRoof.jpg');" class="model3-container">
        <a name="roof"></a>
     <div class="header-container">
            <h1 class="header" data-aos="fade-up"  data-aos-duration="1000">Solar Roof</h1>
            <p data-aos="fade-up"  data-aos-delay="200" data-aos-duration="1000">Order Online for <a href="">Touchless Delivery</a> </p>
           <div class="buttons"  data-aos="fade-up"  data-aos-delay="200"  data-aos-duration="1000">
                <a href="#" class="btn1">CUSTOM ORDER</a>
                <a href="#"  class="btn2">EXISTING INVENTORY</a>
            </div>
             <div class="bottomArrow">
                <a href="#Accessories" style="color: rgb(5, 0, 0);"><i class="fa-solid fa-chevron-down down-arrow"></i></a> 
            </div>
        </div>
    </div>
    <div style="background-image: url('images/tesla-images/Accessories.jpg');" class="model3-container">
    <div class="header-container">
        <a name="Accessories"></a>
            <h1 data-aos="fade-up" data-aos-duration="1000"class="header">Accessories</h1>
            <p data-aos="fade-up"  data-aos-delay="200" data-aos-duration="1000">Order Online for <a href="">Touchless Delivery</a> </p>
           <div class="buttons" data-aos="fade-up"  data-aos-delay="200"  data-aos-duration="1000">
                <a href="#"   class="btn1">Shop Now</a>
            </div>
        </div>
    
    </div>
  </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "TeslaPage",

  mounted() {
    document.title = "纯电动车，太阳能和清洁能源|特斯拉中国";
    AOS.init();

    // 引用 menu 按钮
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".menu-cross");
    const menubar = this.$refs.menubar;

    menuBtn.addEventListener("click", () => {
      menubar.classList.toggle("active");
      document.body.style.backgroundColor = "#cfcfcf";
    });

    closeBtn.addEventListener("click", () => {
      menubar.classList.toggle("active");
      document.body.style.backgroundColor = "#fff";
    });
  },
  
};

</script>

<style src="./index.css"></style>

<!-- 字体图标（从 CDN 加载） -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
/>
