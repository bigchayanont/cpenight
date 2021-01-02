<template>
  <div id="Register5">    <div class="row" style="min-height: 100vh; display: grid; grid-template-columns: 37% 63%">
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
              <img style="width:130px; padding-left:231px;" src="@/assets/Group 299.png">
            </div>
          </div>

          <div>
            <!-- Second Section-->
            <h2 style="margin-top:35px;">Where do you work?</h2>
              <div class="row" style="display: grid; grid-template-columns: 50% 50%">
                <div>
                  <!-- Input Section -->
                  <div style="padding-right:33px;">
                    <h1 class="inputText">ORGANIZATION</h1>
                    <div style="margin-top:20px; padding-right:10px;">
                      <input style="margin:0px; width:100%;" class="input" type="text" v-model="user.organ" placeholder="Enter your organization name">
                    </div>
                    <hr style="margin-top:10px; margin-bottom:30px; height:2px;border:none; color:#FFFFFF; background-color:#FFFFFF;" />
                  </div>
                </div>

                <div>
                  <!-- Input Section -->
                  <div style="padding-right:33px;">
                    <h1 class="inputText">ROLE</h1>
                    <div style="margin-top:20px; padding-right:10px;">
                      <input style="margin:0px; width:100%;" class="input" type="text" v-model="user.role" placeholder="Enter your role (e.g. Manager)">
                    </div>
                    <hr style="margin-top:10px; margin-bottom:30px; height:2px;border:none;color:#FFFFFF;background-color:#FFFFFF;" />
                  </div>
                <!-- Input Section -->
                
                </div>
              </div>

            <!-- First Section-->
            <h2 style="margin-top:35px;">What do you do?</h2>
              <div class="row" style="display: grid; grid-template-columns: 50% 50%">
                <div>
                  <!-- Input Section -->
                  <div style="padding-right:33px;">
                    <h1 class="inputText">FIELD OF WORK</h1>
                    <div style="margin-top:20px; padding-right:10px;">
                      <input style="margin:0px; width:100%;" class="input" type="text" v-model="user.field" placeholder="Enter your field (e.g. UX/UI Designer)">
                    </div>
                    <hr style="margin-top:10px; margin-bottom:90px; height:2px;border:none; color:#FFFFFF; background-color:#FFFFFF;" />
                  </div>
                </div>

                <div>
                
                </div>
              </div>

          </div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <div class="row" style="margin-top:68px; display: grid; grid-template-columns: 50% 50%">
            <div>
              <button id="backButton" @click="backPage()"><i style="align:center; padding-right:20px;" class="fa fa-arrow-left"></i>BACK</button>
            </div>
            <div>
              <button id="nextButton" @click="nextPage()">FINISH<i style="align:center; padding-left:20px;" class="fa fa-arrow-right"></i></button>
            </div>
          </div>

          </div>
        </div>
    </div>
  </div>
</template>

<script>

  import User from '../models/user';
  export default {
    name: "Register5",
    components:{
    },
    data() {
      return {
        user: new User('','','','','','','','','','','','','','','','','','',''),
        loading: false,
        message: ''      
      }
    },
    methods: {
      nextPage(){
        this.$store.state.userInfo.organ = this.user.organ;
        this.$store.state.userInfo.role = this.user.role;
        this.$store.state.userInfo.field = this.user.field;
        this.message = '';
        this.submitted = true;
        this.user.email = this.$store.state.userInfo.email;
        this.user.password = this.$store.state.userInfo.password;
        this.user.firstName = this.$store.state.userInfo.firstName;
        this.user.lastName = this.$store.state.userInfo.lastName;
        this.user.nickName = this.$store.state.userInfo.nickName;
        this.user.birthday_day = this.$store.state.userInfo.birthday_day;
        this.user.birthday_month = this.$store.state.userInfo.birthday_month;
        this.user.birthday_year = this.$store.state.userInfo.birthday_year;
        this.user.classOf = this.$store.state.userInfo.classOf;
        this.user.phoneNumber = this.$store.state.userInfo.phoneNumber;
        this.user.line = this.$store.state.userInfo.line;
        this.user.facebookAccount = this.$store.state.userInfo.facebookAccount;
        this.user.organ = this.$store.state.userInfo.organ;
        this.user.role = this.$store.state.userInfo.role;
        this.user.field = this.$store.state.userInfo.field;
        console.log("Register5:");
        console.log(this.user.email);
        console.log(this.user.password);
        console.log(this.user.firstName);
        console.log(this.user.lastName);
        console.log(this.user.nickName);
        console.log(this.user.birthday_day);
        console.log(this.user.birthday_month);
        console.log(this.user.birthday_year);
        console.log(this.user.classOf);
        console.log(this.user.phoneNumber);
        console.log(this.user.line);
        console.log(this.user.facebookAccount);
        console.log(this.user.organ);
        console.log(this.user.role);
        console.log(this.user.field);
        console.log(JSON.stringify(this.user));
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
            this.$store.dispatch('auth/register', this.user).then(
              data => {
                this.message = data.message;
                this.successful = true;
                alert('register success');
                this.$router.push('/login');
              },
              error => {
                this.message =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
                this.successful = false;
              }
            );
      },
      backPage(){
          this.$emit("pageReturn",4)
      }
    },

    computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
      }
    },
      mounted(){
      if (this.loggedIn) {
              alert('already logged in');
              this.$router.push('/');
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