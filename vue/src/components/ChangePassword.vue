<template>
  <div class="section">
    <div class="page-container" id="myaccount">
      <h1 class="title" style="text-transform: uppercase;">{{$t('myAccount.myAccount')}}</h1>

      <!-- Bar -->
      <!-- <div style="margin-top: 30px; width: 100%; display: flex">
        <h2 style="cursor: pointer;" @click="OnclickPro()" id="first-bar" class="bartext">{{$t('myAccount.profile')}}</h2>
        <h2 style="padding-left: 40px; cursor: default;" class="bartext">{{$t('editPassword.changePass')}}</h2>
      </div> -->
      <!-- Bar -->

      <!-- Bar -->
      <!-- <div style="margin-top: 2px; display: flex; align-items: center">
        <hr id="select-profile" class="line" />
        <hr id="select-password" class="line_select" />
        <hr id="select-none" class="line" />
      </div> -->
      <!-- Bar -->

      <!--New-->
      <div style="display:flex; margin-top: 30px;">
        <div @click="OnclickPro()" style=" display:block; justify-content:center; align-items:center;">
          <h2 style="cursor: pointer; padding-left:15px; padding-right:15px;" id="first-bar" class="bartext">{{$t('myAccount.profile')}}</h2>
          <!-- <hr id="select-profile" class="line_select" /> -->
        </div>

        <div style="display:block; z-index:3; justify-content:center; align-items:center;">
          <h2 style="text-align:center; padding-left:15px; padding-right:15px; cursor: pointer;" class="bartext">
          {{$t('editPassword.changePass')}}
        </h2>
          <hr id="select-profile" class="line_select" />
        </div>
      </div>

      <div style="z-index:1;">
        <hr style="width:100%; margin-top:-5px;" id="select-password" class="line" />
      </div>

      <div v-show="accountType === 'EMAIL'" id="password-section">
        <div>
          <div class="password-container">
            <h3 style="cursor: default;" class="inputText">{{$t('editPassword.currentPass')}}</h3>
            <input
              class="input input-line"
              v-model="oldPassword"
              type="password"
              placeholder="Current Password"
            />
          </div>

          <div class="password-container">
            <h3 style="cursor: default;" class="inputText">{{$t('editPassword.newPassword')}}</h3>
            <input
              class="input input-line"
              v-model="newPassword"
              type="password"
              placeholder="New Password"
            />
          </div>

          <div class="password-container">
            <h3 style="cursor: default;" class="inputText">{{$t('editPassword.confirmPassword')}}</h3>
            <input
              class="input input-line"
              v-model="confirmPassword"
              type="password"
              placeholder="Confirm new Password"
            />
          </div>

          <div
            style="
              display: grid;
              grid-template-columns: 50% 50%;
              justify-content: center;
              align-items: center;
            "
          >
            <span></span>
            <div id="confirm-button">
              <button
                @click="checkPassword()"
                class="pink_button grow-on-hover"
                style="cursor: pointer;"
              >{{$t('myAccount.saveprofile')}}</button>
            </div>
          </div>
        </div>
      </div>
      <div v-show="accountType === 'GOOGLE'">
        <div class="section">
          <div>
            <h3 class="pass-text">{{$t('accountType.cantChangePass')}}</h3>
            <div class="section">
              <img style="cursor: default;" class="img-login" src="@/assets/Google-3.png" />
            </div>
          </div>
        </div>
      </div>
      <div v-show="accountType === 'FACEBOOK'">
        <div class="section">
          <div>
            <h3 class="pass-text">{{$t('accountType.cantChangePass')}}</h3>
            <div class="section">
              <img style="cursor: default;" class="img-login" src="@/assets/Facebook-3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import decode from "jwt-decode";
import User from "../models/user";

