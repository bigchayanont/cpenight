<template>
  <div class="section">
    <div class="page-container" id="myaccount">
      <h1 class="title" style="cursor: default; text-transform: uppercase;">{{$t('myAccount.myAccount')}}</h1>

      <!-- Bar -->
      <!-- <div style="margin-top: 30px; width: 100%; display: flex">
        <h2 style="cursor: default;" id="first-bar" class="bartext">{{$t('myAccount.profile')}}</h2>
        <h2 @click="OnclickChange()" style="padding-left: 40px; cursor: pointer;" class="bartext">
          {{$t('editPassword.changePass')}}
        </h2>
      </div> -->
      <!-- Bar -->

      <!-- Bar -->
      <!-- <div style="margin-top: 2px; display: flex; align-items: center">
        <hr id="select-profile" class="line_select" />
        <hr id="select-password" class="line" />
        <hr id="select-none" class="line" />
      </div> -->
      <!-- Bar -->

      <!--New-->
      <div style="display:flex; margin-top: 30px;">
        <div style="z-index:3; display:block; justify-content:center; align-items:center;">
          <h2 style="cursor: pointer; padding-left:15px; padding-right:15px;" id="first-bar" class="bartext">{{$t('myAccount.profile')}}</h2>
          <hr id="select-profile" class="line_select" />
        </div>

        <div style="display:block; justify-content:center; align-items:center;">
          <h2 @click="OnclickChange()" style="text-align:center; padding-left:15px; padding-right:15px; cursor: pointer;" class="bartext">
          {{$t('editPassword.changePass')}}
        </h2>
          <!-- <hr id="select-password" class="line" /> -->
        </div>
      </div>

      <div style="z-index:1;">
        <hr style="width:100%; margin-top:-5px;" id="select-password" class="line" />
      </div>

      <!-- Profile -->
      <div id="profile-section" >
        <!-- Profile Pic-->
        <div id="picture-container" >
          <div>
            <label for="image">
              <div v-if="editSelect" id="profile-mask">
                <form enctype="multipart/form-data">
                <!-- <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  @change="previewImage"
                  style="display: none;"
                /> -->
                </form>
              </div>
              <div style="position: relative">
                <!-- <img style="cursor: pointer" v-if="editSelect" id="camera" src="@/assets/user/camera.png" /> -->
                <div class="profilepic">
                  <!-- <img style="cursor: pointer" :class="changeOpacity()" :src="preview" /> -->
                  <!-- ลบอันล่างทิ้งถ้าจะใช้ -->
                  <img style="" :src="preview" />
                </div>
              </div>
            </label>
          </div>
        </div>
        <!-- Profile Pic-->

        <!-- Input -->
        <div id="input-section">
          <!-- General -->
          <div class="box" style="padding: 15px">
            <h1 style="cursor: pointer;" class="inputHead">{{$t('myAccount.general')}}</h1>
            <div class="input-container">
              <div>
                <div class="general-container">
                  <div>
                    <div
                      style="
                        width: 100%;
                        align-items: center;
                        justify-content: center;
                        display: grid;
                        grid-template-columns: 30% 70%;
                      "
                    >
                      <h3 style="cursor: default;" class="inputText">{{$t('myAccount.firstname')}}</h3>
                      <input
                        v-if="editSelect == false"
                        style="width: 85%"
                        class="input input-left"
                        type="text"
                        v-model="profile.firstName"
                        disabled
                      />
                      <input
                        v-else
                        style="border-bottom: 1px solid #312f71; width: 75%"
                        class="input input-left"
                        type="text"
                        ref="firstName"
                        v-model="inputFirstName"
                      />
                    </div>
                    <div
                      style="
                        width: 100%;
                        align-items: center;
                        justify-content: center;
                        display: grid;
                        grid-template-columns: 30% 70%;
                        margin-top: 15px;
                      "
                    >
                      <h3 style="cursor: default;" class="inputText">{{$t('myAccount.lastname')}}</h3>
                      <input
                        v-if="editSelect == false"
                        style="width: 85%"
                        class="input input-left"
                        type="text"
                        v-model="profile.lastName"
                        disabled
                      />
                      <input
                        v-else
                        style="
                          border-bottom: 1px solid #312f71;

                          width: 75%;
                        "
                        class="input input-left"
                        type="text"
                        ref="lastName"
                        v-model="inputLastName"
                      />
                    </div>
                    <div
                      style="
                        width: 100%;
                        align-items: center;
                        justify-content: center;
                        display: grid;
                        grid-template-columns: 30% 70%;
                        margin-top: 15px;
                      "
                    >
                      <h3 style="cursor: default;" class="inputText">{{$t('myAccount.nickname')}}</h3>
                      <input
                        v-if="editSelect == false"
                        style="width: 85%"
                        class="input input-left"
                        type="text"
                        v-model="profile.nickName"
                        disabled
                      />
                      <input
                        v-else
                        style="
                          border-bottom: 1px solid #312f71;

                          width: 75%;
                        "
                        class="input input-left"
                        type="text"
                        ref="nickName"
                        v-model="inputNickName"
                      />
                    </div>
                  </div>
                  <div id="general-second-section">
                    <div
                      style="
                        width: 100%;
                        align-items: center;
                        justify-content: center;
                        display: grid;
                        grid-template-columns: 30% 70%;
                      "
                    >
                      <h3 style="cursor: default;" class="inputText">{{$t('myAccount.birthDate')}}</h3>
                      <input
                        v-if="editSelect == false"
                        style="width: 85%"
                        class="input input-left"
                        type="text"
                        v-model="connectDate"
                        disabled
                      />
                      <div
                        v-else
                        style="display: flex; justify-content: space-between"
                        class="input-left-date"
                      >
                        <div class="select-dropdown">
                          <select v-model="day">
                            <option selected disabled>DAY</option>
                            <option v-for="(day,index) in days" v-bind:key="index">
                              {{ day }}
                            </option>
                          </select>
                        </div>
                        <div id="month-select">
                          <div class="select-dropdown">
                            <select v-model="month">
                              <option selected disabled>MON</option>
                              <option
                                v-for="(month,index) in months"
                                v-bind:key="index"
                              >
                                {{ month }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div id="year-select">
                          <div class="select-dropdown">
                            <select v-model="year">
                              <option selected disabled>YEAR</option>
                              <option v-for="(year,index) in years" v-bind:key="index">
                                {{ year }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style="
                        width: 100%;
                        align-items: center;
                        justify-content: center;
                        display: grid;
                        grid-template-columns: 30% 70%;
                        margin-top: 15px;
                      "
                    >
                      <h3 style="cursor: default;" class="inputText">{{$t('myAccount.cpe')}}</h3>
                      <input
                        v-if="editSelect == false"
                        style="width: 85%"
                        class="input input-left"
                        type="text"
                        v-model="profile.classOf"
                        disabled
                      />
                      <div v-else id="cpe-select" class="input-left">
                        <div class="select-dropdown">
                          <select v-model="classOf">
                            <option selected disabled>CPE</option>
                            <option
                              v-for="(classOf,index) in classLists"
                              v-bind:key="index"
                            >
                              {{ classOf }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Second Section -->
          <div
            class="general-container"
            style="margin-top: 20px; margin-bottom: 30px; width: 100%"
          >
            <div class="box" id="contact-container">
              <h1 style="cursor: default;" class="inputHead">{{$t('myAccount.contact')}}</h1>
              <div class="input-container">
                <!-- Input Container -->
                <div
                  style="
                    width: 100%;
                    display: grid;
                    grid-template-columns: 100%;
                  "
                >
                  <div
                    style="
                      width: 100%;
                      align-items: center;
                      justify-content: center;
                      display: grid;
                      grid-template-columns: 30% 70%;
                    "
                  >
                    <h3 style="cursor: default;" class="inputText">{{$t('myAccount.phone')}}</h3>
                    <input
                      v-if="editSelect == false"
                      style="margin-left: 30px; width: 85%"
                      class="input"
                      type="text"
                      v-model="profile.phoneNumber"
                      onkeydown="return event.keyCode !== 69 && event.keyCode !== 189"
                      disabled
                    />
                    <input
                      v-else
                      style="
                        border-bottom: 1px solid #312f71;
                        margin-left: 30px;
                        width: 75%;
                      "
                      class="input"
                      type="number"
                      ref="phoneNumber"
                      @input="updateValuePhone"
                      onkeydown="return event.keyCode !== 69 && event.keyCode !== 189"
                      :value="phoneNumber"
                    />
                  </div>
                </div>
                <!-- Input Container -->

                <!-- Input Container -->
                <div
                  style="
                    margin-top: 15px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 100%;
                  "
                >
                  <div
                    style="
                      width: 100%;
                      align-items: center;
                      justify-content: center;
                      display: grid;
                      grid-template-columns: 30% 70%;
                    "
                  >
                    <h3 style="cursor: default;" class="inputText">{{$t('myAccount.line')}}</h3>
                    <input
                      v-if="editSelect == false"
                      style="margin-left: 30px; width: 85%"
                      class="input"
                      type="text"
                      placeholder="-"
                      v-model="profile.line"
                      disabled
                    />
                    <input
                      v-else
                      style="
                        border-bottom: 1px solid #312f71;
                        margin-left: 30px;
                        width: 75%;
                      "
                      class="input"
                      ref="line"
                      type="text"
                      v-model="inputLine"
                    />
                  </div>
                </div>
                <!-- Input Container -->

                <!-- Input Container -->
                <div
                  style="
                    margin-top: 15px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 100%;
                  "
                >
                  <div
                    style="
                      width: 100%;
                      align-items: center;
                      justify-content: center;
                      display: grid;
                      grid-template-columns: 30% 70%;
                    "
                  >
                    <h3 style="cursor: default;" class="inputText">{{$t('myAccount.facebook')}}</h3>
                    <input
                      v-if="editSelect == false"
                      style="margin-left: 30px; width: 85%"
                      class="input"
                      type="text"
                      placeholder="-"
                      v-model="profile.facebookAccount"
                      disabled
                    />
                    <input
                      v-else
                      style="
                        border-bottom: 1px solid #312f71;
                        margin-left: 30px;
                        width: 75%;
                      "
                      class="input"
                      ref="facebookAccount"
                      type="text"
                      v-model="inputFacebook"
                    />
                  </div>
                </div>
                <!-- Input Container -->
              </div>
            </div>

            <div class="box" id="work-container">
              <h1 style="cursor: default;" class="inputHead">{{$t('myAccount.work')}}</h1>
              <div class="input-container">
                <!-- Input Container -->
                <div
                  style="
                    width: 100%;
                    display: grid;
                    grid-template-columns: 100%;
                  "
                >
                  <div
                    style="
                      width: 100%;
                      align-items: center;
                      justify-content: center;
                      display: grid;
                      grid-template-columns: 30% 70%;
                    "
                  >
                    <h3 style="cursor: default;" class="inputText">{{$t('myAccount.organization')}}</h3>
                    <input
                      v-if="editSelect == false"
                      style="margin-left: 30px; width: 85%"
                      class="input"
                      type="text"
                      placeholder="-"
                      v-model="profile.organ"
                      disabled
                    />
                    <input
                      v-else
                      style="
                        border-bottom: 1px solid #312f71;
                        margin-left: 30px;
                        width: 75%;
                      "
                      class="input"
                      ref="organ"
                      type="text"
                      v-model="inputOrgan"
                    />
                  </div>
                </div>
                <!-- Input Container -->

                <!-- Input Container -->
                <div
                  style="
                    margin-top: 15px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 100%;
                  "
                >
                  <div
                    style="
                      width: 100%;
                      align-items: center;
                      justify-content: center;
                      display: grid;
                      grid-template-columns: 30% 70%;
                    "
                  >
                    <h3 style="cursor: default;" class="inputText">{{$t('myAccount.role')}}</h3>
                    <input
                      v-if="editSelect == false"
                      style="margin-left: 30px; width: 85%"
                      class="input"
                      type="text"
                      placeholder="-"
                      v-model="profile.role"
                      disabled
                    />
                    <input
                      v-else
                      style="
                        border-bottom: 1px solid #312f71;
                        margin-left: 30px;
                        width: 75%;
                      "
                      class="input"
                      ref="role"
                      type="text"
                      v-model="inputRole"
                    />
                  </div>
                </div>
                <!-- Input Container -->

                <!-- Input Container -->
                <div
                  style="
                    margin-top: 15px;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 100%;
                  "
                >
                  <div
                    style="
                      width: 100%;
                      align-items: center;
                      justify-content: center;
                      display: grid;
                      grid-template-columns: 30% 70%;
                    "
                  >
                    <h3 style="cursor: default;" class="inputText">{{$t('myAccount.field')}}</h3>
                    <input
                      v-if="editSelect == false"
                      style="margin-left: 30px; width: 85%"
                      class="input"
                      type="text"
                      placeholder="-"
                      v-model="profile.field"
                      disabled
                    />
                    <input
                      v-else
                      style="
                        border-bottom: 1px solid #312f71;
                        margin-left: 30px;
                        width: 75%;
                      "
                      class="input"
                      ref="field"
                      type="text"
                      v-model="inputField"
                    />
                  </div>
                </div>
                <!-- Input Container -->
              </div>
            </div>
          </div>
          <!-- Second Section -->

          <!-- Button -->
          <div id="button">
            <!-- Edit -->
            <div v-show="!editSelect">
              <button style="cursor: pointer;" @click="editSelect = true" class="grow-on-hover white_button">
                {{$t('myAccount.editprofile')}}
              </button>
            </div>

            <!-- Save/Cancle -->
            <div v-show="editSelect" style="display: flex;">
              <button
                @click="saveProfile()"
                style="margin-right: 30px; cursor: pointer;"
                class="pink_button grow-on-hover"
              >
                {{$t('myAccount.saveprofile')}} 
              </button>
              <button
                @click="
                  cancel();
                  editSelect = false;
                "
                style="cursor: pointer;"
                class="white_button grow-on-hover"
              >
                {{$t('myAccount.cancel')}}
              </button>
            </div>
          </div>
          <!-- Button -->
        </div>
        <!-- Input -->
      </div>
      <!-- Profile -->
    </div>
  </div>
</template>

<script>
import User from '../models/user';
import decode from "jwt-decode";
import UserService from '../services/user.service';
import {bus} from '../main'
// const mkdirp = require('mkdirp')

export default {
  data() {
    return {
      selected_pro: true,
      selected_change: false,
      editSelect: false,
      classOf: "",
      phoneNumber: "",
      inputLine:"",
      inputFirstName:"",
      inputLastName:"",
      inputNickName:"",
      inputFacebook:"",
      inputOrgan:"",
      inputRole:"",
      inputField:"",
      connectDate: "",
      day: "",
      month: "",
      year: "",
      profile: new User(),
      display: new User(),
      days: [],
      months: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
      years: [],
      classLists: ["อาจารย์", "บุคลากร"],
      preview: "",
      tempImage: "",
      image: null,
      imageChanged: false,
      preview_list: [],
      image_list: [],
      show: false,
    }
  },
  created() {
    let userData = decode(localStorage.getItem("user"));
    UserService.getUserData(userData)
    .then(
    response => {
    if(response) {
      this.profile = response;
      this.day = this.profile.birthday_day;
      this.month = this.profile.birthday_month;
      this.year = this.profile.birthday_year;
      this.classOf = this.profile.classOf;
      this.phoneNumber = this.profile.phoneNumber;
      this.inputFirstName = this.profile.firstName;
      this.inputLastName = this.profile.lastName;
      this.inputNickName = this.profile.nickName;
      this.inputLine = this.profile.line;
      this.inputFacebook = this.profile.facebookAccount;
      this.inputOrgan = this.profile.organ;
      this.inputRole = this.profile.role;
      this.inputField = this.profile.field;
      this.connectDate = this.profile.birthday_day + " " + this.profile.birthday_month + " " + this.profile.birthday_year;
      this.display.email = this.profile.email;
      this.display.accountType = this.profile.accountType;
      this.display.firstName = this.profile.firstName;
      this.display.lastName = this.profile.lastName;
      this.$store.state.accountTypeCheck = this.profile.accountType;
      if (this.profile.accountType == 'EMAIL' && this.profile.profilePic == "default") {
        this.preview = require("@/assets/user/default-pic.jpg");
        this.tempImage = require("@/assets/user/default-pic.jpg");
        this.display.profilePic = require("@/assets/user/default-pic.jpg");
      }
      else {
        this.preview = this.profile.profilePic;
        this.tempImage = this.profile.profilePic;
        this.display.profilePic = this.profile.profilePic;
      }

      /* UserService.getUserProfile().then(
      response => {
        if(response){
          console.log(response);
          this.preview = response;
        }
        else{
          console.log("Not found!");
        }
      }) */

      bus.$emit('display',this.display);
    }
    })
    .catch(
      () => {
        this.$router.push('/login');
      }
    )
    for (var i = 1; i <= 31; i++) this.days.push(i);
    for (var j = 2020; j >= 1920; j--) this.years.push(j);
    for (var k = 1; k <= 34; k++) this.classLists.push("CPE " + k);
  },
  computed: {
  
    selectedProfile() {
      let selected = "line_select";
      let deselected = "line";
      if (this.selected_pro === true) {
        return selected;
      }
      return deselected;
    },
    selectedChangedPassword() {
      let selected = "line_select";
      let deselected = "line";
      if (this.selected_change === true) {
        return selected;
      }
      return deselected;
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
      }
  },
  methods: {
    previewImage: function (event) {
      if (event.target.files[0]) {
        this.tempImage = this.preview;
        this.preview = URL.createObjectURL(event.target.files[0]);
        const formData = new FormData();
        formData.append('uploadedImages',event.target.files[0]);
        this.image = formData;
        this.imageChanged = true;
      }
    },
    changeOpacity() {
      let change = "profilechange"
      if (this.editSelect === true){
        return change;
      }
    },
    saveProfile() {
      //this.tempImage = this.preview;
      //this.profile.profilePic = this.preview;
      this.profile.firstName = this.inputFirstName;
      this.profile.lastName = this.inputLastName;
      this.profile.nickName = this.inputNickName;
      this.profile.birthday_day = this.day;
      this.profile.birthday_month = this.month;
      this.profile.birthday_year = this.year;
      this.profile.classOf = this.classOf;
      this.profile.phoneNumber = this.$refs["phoneNumber"].value;
      this.profile.line = this.inputLine;
      this.profile.facebookAccount = this.inputFacebook;
      this.profile.organ = this.inputOrgan;
      this.profile.role = this.inputRole;
      this.profile.field = this.inputField;
      this.connectDate =
        this.profile.birthday_day +
        " " +
        this.profile.birthday_month +
        " " +
        this.profile.birthday_year;
      this.display.firstName = this.inputFirstName;
      this.display.lastName = this.inputLastName;
      this.editSelect = false;
      if(this.imageChanged) {
        UserService.uploadProfile(this.image).then(
          response => {
            if(response){
              console.log(response);
            }
            else{
              console.log("Uploading Failed!");
            }
          })
        UserService.getUserProfile().then(
          response => {
            if(response){
              console.log(JSON.stringify(response));
              this.preview = response;
            }
            else{
              console.log("Not found!");
            }
          })
        }
      UserService.editData(this.profile).then(
        response => {
          if(response){
            console.log(response);
          }
          else{
            console.log("Not found!");
          }
        })
      localStorage.removeItem("firstName");
      localStorage.setItem("firstName",this.profile.firstName);
      this.imageChanged = false;
      this.image = null;
      alert('Save Profile Successful');
    },
    cancel() {
      this.day = this.profile.birthday_day;
      this.month = this.profile.birthday_month;
      this.year = this.profile.birthday_year;
      this.classOf = this.profile.classOf;
      this.phoneNumber = this.profile.phoneNumber;
      this.preview = this.tempImage;
      this.inputFirstName = this.profile.firstName;
      this.inputLastName = this.profile.lastName;
      this.inputNickName = this.profile.nickName;
      this.inputLine = this.profile.line;
      this.inputFacebook = this.profile.facebookAccount;
      this.inputOrgan = this.profile.organ;
      this.inputRole = this.profile.role;
      this.inputField = this.profile.field;
      this.imageChanged = false;
      this.image = null;
      this.preview = this.tempImage;
    },
    OnclickChange() {
      this.$emit("selectReturn", false);
    },
    updateValuePhone(event) {
      const value = event.target.value;
      if (String(value).length <= 10) {
        this.phoneNumber = value;
      }
      this.$forceUpdate();
    },
  }
}
</script>

<style scoped>
#camera {
  z-index: 1000;
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  border: #312f71 2px solid;
}
.profilechange {
  opacity: 0.7;
}
#profile-mask {
  display: none;
}
::placeholder {
  color: #312f71;
  font-size: 1em;
  font-family: "CloudBold";
  opacity: 1;
}
.input-left {
  margin-left: 10px;
}
.input-left-date {
  margin-left: 10px;
}
#general-second-section {
  margin-top: 0px;
}
#work-container {
  padding: 15px;
  margin-left: 12px;
}
#contact-container {
  padding: 15px;
  margin-right: 12px;
}
.general-container {
  display: grid;
  grid-template-columns: 50% 50%;
}
#select-profile {
  z-index:2;
}

