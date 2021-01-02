<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"app",
}
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
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
</style>