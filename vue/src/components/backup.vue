<template>
  <div style="width: 100px; background-color:#302e71;">
    <div class="select-dropdown">
      <select>
        <option selected disabled value="Option 1">First Option</option>
        <option value="Option 2">2nd Option</option>
        <option value="Option 3">Option Number 3</option>
      </select>
    </div>
    <h1>Test1</h1>
    <img :src="check" alt />
    <h1>Test2</h1>
    <img src="@/assets/user/profile.jpg" />
    <h1>Test3</h1>
    <img src="@/assets/user/profile.jpg" />
    <h1>Test4</h1>
    <img :src="check1" />
    <h1>Test5</h1>
    <img src="/images/profile.jpg" />
  </div>
</template>

<script>
// const mkdirp = require('mkdirp')

export default {
  data() {
    return {
      check: "@/assets/user/profile.jpg",
      check1: "/img/profile.jpg"
    };
  }
};
</script>

<style scoped>
.select-dropdown,
.select-dropdown * {
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;
}
.select-dropdown {
  position: relative;
  background-color: transparent;
  border-radius: 4px;
}
.select-dropdown select {
  color: white;
  font-size: 2em;
  font-family: "CloudLight";
  max-width: 100%;
  padding: 8px 24px 8px 10px;
  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.select-dropdown select:active,
.select-dropdown select:focus {
  outline: none;
  box-shadow: none;
}
.select-dropdown:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 8px;
  width: 0;
  height: 0;
  margin-top: -2px;
  border-top: 5px solid #ffffff;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}
</style>