#select-password {
  margin-top:2.5px;
  z-index:1;
}

#select-none {
  width: 67%;
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

#picture-container {
  display: initial;
}
#input-section {
  margin-left: 30px;
}

#profile-section {
  margin-top: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
}
.profilepic {
  position: relative;
  width: 159px;
  height: 159px;
  overflow: hidden;
  border-radius: 50%;
  border: #312f71 2px solid;
}

.profilepic img {
  width: 100%;
  height: 100%;
}

#button {
  float: right;
  margin-top: 25px;
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

.white_button {
  letter-spacing: 2px;
  color: #312f71;
  border: 2px solid #312f71;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 32px;
  padding-right: 32px;
  font-size: 1.75em;
  background-color: transparent;
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

input[type="number"] {
  color: #312f71;
  font-size: 2em;
  letter-spacing: 2px;
  font-family: "CloudBold";
  -moz-appearance: textfield;
}

input[type="number"]:focus {
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
  /* border-bottom: 1px solid black; */
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
  font-family: "CloudLight";
  -webkit-text-stroke: 0.7px #312f71;
  font-size: 1.75em;
  margin: 0;
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
  } */
}

@media screen and (max-width: 1440px) {
  /* #select-profile {
    width: 12%;
  } */
  #profile-section {
    justify-content: space-between;
  }
}

@media screen and (max-width: 1024px) {
  /* #first-bar {
    padding-left: 25px;
  } */
}

@media screen and (max-width: 768px) {
  .input-container {
    padding-top: 15px;
    padding-left: 0px;
  }
  #input-section {
    margin-left: 0px;
  }
  /* #first-bar {
    padding-left: 10px;
  } */

  #profile-section {
    margin-top: 35px;
    width: 100%;
    display: block;
    justify-content: center;
    align-items: top;
  }

  .profilepic {
    width: 150px;
    height:150px;
    margin-bottom: 30px;
    /* display: none; */
  }

  #picture-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 414px) {
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
  #general-second-section {
    margin-top: 15px;
  }
  .profilepic {
    width: 100px;
    height:100px;
    margin-bottom: 30px;
    /* display: none; */
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
  }
  #button {
    margin-top: 0px;
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (max-width: 375px) {
  .input-left-date {
    margin-left: 0px;
  }
  .select-dropdown select {
    font-size: 1.5em;
  }
}

@media screen and (max-width: 360px) {
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
  .pink_button{
    padding-left: 2px;
    padding-right: 2px;
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
}


