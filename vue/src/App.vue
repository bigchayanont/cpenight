<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>

body,
html {
  padding: 0;
  margin: 0;
  font-size: 8px;
  overflow-x: hidden;
}

.router-link-active{
  text-decoration:none;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}


@font-face {
  font-family: "CloudLight";
  src: local("CloudLight"),
    url("./font/Cloud-LightBold/Cloud-Light.otf") format("truetype");
}
@font-face {
  font-family: "CloudBold";
  src: local("CloudBold"),
    url("./font/Cloud-LightBold/Cloud-Bold.otf") format("truetype");
}

.page-container {
  width: 1440px;
  max-width: 1440px;
}

#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.navbar-container {
  width: 1440px;
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

@media screen and (max-width: 1920px) {
  .page-container,
  .navbar-container {
    width: 1280px;
    max-width: 1280px;
  }
}

@media screen and (max-width: 1440px) {
  .page-container,
  .navbar-container {
    width: 1024px;
    max-width: 1024px;
  }
}

@media screen and (max-width: 1024px) {
  .page-container,
  .navbar-container {
    width: 960px;
    max-width: 960px;
  }
}
@media screen and (max-width: 768px) {
  .page-container,
  .navbar-container {
    width: 720px;
    max-width: 720px;
  }
}

@media screen and (max-width: 414px) {
  .page-container,
  .navbar-container {
    width: 374px;
    max-width: 374px;
  }
}
@media screen and (max-width: 375px) {
  .page-container,
  .navbar-container {
    width: 355px;
    max-width: 355px;
  }
}
@media screen and (max-width: 360px) {
  .page-container,
  .navbar-container {
    width: 335px;
    max-width: 335px;
  }
}
</style>