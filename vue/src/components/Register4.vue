<template>
  <div class="two-background">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.3"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="3"
      :lineLinked="false"
      :moveSpeed="1.5"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="row page-container" id="login-container">
      <div id="right-side">
        <img id="cpe-logo" src="@/assets/Logo.png" />
      </div>
      <div>
        <div class="section">
          <div>
            <div id="left-side" class="column">
              <div>
                <div id="header-section">
                  <div>
                    <h1 class="title" style="margin: 0px; cursor: default;">
                      {{$t('registerSection.tellusyourself1')}} <br />
                      {{$t('registerSection.tellusyourself2')}}
                    </h1>
                  </div>
                  <div>
                    <img id="circle" src="@/assets/Circle-03.png" />
                  </div>
                </div>

                <div>
                  <!-- Second Section-->
                  <h2 style="cursor: default;" class="question">{{$t('registerInformation.whichcpe')}}</h2>
                  <div style="padding-top: 5px">
                    <h1 style="padding-bottom: 5px; cursor: default;" class="inputText">
                      {{$t('myAccount.cpe')}}*
                    </h1>
                    <div
                      style="
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                      "
                    >
                      <div id="cpe-select">
                        <div class="select-dropdown">
                          <select v-model="user.classOf">
                            <option selected disabled>CPE</option>
                            <option
                              v-for="(classOf,index) in classLists"
                              v-bind:key="index"
                            >
                              {{ classOf }}
                            </option>
                          </select>
                        </div>
                        <hr class="underline" />
                      </div>
                    </div>
                  </div>
                  <!-- First Section-->
                  <h2  style="cursor: default;" class="question">{{$t('registerInformation.howcontact')}}</h2>
                  <div>
                    <div class="input-section">
                      <!-- Input Section -->
                      <div class="input-space">
                        <h1 style="cursor: default;" class="inputText">{{$t('myAccount.phone')}}*</h1>
                        <div style="margin-top: 20px; padding-right: 10px">
                          <input
                            style="margin: 0px; width: 100%"
                            class="input"
                            type="number"
                            placeholder="Enter your phone number"
                            @input="updateValue"
                            :value="user.phoneNumber"
                            onkeydown="return event.keyCode !== 69 && event.keyCode !== 189"
                          />
                        </div>
                        <hr class="underline" />
                      </div>
                      <!-- Input Section -->
                      <!-- Input Section -->
                      <div>
                        <h1 style="cursor: default;" class="inputText">{{$t('myAccount.line')}} ({{$t('registerInformation.optional')}})</h1>
                        <div style="margin-top: 20px; padding-right: 10px">
                          <input
                            v-model="user.line"
                            style="margin: 0px; width: 100%"
                            class="input"
                            type="text"
                            placeholder="Enter your LINE ID"
                          />
                        </div>
                        <hr class="underline" />
                      </div>
                      <!-- Input Section -->
                    </div>

                    <div class="input-single">
                      <!-- Input Section -->
                      <div class="input-space">
                        <h1 style="cursor: default;" class="inputText">{{$t('myAccount.facebook')}} ({{$t('registerInformation.optional')}})</h1>
                        <div style="margin-top: 20px; padding-right: 10px">
                          <input
                            v-model="user.facebookAccount"
                            style="margin: 0px; width: 100%"
                            class="input"
                            type="text"
                            placeholder="Enter your Facebook name"
                          />
                        </div>
                        <hr class="underline" />
                      </div>
                      <!-- Input Section -->
                    </div>
                  </div>
                </div>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <div
                  class="row"
                  style="
                    margin-top: 30px;
                    display: flex;
                    justify-content: space-between;
                  "
                >
                  <div>
                    <button class = "text grow-on-hover" style="cursor: pointer;" id="backButton" @click="backPage()">
                      <i
                        style="align: center; padding-right: 20px"
                        class="fa fa-arrow-left"
                      ></i
                      >{{$t('registerSection.back')}}
                    </button>
                  </div>
                  <div>
                    <button class = "text grow-on-hover" style="cursor: pointer;" id="nextButton" @click="nextPage()">
                      {{$t('registerSection.next')}}<i
                        style="align: center; padding-left: 20px"
                        class="fa fa-arrow-right"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vSelect from 'vue-select'
  import User from '../models/user';
  Vue.component('v-select', vSelect)
  import 'vue-select/dist/vue-select.css'

  export default {
    name: "Register4",
    components:{
    },
    data() {
      return {
        user: new User(),  
        classLists: ["อาจารย์", "บุคลากร"],    
      }

    },
    created() {
    for (var i = 1; i <= 34; i++) this.classLists.push("CPE " + i);
    },
    mounted() {
      console.log(this.user.classOf)
      if (!this.$store.state.userInfo.classOf) {
        this.user.classOf = "CPE"
      } else {
        this.user.classOf = this.$store.state.userInfo.classOf
      }
        this.user.phoneNumber = this.$store.state.userInfo.phoneNumber
        this.user.line = this.$store.state.userInfo.line
        this.user.facebookAccount = this.$store.state.userInfo.facebookAccount
    },
    methods: {
      nextPage(){
        if (this.user.classOf == "CPE") {
            alert('Class of required');
            console.log('Class of required');
        }
        else if (!this.user.phoneNumber) {
            alert('phone number required');
            console.log('phone number required');
        } 
        else{
        this.$store.state.userInfo.classOf = this.user.classOf;
        this.$store.state.userInfo.phoneNumber = this.user.phoneNumber;
        this.$store.state.userInfo.line = this.user.line;
        this.$store.state.userInfo.facebookAccount = this.user.facebookAccount;
        console.log("Register4:");
        console.log("email : " + this.$store.state.userInfo.email);
        console.log("password : " + this.$store.state.userInfo.password);
        console.log("accountType : " + this.$store.state.userInfo.accountType);
        console.log("authId : " + this.$store.state.userInfo.authId);
        console.log("profilePic : " + this.$store.state.userInfo.profilePic);
        console.log("firstName : " + this.$store.state.userInfo.firstName);
        console.log("lastName : " + this.$store.state.userInfo.lastName);
        console.log("nickName : " + this.$store.state.userInfo.nickName);
        console.log("birthday_day : " + this.$store.state.userInfo.birthday_day);
        console.log("birthday_month : " + this.$store.state.userInfo.birthday_month);
        console.log("birthday_year : " + this.$store.state.userInfo.birthday_year);
        console.log("classOf : " + this.$store.state.userInfo.classOf);
        console.log("phoneNumber : " + this.$store.state.userInfo.phoneNumber);
        console.log("line : " + this.$store.state.userInfo.line);
        console.log("facebookAccount : " + this.$store.state.userInfo.facebookAccount);
        console.log("organ : " + this.$store.state.userInfo.organ);
        console.log("role : " + this.$store.state.userInfo.role);
        console.log("field : " + this.$store.state.userInfo.field);
        this.$emit("pageReturn",5)
        }
      },
      updateValue(event) {
      const value = event.target.value;
      if (String(value).length <= 10) {
        this.user.phoneNumber = value;
      }
      this.$forceUpdate();
    },
      backPage(){
          this.$emit("pageReturn",3)
      }
    }
  }
