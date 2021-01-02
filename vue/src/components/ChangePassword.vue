<template>
  <div id="myaccount">
    <h1 class="title">MY ACCOUNT</h1>

    <!-- Bar -->
    <div style="margin-top:30px; width: 100%; display: grid; grid-template-columns: 15% 20% 65%"> 
      <h2 @click="OnclickPro()" style="padding-left:40px;" class="bartext">Profile</h2>
      <h2 class="bartext">Change Password</h2>
    </div>
    <!-- Bar -->

    <!-- Bar -->
    <div style="margin-top:2px;"> 
      <hr style="display: inline-block; width:13%;" class="line"/>
      <hr style="display: inline-block; width:18%;" class="line_select"/>
      <hr style="display: inline-block; width:67%;" class="line"/>
    </div>
    <!-- Bar -->

    <!-- Password -->
    <div style="padding-top:180px; display: flex; justify-content: center; align-items: center;">
        <div style="width: 50%; align-items: center; justify-content: center; display: grid; grid-template-columns: 40% 60%"> 
          <h3 class="inputText">CURRENT PASSWORD</h3>
          <input style="border-bottom: 2px solid #312F71; width:100%;" class="input" v-model="oldPassword" type="password" placeholder="Enter Current Password">
        </div>
    </div>
    <!-- Password -->

    <!-- Password -->
    <div style="padding-top:50px; display: flex; justify-content: center; align-items: center;">
        <div style="width: 50%; align-items: center; justify-content: center; display: grid; grid-template-columns: 40% 60%"> 
          <h3 class="inputText" style="text-align:right; margin-right:35px;">NEW PASSWORD</h3>
          <input style="border-bottom: 2px solid #312F71; width:100%;" class="input" v-model="newPassword" type="password" placeholder="Enter new Password">
        </div>
    </div>
    <!-- Password -->

    <!-- Password -->
    <div style="padding-top:50px; display: flex; justify-content: center; align-items: center;">
        <div style="width: 50%; align-items: center; justify-content: center; display: grid; grid-template-columns: 40% 60%"> 
          <h3 class="inputText">CONFIRM PASSWORD</h3>
          <input style="border-bottom: 2px solid #312F71; width:100%;" class="input" v-model="confirmPassword" type="password" placeholder="Confirm new Password">
        </div>
    </div>
    <!-- Password -->
          <!-- Button -->
          <div id="button">

          <!-- Save/Cancle -->
          <div>
            <button @click="checkPassword()" style="margin-top:80px; margin-right:320px;" class="pink_button"> SAVE CHANGE </button>
          </div>
    <!-- Button -->
    </div>

  </div>
</template>

<script>
import UserService from '../services/user.service';
import decode from "jwt-decode";

export default {
  created() {
      let userData = decode(localStorage.getItem("user"));
      this.user_id = userData.id;
  },
  data(){
    return{
      user_id: null,
      oldPassword:"",
      newPassword:"",
			confirmPassword:"",
			password_length: 0,
			contains_eight_characters: false,
			contains_number: false,
			contains_uppercase: false,
			contains_special_character: false,
			valid_password: false
    }
	},
  methods:{
    OnclickPro(){
      this.$emit("selectReturn",true)
    },
    checkPassword() {
      if(!this.oldPassword)
        {
        alert('You must enter old password!');
        }
      else if(!this.newPassword)
        {
        alert('You must enter new password!');
        }
      else if(!this.confirmPassword)
        {
        alert('You must enter confirm password!');
        }
      else if(this.newPassword != this.confirmPassword)
        {
        alert('Password missed match!');
        }
      // else if(!this.validPassword(this.newPassword))
      //   {
      //   alert('Your new password is weak!');
			// 	}
			else
				{
				UserService.changePassword(this.user_id,this.oldPassword,this.newPassword).then(
        response => {
          if(response){
            console.log(response);
          }
          else{
            console.log("Not found!");
          }
          })
				}
			this.oldPassword = "";
			this.newPassword = "";
			this.confirmPassword= "";
    },
    validPassword: function(password) {
      this.password_length = password.length ;
      const format = /[^A-Za-z0-9]/;
      if (this.password_length > 8) {
        this.contains_eight_ocharacters = true;
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
      }
      else {
        return this.valid_password = false;
      }
    }
  }

}
</script>

<style scoped>

  #button{
    float: right;
    margin-top:25px;
  }

  .white_button{
    letter-spacing: 2.24px;
    font-size:28px;
    color:#312F71;
    border: 3px solid #312F71;
    padding-top:15px;
    padding-bottom:15px;
    padding-left:34px;
    padding-right: 34px;
    background-color: transparent;
    font-family: "CloudBold";
  }

  .pink_button{
    letter-spacing: 2.24px;
    font-size:28px;
    background-color:#f98394;
    color: #FFFFFF;
    border: 3px solid #f98394;
    padding-top:15px;
    padding-bottom:15px;
    padding-left:34px;
    padding-right: 34px;
    font-family: "CloudBold";
  }

    ::placeholder  {
    color: #312F71;
    font-size: 20px;
    font-family: "CloudBold";
    letter-spacing: 1.6px;
    opacity: 0.7;
  }

    input[type=text] {
    color: #312F71;
    font-size: 25px;
    letter-spacing: 2px;
    font-family: "CloudBold";
    }

    input[type=text]:focus {
    border: none;
    background-color: none;
    outline: none;
    }
  
  .input{
    background: transparent;
    border: none;

    color: #312F71;
    letter-spacing: 1.6px;
    font-family: "CloudBold";
    font-size:20px;
    border: none;
    /* border-bottom: 1px solid black; */
  }

  input[data-v-7ecbf6ee] {
    margin: 0px;
    padding:10px;
    background: transparent;
    border: none;
    width:100%;
}

  input[type=password]:focus {
  border: none;
  background-color: none;
  outline: 0;
  }

  input[type=password] {
  font-size: 30px;
  }


  .inputHead{
    color: #312F71;
    letter-spacing: 1.92px;
    font-family: "CloudBold";
    font-size:24px;
    margin: 0;
  }

  .inputText{
    color: #312F71;
    letter-spacing: 1.6px;
    font-family: "CloudBold";
    font-size:20px;
    margin: 0;
  }

  .box{
    border: 3px solid #312F71;
  }
  #myaccount{
    background-color: #FFFFFF;
    padding-top:65px;
    padding-left: 108px;
    padding-right:130px;

    height: 100vh;
    overflow-y:hidden ;
  
  }

  .title{
    color: #312F71;
    letter-spacing: 6px;
    font-family: "CloudBold";
    font-size:60px;
    margin: 0;
  }

  .bartext{
    color: #312F71;
    letter-spacing: 2.2px;
    font-family: "CloudBold";
    font-size:22px;
    margin: 0;
  }

  .line{
    border: 1.5px solid #312F71;
    background-color: #312F71;
    opacity: 0.3;
    margin-bottom:3px;
  }

  .line_select{
    border: 5px solid #f98394;
    background-color: #f98394;
    opacity: 1;
    margin:0;
  }
</style>