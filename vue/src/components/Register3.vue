<template>
  <div class="row" style="min-height: 100vh; display: grid; grid-template-columns: 37% 63%">
    <div id="left-side">
      <img style="height: 537px;" src="@/assets/Logo.png">
    </div>
      <div id="right-side" class="column">
        <div>
          <div style="display:grid; grid-template-columns: 60% 40%">
          <div>
            <h1 class="title" style="margin:0px;">Please tell us</h1>
            <h1 class="title" style="margin:0px;">more about yourself.</h1>
          </div>
          <div>
            <img style="width:130px; padding-left:231px;" src="@/assets/Circle-02.png">
          </div>
        </div>

        <div>
          <!-- First Section-->
          <h2 style="margin-top:35px;">What's your name?</h2>
            <div class="row" style="display: grid; grid-template-columns: 50% 50%">
              <div>
                <!-- Input Section -->
                <div style="padding-right:33px;">
                  <h1 class="inputText">FIRST NAME*</h1>
                  <div style="margin-top:20px; padding-right:10px;">
                    <input v-model="user.firstName" style="margin:0px; width:100%;" class="input" type="text" placeholder="Enter your first name">
                  </div>
                  <hr style="margin-top:10px; margin-bottom:30px; height:2px;border:none; color:#FFFFFF; background-color:#FFFFFF;" />
                </div>
              <!-- Input Section -->
              <!-- Input Section -->
                <div style="padding-right:33px;">
                  <h1 class="inputText">NICKNAME*</h1>
                  <div style="margin-top:20px; padding-right:10px;">
                    <input v-model="user.nickName" style="margin:0px; width:100%;" class="input" type="text" placeholder="Enter your nickname">
                  </div>
                  <hr style="margin-top:10px; margin-bottom:30px; height:2px;border:none;color:#FFFFFF;background-color:#FFFFFF;" />
                </div>
              <!-- Input Section -->
              </div>
 
              <div>
                <!-- Input Section -->
                <div style="padding-right:33px;">
                  <h1 class="inputText">LAST NAME*</h1>
                  <div style="margin-top:20px; padding-right:10px;">
                    <input v-model="user.lastName" style="margin:0px; width:100%;" class="input" type="text" placeholder="Enter your last name">
                  </div>
                  <hr style="margin-top:10px; margin-bottom:30px; height:2px;border:none;color:#FFFFFF;background-color:#FFFFFF;" />
                </div>
              <!-- Input Section -->
              
              </div>
            </div>

          <!-- Second Section-->
          <h2 style="margin-top:35px;">When is your birthday?</h2>
          <h1 class="inputText">DATE OF BIRTH</h1>
          <div>
            <v-select :options="getDayList()" class="style-chooser" style="display: inline-block; width:15%;" placeholder="Day" v-model="user.birthday_day"></v-select>
            <v-select :options="getMonthList()" class="style-chooser" style="margin-left:25px; display: inline-block; width:20%;" placeholder="Month"  v-model="user.birthday_month"></v-select>
            <v-select :options="getYearList()" class="style-chooser" style="margin-left:25px; display: inline-block; width:20%;" placeholder="Year"  v-model="user.birthday_year"></v-select>
          </div>
          <div>
            <hr align="left" style="display: inline-block; width:15%; margin-top:10px; margin-bottom:30px; height:2px;border:none; color:#FFFFFF; background-color:#FFFFFF;" />
            <hr align="left" style="display: inline-block; width:20%; margin-left:25px; margin-top:10px; margin-bottom:30px; height:2px;border:none; color:#FFFFFF; background-color:#FFFFFF;" />
            <hr align="left" style="display: inline-block; width:20%; margin-left:25px; margin-top:10px; margin-bottom:30px; height:2px;border:none; color:#FFFFFF; background-color:#FFFFFF;" />
          </div>
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="row" style="margin-top:68px; display: grid; grid-template-columns: 50% 50%">
          <div>
            <button id="backButton" @click="backPage()"><i style="align:center; padding-right:20px;" class="fa fa-arrow-left"></i>BACK</button>
          </div>
          <div>
            <button id="nextButton" @click="checkRegister1()">NEXT<i style="align:center; padding-left:20px;" class="fa fa-arrow-right"></i></button>
          </div>
        </div>

        </div>
      </div>
  </div>
</template>