</script>

<style scoped>
* {
  z-index: 1;
}
.select-dropdown,
.select-dropdown * {
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;
}
.select-dropdown {
  position: relative;
  background-color: #302e71;
  border-radius: 0px;
}
.select-dropdown select {
  color: white;
  font-size: 1.75em;
  font-family: "CloudLight";
  max-width: 100%;
  padding: 8px 24px 8px 10px;
  border: none;
  background-color: #302e71;
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
.input-space {
  padding-right: 33px;
}

.input-section {
  display: flex;
  justify-content: space-between;
}

.input-single {
  display: flex;
  justify-content: space-between;
}

#nextButton {
  color: #ffffff;
  background: #f28093;
  border: 2px solid #f28093;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 32px;
  padding-right: 32px;
  font-size: 1.75em;
  font-family: "CloudBold";
}

#cpe-select {
  width: 105px;
}

#backButton {
  color: #ffffff;
  border: 2px solid #ffffff;
  background-color: transparent;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 32px;
  padding-right: 32px;
  font-size: 1.75em;
  font-family: "CloudBold";
}

#header-section {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
}
.question {
  margin: 15px 0px;
  text-align: left;
  font-family: "CloudBold";
  letter-spacing: 2px;
  color: #ffffff;
  font-size: 2.25em;
}
.inputText {
  font-family: "CloudLight";
  font-weight: 900;
  letter-spacing: 1.6px;
  color: #ffffff;
  opacity: 0.7;
  font-size: 1.5em;
}
#circle {
  width: 70px;
  padding-left: 20px;
}
#register-section {
  text-align: center;
  margin-top: 35px;
}
#login-container {
  display: grid;
  grid-template-columns: 50% 50%;
}
#img-user {
  height: 30px;
  margin-top: -5px;
}
#img-lock {
  height: 24px;
  margin-top: -5px;
}
#cpe-logo {
  height: 407px;
}