export default {
  created() {
    let userData = decode(localStorage.getItem("user"));
    this.user_id = userData.id;
    this.accountType = this.$store.state.accountTypeCheck;
  },
  data() {
    return {
      user: new User(),
      user_id: null,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      password_length: 0,
      contains_eight_characters: false,
      contains_number: false,
      contains_uppercase: false,
      contains_special_character: false,
      valid_password: false,
      accountType: ""
    };
  },
  methods: {
    OnclickPro() {
      this.$emit("selectReturn", true);
    },
    checkPassword() {
      if (!this.oldPassword) {
        alert("You must enter old password!");
      } else if (!this.newPassword) {
        alert("You must enter new password!");
      } else if (!this.confirmPassword) {
        alert("You must enter confirm password!");
      } else if (this.newPassword != this.confirmPassword) {
        alert("Password missed match!");
      }
      else if(!this.validPassword(this.newPassword))
      {
        alert('Your new password is weak!');
      }
      else {
        UserService.changePassword(
          this.user_id,
          this.oldPassword,
          this.newPassword
        ).then(response => {
          if (response) {
            console.log(response);
            alert("Change Password Successful");
          } else {
            console.log("Not found!");
          }
        });
      }
      this.oldPassword = "";
      this.newPassword = "";
      this.confirmPassword = "";
    },
    validPassword: function(password) {
      this.password_length = password.length;
      const format = /[^A-Za-z0-9]/;
      if (this.password_length > 8) {
        this.contains_eight_ocharacters = true;
      } else {
        this.contains_eight_characters = false;
      }
      this.contains_number = /\d/.test(password);
      this.contains_uppercase = /[A-Z]/.test(password);
      this.contains_special_character = format.test(password);

      if (
        this.contains_eight_characters === true &&
        this.contains_special_character === true &&
        this.contains_uppercase === true &&
        this.contains_number === true
      ) {
        return (this.valid_password = true);
      } else {
        return (this.valid_password = false);
      }
    }
  }
};
</script>

<style scoped>
.pass-text {
  padding-top: 20px;
  padding-bottom: 10px;
  font-family: "CloudBold";
  text-align: center;
  color: #312f71;
  font-size: 2em;
  letter-spacing: 2px;
}
.img-login {
  border: 2px solid #312f71;
  width:400px;
}
#confirm-button {
  display: initial;
}
input[type="text"] {
  color: #312f71;
  font-size: 2em;
  font-family: "CloudLight";
}

input[type="password"] {
  color: #312f71;
  font-size: 2em;
  font-family: "CloudLight";
}

input[type="text"]:focus {
  background-color: none;
  outline: 0;
}

input[type="password"]:focus {
  background-color: none;
  outline: 0;
}

::placeholder {
  color: #312f71;
  font-size: 0.75em;
  font-family: "CloudBold";
  opacity: 0.6;
}

.password-container {
  padding-top: 35px;
  text-align: right;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
}
#password-section {
  margin-top: 50px;
}
.input-line {
  width: 300px;
  margin-left: 15px;
}
.input-left {
  margin-left: 10px;
}
.input-left-date {
  margin-left: 10px;
}

#select-profile {
  z-index:2;
}

#select-password {
  margin-top:2.5px;
  z-index:1;
}
#select-none {
  width: 72%;
}
.input-container {
  padding-top: 15px;
  padding-left: 25px;
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
  border-radius: 0px;
}
.select-dropdown select {
  color: #312f71;
  font-size: 1.8em;
  letter-spacing: 1px;
  font-family: "CloudBold";
  max-width: 100%;
  padding: 2px;
  border: 1px solid #302e71;
  background-color: #ffffff;
}
.select-dropdown select:active,
.select-dropdown select:focus {
  outline: none;
  box-shadow: none;
}

#input-section {
  margin-left: 30px;
}
#first-bar {
  padding-left: 30px;
}
#profile-section {
  margin-top: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
}

.text {
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

.pink_button {
  letter-spacing: 2px;
  font-size: 1.75em;
  background-color: #f98394;
  color: #ffffff;
  border: 2px solid #f98394;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 32px;
  padding-right: 32px;
  font-family: "CloudBold";
  margin-top: 50px;
  margin-left: 150px;
}

input[type="text"] {
  color: #312f71;
  font-size: 2em;
  letter-spacing: 2px;
  font-family: "CloudBold";
}

input[type="text"]:focus {
  border: none;
  background-color: none;
  outline: 0;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #312f71;
}

input[data-v-7ecbf6ee] {
  margin: 0px;
  padding-left: 10px;
  background: transparent;
  border: none;
  width: 100%;
}

.inputHead {
  color: #312f71;
  letter-spacing: 1.92px;
  font-family: "CloudBold";
  font-size: 2.5em;
  margin: 0;
}

.inputText {
  color: #312f71;
  letter-spacing: 1px;
  font-family: "CloudBold";
  font-size: 1.75em;
  margin: 0;
  margin-right: 15px;
}

.box {
  border: 2px solid #312f71;
}
#myaccount {
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
}

