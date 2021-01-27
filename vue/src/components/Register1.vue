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
    ></vue-particles>
    <div class="row page-container" id="login-container">
      <div id="right-side">
        <img id="cpe-logo" src="@/assets/Logo.png" />
      </div>
      <div>
        <div class="section">
          <div>
            <div style="display: flex; align-items: center">
              <a
                @click="backMain()"
                style="text-decoration: none; cursor: pointer;"
                id="backToMain"
              >&lt; {{$t('general.backtomain')}}</a>
              <img
                @click="backMain()"
                style="padding-left: 10px; width: 23px; margin-top: -3.5px; cursor: pointer;"
                src="@/assets/user/home.png"
              />
            </div>
            <div id="left-side" class="column" style>
              <div>
                <h1 style="cursor: default;" class="title">{{$t('general.registerTitle')}}</h1>
                <br />
                <div>
                  <GoogleLogin
                    style="width:auto; padding:0px; border:none; height:45px;"
                    :params="googleAuth.params"
                    :onSuccess="googleOnSuccess"
                    :onFailure="googleOnFailure"
                  >
                    <img class="img-login grow-on-hover" src="@/assets/Google.png" />
                  </GoogleLogin>
                  <br />

                  <div id="facebook-login">
                    <facebook-login
                      class="button"
                      style="display:none;"
                      appId="facebookAuth.appId"
                      @login="onLogin"
                      @logout="onLogout"
                      @get-initial-status="getUserData"
                      @sdk-loaded="sdkLoaded"
                    ></facebook-login>
                  </div>

                  <img
                    class="img-login grow-on-hover"
                    style="margin-top: 15px; cursor: pointer;"
                    src="@/assets/Facebook.png"
                  />
                  <br />
                </div>
                <br />

                <p id="or-text">
                  <span style="cursor: default;">{{$t('general.orText')}}</span>
                </p>
                
                <button
                class="grow-on-hover"
                  @click="onClick()"
                  id="loginButton"
                  style="cursor: pointer;"
                  
                >Sign up with Email</button>

                <div id="register-section">
                  <span
                    class="descript-text"
                    style="color: #ffffff; cursor: default;"
                  >{{$t('loginRegister.haveAccount')}}</span>
                  <router-link to="/login"
                    class="descript-text"
                    style="margin-left: 10px; color: #f28093"
                    >{{$t('loginRegister.login')}}</router-link
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
import AuthService from "../services/auth.service";
import GoogleLogin from "vue-google-login";
import facebookLogin from "facebook-login-vuejs";

export default {
  name: "register1",
  data() {
    return {
      googleAuth: {
        params: {
          client_id:
            "691961416858-9n4gn62s613l3v6ubp3g562e5b6brp1b.apps.googleusercontent.com"
        }
      },
      facebookAuth: {
        appId: "854867715338418",
        isConnected: false,
        name: "",
        email: "",
        personalID: "",
        picture: "",
        FB: undefined
      }
    };
  },
  methods: {
    onClick() {
      this.$store.state.userInfo.accountType = "EMAIL";
      this.$store.state.userInfo.profilePic = "default";
      this.$emit("pageReturn", 2);
    },
    backMain() {
      window.location.href = "/";
    },
    getUserData() {
      this.FB.api("/me", "GET", { fields: "id,name,email,picture" }, user => {
        this.personalID = user.id;
        this.email = user.email;
        this.name = user.name;
        console.log(this.email);
        console.log(this.name);
      });
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected;
      this.FB = payload.FB;
      if (this.isConnected) this.getUserData();
    },
    onLogin() {
      this.isConnected = true;
      this.getUserData();
    },
    onLogout() {
      this.isConnected = false;
    },
    googleOnSuccess(googleUser) {
      var userProfile = googleUser.getBasicProfile();
      AuthService.checkEmailExists(userProfile.getEmail()).then(response => {
        if (response === "err") {
          alert("email duplicated");
        } else {
          this.$store.state.userInfo.email = userProfile.getEmail();
          this.$store.state.userInfo.accountType = "GOOGLE";
          this.$store.state.userInfo.authId = userProfile.getId();
          this.$store.state.userInfo.profilePic = userProfile.getImageUrl();
          this.$store.state.userInfo.firstName = userProfile.getGivenName();
          console.log("Register1:");
          console.log("email : " + this.$store.state.userInfo.email);
          console.log("password : " + this.$store.state.userInfo.password);
          console.log(
            "accountType : " + this.$store.state.userInfo.accountType
          );
          console.log("authId : " + this.$store.state.userInfo.authId);
          console.log("profilePic : " + this.$store.state.userInfo.profilePic);
          console.log("firstName : " + this.$store.state.userInfo.firstName);
          console.log("lastName : " + this.$store.state.userInfo.lastName);
          console.log("nickName : " + this.$store.state.userInfo.nickName);
          console.log(
            "birthday_day : " + this.$store.state.userInfo.birthday_day
          );
          console.log(
            "birthday_month : " + this.$store.state.userInfo.birthday_month
          );
          console.log(
            "birthday_year : " + this.$store.state.userInfo.birthday_year
          );
          console.log("classOf : " + this.$store.state.userInfo.classOf);
          console.log(
            "phoneNumber : " + this.$store.state.userInfo.phoneNumber
          );
          console.log("line : " + this.$store.state.userInfo.line);
          console.log(
            "facebookAccount : " + this.$store.state.userInfo.facebookAccount
          );
          console.log("organ : " + this.$store.state.userInfo.organ);
          console.log("role : " + this.$store.state.userInfo.role);
          console.log("field : " + this.$store.state.userInfo.field);
          this.$emit("pageReturn", 3);
        }
      });
    },
    googleOnFailure() {
      alert("Google Sign Up Failed");
    }
  },
  components: {
    GoogleLogin,
    facebookLogin
  }
};
</script>

<style scoped>
* {
  z-index: 1;
}
button[data-v-0af1f3c3] {
  width: 100%;
  height: 45px;
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
  padding-bottom: 20px;
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
  .title {
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
