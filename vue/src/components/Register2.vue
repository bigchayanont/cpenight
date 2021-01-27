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
            <div style="display: flex; align-items: center">
              <a @click="back()" style="text-decoration: none; cursor: pointer;" id="backToMain"
                >&lt; {{$t('general.back')}}</a
              >
              <img @click="back()"
                style="padding-left: 10px; width: 23px; margin-top: -3.5px; cursor: pointer;"
                src="@/assets/user/home.png"
              />
            </div>
            <div id="left-side" class="column" style="">
              <div>
                <h1 style="cursor: default;" class="title">{{$t('general.registerTitle')}}</h1>
                <!-- Input -->
                <div class="box">
                  <img id="img-user" src="@/assets/icons8-male-user-64.png" />
                  <input
                  autocomplete="off"
                    v-model="user.email"
                    class="input"
                    type="text"
                    placeholder="Email"
                  />
                </div>

                <hr class="underline" />

                <div class="box">
                  <img id="img-lock" src="@/assets/icons8-lock-52.png" />
                  <input
                  style="margin-left:16px;"
                  autocomplete="off"
                    v-model="user.password"
                    @input="updateValue"
                    class="input"
                    type="password"
                    placeholder="Password"             
                  />
                </div>

                <hr class="underline" />

                <div class="box">
                  <img id="img-user" src="@/assets/Confirm Pass.png" />
                  <input
                    v-model="user.confirmPassword"
                    class="input"
                    style="padding-left:13px;"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>

                <hr class="underline" />

                <div id="validatePassword">
                  <h3
                    style="
                      margin-bottom: 0px;
                      font-family: 'CloudBold';
                      color: #ffffff;
                      opacity: 0.7;
                      cursor: default;
                    "
                  >
                    {{$t('registerSection.passwordRequire')}}
                  </h3>
                  <div style="display: flex; align-items: center; cursor: default;">
                    <img
                      v-show="warningColor1 == false"
                      class="password-icon"
                      src="@/assets/Icon_Cross.png"
                    />
                    <img
                      v-show="warningColor1"
                      class="password-icon"
                      src="@/assets/Icon_Checkmark.png"
                    />
                    <p
                      style="font-family: 'CloudLight'"
                      :class="changeColor1()"
                    >
                      {{$t('registerSection.atleastEight1')}}
                      <span style="font-family: 'CloudBold'">{{$t('registerSection.atleastEight2')}}</span>
                    </p>
                  </div>

                  <div style="display: flex; align-items: center; cursor: default;">
                    <img
                      v-show="warningColor2 == false"
                      class="password-icon"
                      src="@/assets/Icon_Cross.png"
                    />
                    <img
                      v-show="warningColor2"
                      class="password-icon"
                      src="@/assets/Icon_Checkmark.png"
                    />
                    <p
                      style="font-family: 'CloudLight'"
                      :class="changeColor2()"
                    >
                      {{$t('registerSection.alleastupper1')}}
                      <span style="font-family: 'CloudBold'"
                        >{{$t('registerSection.alleastupper2')}}</span
                      >
                    </p>
                  </div>

                  <div style="display: flex; align-items: center; cursor: default;">
                    <img
                      v-show="warningColor3 == false"
                      class="password-icon"
                      src="@/assets/Icon_Cross.png"
                    />
                    <img
                      v-show="warningColor3"
                      class="password-icon"
                      src="@/assets/Icon_Checkmark.png"
                    />
                    <p
                      style="font-family: 'CloudLight'"
                      :class="changeColor3()"
                    >
                      {{$t('registerSection.atleastnum1')}}
                      <span style="font-family: 'CloudBold'">{{$t('registerSection.atleastnum2')}}</span>
                    </p>
                  </div>

                  <div style="display: flex; align-items: center; cursor: default;">
                    <img
                      v-show="warningColor4 == false"
                      class="password-icon"
                      src="@/assets/Icon_Cross.png"
                    />
                    <img
                      v-show="warningColor4"
                      class="password-icon"
                      src="@/assets/Icon_Checkmark.png"
                    />
                    <p
                      style="font-family: 'CloudLight'"
                      :class="changeColor4()"
                    >
                      {{$t('registerSection.atleastspecial1')}}
                      <span style="font-family: 'CloudBold';"
                        >{{$t('registerSection.atleastspecial2')}}</span
                      >
                    </p>
                  </div>
                </div>
                <br />
                <button
                  @click="checkRegister()"
                  id="nextButton"
                  class="grow-on-hover"
                  style="background-color: #f28093; cursor: pointer;"
                >
                  {{$t('registerSection.continueText')}}
                </button>
                <div id="register-section">
                  <span class="descript-text" style="color: #ffffff; cursor: default;"
                    >{{$t('loginRegister.haveAccount')}}</span
                  >
                  <a
                    class="descript-text"
                    style="margin-left: 10px; color: #f28093"
                    href="/login"
                    >{{$t('general.loginThai')}}</a
                  >
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

