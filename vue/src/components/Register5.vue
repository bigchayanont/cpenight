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
                      Please tell us <br />
                      more about yourself.
                    </h1>
                  </div>
                  <div>
                    <img id="circle" src="@/assets/Group 299.png" />
                  </div>
                </div>

                <div>
                  <!-- First Section-->
                  <h2 style="cursor: default;" class="question">
                    Where do you work?
                  </h2>
                  <div>
                    <div class="input-section">
                      <!-- Input Section -->
                      <div class="input-space">
                        <h1 style="cursor: default" class="inputText">
                          ORGANIZATION (OPTIONAL)
                        </h1>
                        <div style="margin-top: 20px; padding-right: 10px">
                          <input
                            v-model="user.organ"
                            style="margin: 0px; width: 100%"
                            class="input"
                            type="text"
                            placeholder="Enter your organization name"
                          />
                        </div>
                        <hr class="underline" />
                      </div>
                      <!-- Input Section -->
                      <!-- Input Section -->
                      <div>
                        <h1 style="cursor: default;" class="inputText">
                          ROLE (OPTIONAL)
                        </h1>
                        <div style="margin-top: 20px; padding-right: 10px">
                          <input
                            v-model="user.role"
                            style="margin: 0px; width: 100%"
                            class="input"
                            type="text"
                            placeholder="Enter your role (e.g. Manager)"
                          />
                        </div>
                        <hr class="underline" />
                      </div>
                      <!-- Input Section -->
                    </div>

                    <h2 style="cursor: default;" class="question">
                      What do you do?
                    </h2>
                    <div class="input-single">
                      <!-- Input Section -->
                      <div class="input-space">
                        <h1 style="cursor: default;" class="inputText">
                          FIELD OF WORK (OPTIONAL)
                        </h1>
                        <div style="margin-top: 20px; padding-right: 10px">
                          <input
                            v-model="user.field"
                            style="margin: 0px; width: 100%"
                            class="input"
                            type="text"
                            placeholder="Enter your field (e.g. UX/UI Designer)"
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
                    <button
                      style="cursor: pointer;"
                      id="backButton"
                      @click="backPage()"
                    >
                      <i
                        style="align: center; padding-right: 20px"
                        class="fa fa-arrow-left"
                      ></i
                      >BACK
                    </button>
                  </div>
                  <div>
                    <button
                      style="cursor: pointer;"
                      id="nextButton"
                      @click="nextPage()"
                    >
                      FINISH
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
import User from "../models/user";
export default {
  name: "Register5",
  components: {},
  data() {
    return {
      user: new User(),
      loading: false,
      message: "",
    };
  },
  methods: {
    nextPage() {
      this.$store.state.userInfo.organ = this.user.organ;
      this.$store.state.userInfo.role = this.user.role;
      this.$store.state.userInfo.field = this.user.field;
      this.message = "";
      this.submitted = true;
      // this.$validator.validate().then(isValid => {
      //   if (isValid) {
      //     this.$store.dispatch('auth/register', this.user).then(
      //       data => {
      //         this.message = data.message;
      //         this.successful = true;
      //       },
      //       error => {
      //         this.message =
      //           (error.response && error.response.data) ||
      //           error.message ||
      //           error.toString();
      //         this.successful = false;
      //       }
      //     );
      //   }
      // });
      this.$store.dispatch("auth/register", this.$store.state.userInfo).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          alert("register success");
          this.$router.push("/login");
        },
        (error) => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    },
    backPage() {
      this.$emit("pageReturn", 4);
    },
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    this.user.organ = this.$store.state.userInfo.organ;
    this.user.field = this.$store.state.userInfo.field;
    this.user.role = this.$store.state.userInfo.role;
    if (this.loggedIn) {
      alert("already logged in");
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
* {
  z-index: 1;
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
#cpe-select {
  width: 17%;
}

#nextButton {
  color: #ffffff;
  background: #f28093;
  border: 2px solid #f28093;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 42px;
  padding-right: 42px;
  font-size: 1.75em;
  font-family: "CloudBold";
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
  #cpe-select {
    width: 20%;
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
