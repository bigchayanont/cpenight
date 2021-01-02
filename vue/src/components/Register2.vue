<template>
  <div id= "register2">
    <div class="row" style="min-height: 100vh; display: grid; grid-template-columns: 37% 63%">
      <div id="left-side">
        <img style="height: 537px;" src="@/assets/Logo.png">
      </div>
      <div style="background: #282667; padding-top:50px; ">
        <a href="/" style="text-decoration: none; display: inline;" id="backToMain"> &lt; Back to Main Page </a>
        <div id="right-side" class="column">
            <div>
            <h1 style="margin-top:30px;" class="title"> REGISTER </h1>
            <!-- Input -->
            <div class="box" style="display: grid; grid-template-columns: 10% 90%">
              <img style="height:43px; margin-top:-5px;" src="@/assets/icons8-male-user-64.png">
              <input v-model="user.email" class="input" type="text" placeholder="Email">
            </div>

            <hr style="margin-top:20px; margin-bottom:40px; height:2px;border:none;color:#FFFFFF;background-color:#FFFFFF;" />

            <div class="box" style="display: grid; grid-template-columns: 10% 90%">
              <img style="height:37px; margin-top:-5px;" src="@/assets/icons8-lock-52.png">
              <input v-model="user.password" class="input" type="password" placeholder="Password">
            </div>

            <hr style="margin-top:20px; margin-bottom:40px; height:2px;border:none;color:#FFFFFF;background-color:#FFFFFF;" />

            <div class="box" style="display: grid; grid-template-columns: 10% 90%">
              <img style="height:45px; margin-top:-5px;" src="@/assets/Confirm Pass.png">
              <input v-model="user.confirmPassword" class="input" type="password" placeholder="Confirm Password">
            </div>

            <hr style="margin-top:20px; margin-bottom:20px; height:2px;border:none;color:#FFFFFF;background-color:#FFFFFF;" />
          
              <br>
                <button @click="checkRegister()" id="loginButton" style="margin-bottom:20px;">REGISTER</button>
              <br/>

            <br>
            <div style="text-align:center; margin-top:5px;">
              <span style="color:#FFFFFF; letter-spacing: 1.6px; font-size:18px; font-family: 'CloudBold';">Already have an account ?</span>
              <a style="margin-left:10px; color:#F28093; letter-spacing: 1.6px; font-size:18px; font-family: 'CloudBold';" href="/login">Login</a>
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
    methods: {
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
          console.log(this.user.email)
          AuthService.checkEmailExists(this.user.email)
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
            return this.valid_password = false;
          }
        }
    },
    data() {
        return {
          user: new User('','','','','','','','','','','','','','','','','','',''),
          submitted: false,
          successful: false,
          message: '',
          password_length: 0,
          contains_eight_characters: false,
          contains_number: false,
          contains_uppercase: false,
          contains_special_character: false,
          valid_password: false,
      }
  },
}
</script>

<style scoped>
  #backToMain{
    font-family: "CloudBold";
    font-size:22px;
    color: #FFFFFF; 
    margin-top: 50px;
    padding-left: 75px;
  }

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

  input[type=text] {
  color: white;
  font-size: 26px;
  font-family: "CloudLight";
  }

  input[type=password] {
  color: white;
  font-size: 26px;
  font-family: "CloudLight";
  }

  .textDivider span { 
    background: #282667; 
    font-size: 26px;
    font-family: "CloudBold";
    padding:0 10px; 
    color: #FFFFFF;
    }

  #loginButton{
    color: #FFFFFF;
    background-color: #F28093;
    border: none;
    width: 100%;
    margin-top:10px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 250px;
    padding-right: 250px;
    font-size: 30px;
    font-family: "CloudBold";
  }

  ::placeholder {
  color: #bbbde4;
  font-size: 26px;
  font-family: "CloudLight";
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
    
  #forgot{
    text-align:right; 
    font-size:18px;
    font-family: "CloudLight";
    color: white;
    margin-bottom: 0px;
  }
  .title{
    font-size: 112px;
    font-family: "CloudBold";
    letter-spacing: 11.6px;
    color: #FFFFFF;
    opacity: 1;
    margin-bottom: 0px;
    margin-top:0px;
    z-index: 2;
  }

  #right-side{
    
    background-color: #282667;
    display: flex;
    justify-content: center;
    align-items: top;
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
    margin-top:10px;
    text-align: center; 
    border-bottom: 2px solid #d5d5df; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
  }
</style>