.title {
  color: #312f71;
  letter-spacing: 3px;
  font-family: "CloudBold";
  font-size: 5em;
  margin: 0;
}

.bartext {
  color: #312f71;
  letter-spacing: 2px;
  font-family: "CloudBold";
  font-size: 2em;
  margin: 0;
}

.line {
  border: 1px solid #312f71;
  background-color: #312f71;
  opacity: 0.3;
  margin-bottom: 3px;
  margin-left: 0px;
  margin-right: 0px;
}

.line_select {
  border: 3px solid #f98394;
  background-color: #f98394;
  opacity: 1;
  margin: 0;
}

@media screen and (max-width: 1920px) {
  /* #select-profile {
    width: 9%;
  }
  #select-password {
    width: 18%;
  } */
}

@media screen and (max-width: 1440px) {
  /* #select-profile {
    width: 12%;
  }
  #select-password {
    width: 20%;
  } */
  #profile-section {
    justify-content: space-between;
  }
}

@media screen and (max-width: 1024px) {
  #password-section {
    margin-top: 35px;
  }
  #first-bar {
    padding-left: 25px;
  }
  /* #select-password {
    width: 19%;
  } */
  .password-container {
    grid-template-columns: 40% 50%;
  }
  .pink_button {
    margin-left: 105px;
  }
}

@media screen and (max-width: 768px) {
  /* #select-password {
    width: 34%;
  }
  #select-profile {
    width: 15%;
  } */
  .input-container {
    padding-top: 15px;
    padding-left: 0px;
  }
  #input-section {
    margin-left: 0px;
  }
  #first-bar {
    padding-left: 10px;
  }

  #profile-section {
    margin-top: 35px;
    width: 100%;
    display: block;
    justify-content: center;
    align-items: top;
  }
  .password-container {
    grid-template-columns: 32% 50%;
  }
  .pink_button {
    margin-left: 90px;
  }
}

@media screen and (max-width: 414px) {
  .pass-text {
  font-size: 1.5em;
  letter-spacing: 0.75px;
}
.img-login {
  width:100%;
}
  .inputText {
    margin-right: 0px;
  }
  .password-container {
    grid-template-columns: 50% 50%;
  }
  #password-section {
    margin-top: 25px;
  }
  #confirm-button {
    display: flex;
    justify-content: flex-end;
  }
  .input-line {
    margin-left: 0px;
    width: initial;
  }
  .password-container {
    text-align: initial;
  }
  /* #select-profile {
    width: 10%;
  }
  #select-password {
    width: 75%;
  } */
  #select-none {
    width: 5%;
  }
  .select-dropdown select {
    padding: 1px;
    font-size: 1.5em;
  }
  .title {
    text-align: center;
  }
  .input-left {
    margin-left: 30px;
  }
  .input-left-date {
    margin-left: 20px;
  }
  /* #select-profile {
    width: 30%;
  } */
  .general-container {
    display: block;
  }
  #work-container {
    padding: 15px;
    margin-left: 0px;
  }
  #contact-container {
    padding: 15px;
    margin-right: 0px;
    margin-bottom: 20px;
  }
  .white_button {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .pink_button {
    letter-spacing: 2px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 0px;
    margin-top: 50px;
  }
  #button {
    margin-top: 0px;
  }
}

@media screen and (max-width: 375px) {
  /* #select-password {
    width: 65%;
  }
  #select-profile {
    width: 30%;
  } */
  #select-none {
    width: 5%;
  }
  .input-left-date {
    margin-left: 0px;
  }
  .select-dropdown select {
    font-size: 1.5em;
  }
}

@media screen and (max-width: 360px) {
  /* #select-password {
    width: 65%;
  }
  #select-profile {
    width: 35%;
  } */
  #select-none {
    width: 0%;
  }
  .title {
    font-size: 4em;
  }
  /* #select-profile {
    width: 37%;
  } */
  .inputHead {
    font-size: 2em;
  }

  .inputText {
    font-size: 1.5em;
  }

  input[type="text"] {
    font-size: 1.75em;
  }

  input[type="number"] {
    font-size: 1.75em;
  }

  .pink_button {
    letter-spacing: 2px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>