.img-login {
  width: 350px;
}
.underline {
  margin-top: 10px;
  margin-bottom: 25px;
  height: 1px;
  opacity: 0.7;
  border: none;
  color: #ffffff;
  background-color: #ffffff;
  font-family: "CloudLight";
}
.descript-text {
  letter-spacing: 1.6px;
  font-size: 2em;
  font-family: "CloudLight";
}
.two-background {
  background: linear-gradient(90deg, #302e71 50%, #282567 50%);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
#or-text {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "CloudLight";
  font-size: 2em;
  letter-spacing: 1.6px;
  color: #fbdad3;
  opacity: 0.5;
}
#login-page {
  width: 1440px;
  max-width: 1440px;
}
#backToMain {
  font-family: "CloudBold";
  font-size: 2em;
  color: #ffffff;
}

.box {
  margin-top: 15px;
  font-family: "CloudLight";
}

.textDivider {
  width: 100%;
  text-align: center;
  border-bottom: 2px solid #d5d5df;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

input[type="text"] {
  color: white;
  font-size: 2em;
  font-family: "CloudLight";
}

input[type="number"] {
  color: white;
  font-size: 2em;
  font-family: "CloudLight";
  -moz-appearance: textfield;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="password"] {
  color: white;
  font-size: 2em;
  font-family: "CloudLight";
}

#loginButton {
  color: #ffffff;
  background-color: #f28093;
  border: none;
  width: 100%;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 2.5em;
  letter-spacing: 3px;
  font-family: "CloudBold";
}

input[type="text"]:focus {
  border: none;
  background-color: none;
  outline: 0;
}

input[type="number"]:focus {
  border: none;
  background-color: none;
  outline: 0;
}

input[type="password"]:focus {
  border: none;
  background-color: none;
  outline: 0;
}

::placeholder {
  color: #bbbde4;
  font-size: 0.65em;
  font-family: "CloudLight";
  opacity: 0.6;
}

.input {
  margin-left: 10px;
  padding-left: 10px;
  background: transparent;
  border: none;
  width: 100%;
}
body,
html {
  padding: 0;
  margin: 0;
}

#forgot {
  text-align: right;
  font-size: 2em;
  font-family: "CloudLight";
  color: white;
  margin-bottom: 10px;
  margin-top: 0;
  opacity: 0.7;
}

.title {
  text-align: flex-start;
  font-size: 3em;
  font-family: "CloudBold";
  letter-spacing: 3px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 0px;
  margin-top: 0px;
}

#left-side {
  display: flex;
  justify-content: center;
  align-items: center;
}

#right-side {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1024px) {
  .two-background {
    background: #282567;
  }
  #login-container {
    display: block;
  }
  #right-side {
    display: none;
  }
}

@media screen and (max-width: 414px) {
  #circle {
    width: 60px;
    padding-left: 20px;
  }
  .input-space {
    padding-right: 0px;
  }
  .input-section {
    display: block;
    justify-content: space-between;
  }

  .input-single {
    display: block;
    justify-content: space-between;
    padding-bottom: 10px;
  }

  .title {
    font-size: 3em;
  }
  .underline {
    margin-bottom: 16px;
  }
  #forgot {
    font-size: 1.75em;
    margin-bottom: 5px;
  }
  #backToMain,
  .descript-text,
  #or-text {
    font-size: 1.75em;
  }
  #register-section {
    margin-top: 25px;
  }
  .title {
    font-size: 3em;
  }
  .two-background {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
     background: #282567;
    height: 750px;
  }
}
@media screen and (max-width: 375px) {
  .img-login {
    width: 300px;
  }

  #circle {
    width: 55px;
    padding-left: 10px;
  }
  .title {
    font-size: 2.5em;
  }

  #img-user {
    height: 25px;
    margin-top: -1px;
  }
  #img-lock {
    height: 19px;
    margin-top: 0px;
  }
}
@media screen and (max-width: 360px) {
  .img-login {
    width: 290px;
  }
}
</style>