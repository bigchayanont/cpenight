<template>
  <div id = "Register4">
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
              <img style="width:130px; padding-left:231px;" src="@/assets/Circle-03.png">
            </div>
          </div>

          <div>
            <!-- Second Section-->
            <h2 style="margin-top:35px;">Which CPE Class are you?</h2>
            <h1 class="inputText">CLASS OF</h1>
            <v-select :options="classList()" class="style-chooser" style=" width:25%;" placeholder="CPE" v-model="user.classOf"></v-select>
            <hr align="left" style="width:25%; margin-top:10px; margin-bottom:30px; height:2px;border:none; color:#FFFFFF; background-color:#FFFFFF;" />
            <!-- First Section-->
            <h2 style="margin-top:35px;">How can we contract you?</h2>
              <div class="row" style="display: grid; grid-template-columns: 50% 50%">
                <div>
                  <!-- Input Section -->
                  <div style="padding-right:33px;">
                    <h1 class="inputText">PHONE*</h1>
                    <div style="margin-top:20px; padding-right:10px;">
                      <input v-model="user.phoneNumber"  style="margin:0px; width:100%;" class="input" type="text" placeholder="Enter your phone number">
                    </div>
                    <hr style="margin-top:10px; margin-bottom:30px; height:2px;border:none; color:#FFFFFF; background-color:#FFFFFF;" />
                  </div>
                <!-- Input Section -->
                <!-- Input Section -->
                  <div style="padding-right:33px;">
                    <h1 class="inputText">FACEBOOK</h1>
                    <div style="margin-top:20px; padding-right:10px;">
                      <input v-model="user.facebookAccount"  style="margin:0px; width:100%;" class="input" type="text" placeholder="Enter your Facebook name">
                    </div>
                    <hr style="margin-top:10px; margin-bottom:30px; height:2px;border:none;color:#FFFFFF;background-color:#FFFFFF;" />
                  </div>
                <!-- Input Section -->
                </div>

                <div>
                  <!-- Input Section -->
                  <div style="padding-right:33px;">
                    <h1 class="inputText">LINE</h1>
                    <div style="margin-top:20px; padding-right:10px;">
                      <input v-model="user.line"  style="margin:0px; width:100%;" class="input" type="text" placeholder="Enter your LINE ID">
                    </div>
                    <hr style="margin-top:10px; margin-bottom:30px; height:2px;border:none;color:#FFFFFF;background-color:#FFFFFF;" />
                  </div>
                <!-- Input Section -->
                
                </div>
              </div>

          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <div class="row" style="margin-top:68px; display: grid; grid-template-columns: 50% 50%">
            <div>
              <button id="backButton" @click="backPage()"><i style="align:center; padding-right:20px;" class="fa fa-arrow-left"></i>BACK</button>
            </div>
            <div>
              <button id="nextButton" @click="nextPage()">NEXT<i style="align:center; padding-left:20px;" class="fa fa-arrow-right"></i></button>
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
        user: new User('','','','','','','','','','','','','','','','','','',''),      
      }

    },
    methods: {
      nextPage(){
        this.$store.state.userInfo.classOf = this.user.classOf;
        this.$store.state.userInfo.phoneNumber = this.user.phoneNumber;
        this.$store.state.userInfo.line = this.user.line;
        this.$store.state.userInfo.facebookAccount = this.user.facebookAccount;
        console.log("Register4:");
        console.log(this.$store.state.userInfo.email);
        console.log(this.$store.state.userInfo.password);
        console.log(this.$store.state.userInfo.firstName);
        console.log(this.$store.state.userInfo.lastName);
        console.log(this.$store.state.userInfo.nickName);
        console.log(this.$store.state.userInfo.birthday_day);
        console.log(this.$store.state.userInfo.birthday_month);
        console.log(this.$store.state.userInfo.birthday_year);
        console.log(this.$store.state.userInfo.classOf);
        console.log(this.$store.state.userInfo.phoneNumber);
        console.log(this.$store.state.userInfo.line);
        console.log(this.$store.state.userInfo.facebookAccount);
        console.log(this.$store.state.userInfo.organ);
        console.log(this.$store.state.userInfo.role);
        console.log(this.$store.state.userInfo.field);
        this.$emit("pageReturn",5)
      },
      backPage(){
          
          this.$emit("pageReturn",3)
      },
      classList(){
        var classList = ['อาจารย์','บุคคลากร'];

        for (var i = 1; i <= 34; i++)
          {
          classList.push("CPE " + i);
          }

        return classList;
      }
    }
  }
</script>

<style scoped>

  .box{
    margin-top : 15px;
    font-family: "CloudLight";
  }
  
  .textDivider{
   width: 100%; 
   text-align: center; 
   border-bottom: 2px solid #d5d5df; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
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
    font-size: 20px;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #FFFFFF;
  }

  .date-dropdown-select[data-v-67d74744]{
    border-radius: 0px;
    border-color: #282667; 
    padding: 8px;
    margin-right: 10px;
    font-size: 20px;
    letter-spacing: 1.6px;
    color: #FFFFFF;
    opacity: 0.7;
    background-color:transparent;
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