<script>
  import User from '../models/user';
  import Vue from 'vue'
  import vSelect from 'vue-select'
  Vue.component('v-select', vSelect)
  import 'vue-select/dist/vue-select.css'

  export default {
    data() {
      return {
      user: new User('','','','','','','','','','','','','','','','','','',''),
      }

    },
    methods: {
      checkRegister1() {
        if (!this.user.firstName) {
            alert('Firstname required');
            console.log('Firstname required');
        } 
        else if (!this.user.lastName) {
            alert('Lastname required');
            console.log('Lastname required');
        } 
        else if (!this.user.nickName) {
            alert('Nickname required');
            console.log('Nickname required');
        }
        else
        {
          this.$store.state.userInfo.firstName = this.user.firstName;
          this.$store.state.userInfo.lastName = this.user.lastName;
          this.$store.state.userInfo.nickName = this.user.nickName;
          this.$store.state.userInfo.birthday_day = this.user.birthday_day;
          this.$store.state.userInfo.birthday_month = this.user.birthday_month;
          this.$store.state.userInfo.birthday_year = this.user.birthday_year;
          console.log("Register3:");
          console.log(this.$store.state.userInfo.email);
          console.log(this.$store.state.userInfo.password);
          console.log(this.$store.state.userInfo.firstName);
          console.log(this.$store.state.userInfo.lastName);
          console.log(this.$store.state.userInfo.nickName);
          console.log(this.$store.state.userInfo.birthday_day);
          console.log(this.$store.state.userInfo.birthday_month);
          console.log(this.$store.state.userInfo.birthday_year);
          console.log(this.$store.state.userInfo.cpe);
          console.log(this.$store.state.userInfo.phoneNumber);
          console.log(this.$store.state.userInfo.line);
          console.log(this.$store.state.userInfo.facebookAccount);
          console.log(this.$store.state.userInfo.organ);
          console.log(this.$store.state.userInfo.role);
          console.log(this.$store.state.userInfo.field);

          this.$emit("pageReturn",4)
        }
      },
      backPage(){
          this.$emit("registerData",this.user)
          this.$emit("pageReturn",2)
      },
      getDayList(){
        var dayList = [];

        for (var i = 1; i <= 31; i++)
          {
          dayList.push(i);
          }

        return dayList;
      },
      getMonthList(){
        return ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];
      },
      getYearList(){
        var yearList = [];

        for (var i = 1920; i <= 2020; i++)
          {
          yearList.push(i);
          }

        return yearList;
      }
    }
  }
</script>

<style>

  .box{
    margin-top : 15px;
    font-family: "CloudLight";
  }

  .vs__dropdown-menu{
    max-height: 250px;
  }

  .textDivider{
   width: 100%; 
   text-align: center; 
   border-bottom: 2px solid #d5d5df; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
  }
  


  input[type=text] {
  color: white;
  font-size: 26px;
  letter-spacing: 1.6px;
  font-family: "CloudLight";
  opacity: 0.7;
  }

  input[data-v-7ecbf6ee] {
    margin: 0px;
    padding-left: 10px;
    background: transparent;
    border: none;
    width:100%;
}

  input[type=password] {
  color: white;
  font-size: 26px;
  letter-spacing: 1.6px;
  font-family: "CloudLight";
  opacity: 0.7;
  }

  .inputText{
    font-family: "CloudLight";
    letter-spacing: 1.6px;
    color: #FFFFFF;
    opacity: 0.7;
    font-size: 20px;
  }

  .textDivider span { 
    background: #282667; 
    font-size: 26px;
    font-family: "CloudBold";
    padding:0 10px; 
    color: #FFFFFF
    }
  

  #nextButton{
    color: #FFFFFF;
    background:#F28093;
    border: none;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 28px;
    font-family: "CloudBold";
    margin-left:240px;
  }

  #backButton{
    color: #FFFFFF;
    border: 3px solid #FFFFFF;
    background-color: transparent;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 28px;
    font-family: "CloudBold";
  }

  ::placeholder {
  color: #FFFFFF;
  font-size: 20px;
  font-family: "CloudLight";
  opacity: 0.7;
  }
  
  .input{
    margin-left: 10px;
    padding-left:10px ;
    background: transparent;
    border: none;
  }
  body, html {
  padding: 0;
  margin: 0;
  }
    
  .title{
    font-size: 44px;
    font-family: "CloudBold";
    letter-spacing: 4.4px;
    color: #FFFFFF;
    z-index: 2;
  }

  h2{
    text-align: left;
    font-family: "CloudBold";
    letter-spacing: 3px;
    color: #FFFFFF;
    font-size: 30px;
  }

  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle{
    background: #282667; 
    border: none;
    font-family: "CloudLight";
    letter-spacing: 1.6px;
    color: #FFFFFF;
    opacity: 0.7;
    font-size: 20px;
  }

  .style-chooser .vs__dropdown-menu {
    background: #FFFFFF; 
    border: none;
    font-family: "CloudLight";
    letter-spacing: 1.6px;
    color: #FFFFFF;
    font-size: 20px;
  }

  .vs__selected{
    background: #282667; 
    border: none;
    font-family: "CloudLight";
    letter-spacing: 1.6px;
    color: #FFFFFF;
    opacity: 0.7;
    font-size: 26px;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #FFFFFF;
  }

  #right-side{
    
    background-color: #282667;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #left-side{
    background-color: #312e71;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loginwith
  {
    font-size: 20px;
    font-family: "CloudLight";
    letter-spacing: 1.6px;
    color: #F9C0BD;
    margin-top:0px;
  }



</style>