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
              <a @click="backPage()" style="text-decoration: none; cursor: pointer;" id="backToMain"
                >&lt; Login</a
              >
              <img
                style="padding-left: 10px; width: 23px; margin-top: -3.5px;"
                src="@/assets/user/home.png"
              />
            </div>
            <div id="left-side" class="column" style="">
              <div>
                <div class="section">
                  <img id="forgot-pic" src="@/assets/user/forgotPass-26.png" />
                </div>
                <h1 class="title">Oh! Forgot your password?</h1>
                <h2 id="worries-text">
                  No worries! Enter your email and we will send you a reset.
                </h2>
                <!-- Input -->
                <div class="box">
                  <img
                    id="img-user"
                    src="@/assets/icons8-secured-letter-64.png"
                  />
                  <input
                    v-model="user_input.email"
                    class="input"
                    type="text"
                    placeholder="Email"
                    required
                  />
                </div>

                <hr class="underline" />

                <br />
                <button @click="checkInput()" id="loginButton">
                  SEND REQUEST
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login_page",
  data() {
    return {
      swap: false,
      user_database: {
        email: "harryphat2000@gmail.com",
        password: "Harryfer2020",
      },
      user_input: {
        email: "",
        password: "",
        hidePassword: true,
      },
    };
  },
  methods: {
    backPage(){
        this.$emit("pageReturn",1)
      },
    checkInput() {
      if (
        this.user_input.email === this.user_database.email &&
        this.user_input.password === this.user_database.password &&
        !this.showMissmatch
      ) {
        alert("Login Success");
      } else {
        alert("ยังไม่ได้น้าใจเย็นๆ");
      }
    },
  },
};
</script>

<style scoped>
* {
  z-index: 1;
}

#worries-text {
  margin-top: 10px;
  letter-spacing: 1.5px;
  font-size: 1.5em;
  color: #ffffff;
  opacity: 0.7;
  text-align: center;
  font-family: "CloudLight";
  cursor: default;
}

#forgot-pic {
  margin-top: 60px;
  width: 230px;
}

#login-container {
  display: grid;
  grid-template-columns: 50% 50%;
}
#img-user {
  height: 30px;
  margin-top: -5px;
}

#cpe-logo {
  height: 407px;
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
  margin-top: 70px;
  margin-bottom: 0px;
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
  margin-top: 10px;
  cursor: pointer;
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

.title {
  cursor: default;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 0px;
  font-size: 3em;
  font-family: "CloudBold";
  letter-spacing: 2px;
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
  #forgot-pic {
    margin-top: 25px;
    width: 180px;
  }
  .box {
    margin-top: 40px;
  }
  #loginButton {
    margin-top: 10px;
  }
  .title {
    font-size: 2.75em;
  }
  #worries-text {
    font-size: 1.1em;
  }
  .underline {
    margin-bottom: 16px;
  }

  #backToMain {
    font-size: 1.5em;
  }

  .two-background {
    display: flex;
    justify-content: center;
    align-items: normal;
    padding-top: 25px;
    padding-top: 25px;
    background: #282567;
    height: 100vh;
  }
}
@media screen and (max-width: 375px) {
  #img-user {
    height: 25px;
    margin-top: -1px;
  }
}
@media screen and (max-width: 360px) {
}
</style>