// import change from "@/profileData/profile.js";
import User from '../models/user';
import AuthService from '../services/auth.service';
export default {
    name:"register2",
    computed:{
      showMissmatch: function(){
        if((this.user.password !== this.user.confirmPassword) && (this.user.password != "") && (this.user.confirmPassword != ""))
          {
          return true;
          }
        else
          {
          return false;
          // alert('Register Success')
          }
      },
    },
    mounted() {
        this.user.email = this.$store.state.userInfo.email
    },
    methods: {
       back(){
         this.$emit("pageReturn",1);
       },
       checkRegister() {
        if (!this.user.email) {
            alert('Email required');
            console.log('Email required');
        } 
        else if (!this.validEmail(this.user.email.trim())) {
            alert('Email is not yet valid');
            console.log('Email is not yet valid');
        }
        else if(!this.validPassword(this.user.password))
        {
            alert('Weak password');
            console.log('Weak password');
        }
        else if(this.showMissmatch)
        {
            alert('miss match');
            console.log('miss match');
        }
        else
        {
          AuthService.checkEmailExists(this.user.email.trim())
          .then(
          response => {
          if((response === "err")) {
            alert('email duplicated')    
            }
            else
            { 
              this.$store.state.userInfo.email = this.user.email;
              this.$store.state.userInfo.password = this.user.password;
        
              console.log("Register2:");
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

              this.$emit("pageReturn",3);
            }
          })
        }
      },
       validEmail: function (email) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
       },
       validPassword: function(password) {
          this.password_length = password.length;
          const format = /[^A-Za-z0-9]/;
          if (this.password_length > 8) {
            this.contains_eight_characters = true;
          } else {
            this.contains_eight_characters = false;
          }
          this.contains_number = /\d/.test(password);
          this.contains_uppercase = /[A-Z]/.test(password);
          this.contains_special_character = format.test(password);
          
          if (this.contains_eight_characters === true &&
              this.contains_special_character === true &&
              this.contains_uppercase === true &&
              this.contains_number === true) {
                return this.valid_password = true;	
          } else {
        if (this.contains_eight_characters === false) {
          alert("Password must have more than 8 characters");
        } else if (this.contains_uppercase === false) {
          alert("Password must have at least 1 uppercase");
        } else if (this.contains_number === false) {
          alert("Password must have at least 1 number");
        } else if (this.contains_special_character === false) {
          alert("Password must have at least 1 special characters");
        }
        return (this.valid_password = false);
      }
       },
       changeColor1() {
      let red = "colorRed";
      let green = "colorGreen";
      if (this.warningColor1 === true) {
        return green;
      }
      return red;
    },
    changeColor2() {
      let red = "colorRed";
      let green = "colorGreen";
      if (this.warningColor2 === true) {
        return green;
      }
      return red;
    },
    changeColor3() {
      let red = "colorRed";
      let green = "colorGreen";
      if (this.warningColor3 === true) {
        return green;
      }
      return red;
    },
    changeColor4() {
      let red = "colorRed";
      let green = "colorGreen";
      if (this.warningColor4 === true) {
        return green;
      }
      return red;
    },
    updateValue(event) {
      const value = event.target.value;
      const upper = /[A-Z]/.test(value);
      const number = /\d/.test(value);
      const format = /[^A-Za-z0-9]/;
      const special = format.test(value);
      if (String(value).length >= 8) {
        this.warningColor1 = true;
      } else {
        this.warningColor1 = false;
      }
      if (upper === true) {
        this.warningColor2 = true;
      } else {
        this.warningColor2 = false;
      }
      if (number === true) {
        this.warningColor3 = true;
      } else {
        this.warningColor3 = false;
      }
      if (special === true) {
        this.warningColor4 = true;
      } else {
        this.warningColor4 = false;
      }
    },
    },

    data() {
        return {
          user: new User(),
          submitted: false,
          successful: false,
          message: '',
          password_length: 0,
          contains_eight_characters: false,
          contains_number: false,
          contains_uppercase: false,
          contains_special_character: false,
          valid_password: false,
          warningColor1: false,
          warningColor2: false,
          warningColor3: false,
          warningColor4: false,
        }
  },
}
</script>

<style scoped>
* {
  z-index: 1;
}
.password-icon {
  width: 15px;
  padding-top: 3px;
  padding-right: 5px;
}
#validatePassword {
  font-size: 1.25em;
}
#register-section {
  text-align: center;
  margin-top: 15px;
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
  font-size: 1.5em;
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
  display: flex;
  align-items: center;
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

input[type="password"] {
  color: white;
  font-size: 2em;
  font-family: "CloudLight";
}

#nextButton {
  margin-top: 15px;
  margin-bottom: 10px;
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

input[type="password"]:focus {
  border: none;
  background-color: none;
  outline: 0;
}

::placeholder {
  color: #bbbde4;
  font-size: 0.8em;
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
  text-align: center;
  padding-top: 50px;
  padding-bottom: 0px;
  font-size: 8em;
  font-family: "CloudBold";
  letter-spacing: 7.6px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 0px;
  margin-top: 0px;
  z-index: 2;
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

.colorGreen {
  color: #3caf6c;
}
.colorRed {
  color: #bd6887;
}

.colorGreen,
.colorRed {
  margin-top: 5px;
  margin-bottom: 0px;
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
  #validatePassword {
    padding-top: 10px;
  }
  .title {
    padding-top: 30px;
    font-size: 6em;
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
    font-size: 1.5em;
  }
  #register-section {
    margin-top: 25px;
  }
  .title {
    font-size: 6em;
  }
  .two-background {
    display: flex;
    justify-content: center;
    align-items: normal;
    padding-top: 25px;
    background: #282567;
    height: 100vh;
  }
}
@media screen and (max-width: 375px) {
  .img-login {
    width: 300px;
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
