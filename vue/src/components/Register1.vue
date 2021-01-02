<template>
  <div id= "register1">
    <div class="row" style="min-height: 100vh; display: grid; grid-template-columns: 37% 63%">
      <div id="left-side">
        <img style="height: 537px;" src="@/assets/Logo.png">
      </div>
      <div style="background: #282667; padding-top:50px; ">
        <a href="/" style="text-decoration: none; display: inline;" id="backToMain"> &lt; Back to Main Page </a>
        <div id="right-side" class="column">
            <div>
            <h1 style="margin-top:70px;" class="title">REGISTER </h1>

            <img style="width:100%; margin-top:70px;" src="@/assets/Google.png">
            <br>
            <img style="width:100%; margin-top:20px;" src="@/assets/Facebook.png">

            <p style="text-align:center; margin-top:20px; margin-bottom:20px; font: normal normal 300 20px/27px Cloud; letter-spacing: 1.6px; color: #FBDAD3; opacity: 0.5;"><span>OR</span></p>

          <a id="regisButton" @click="onClick">Sign up with Email</a>


          <div style="text-align:center; margin-top:35px;">
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
export default {
  name: "register1",
  methods: {
    onClick() {
      this.$emit("pageReturn",2)
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

  #regisButton{
    color: #FFFFFF;
    background-color: #F28093;
    border: none;
    padding-top: 14px;
    padding-left: 150px;
    padding-right: 150px;
    padding-bottom: 14px;
    letter-spacing: 3px;
    font-size: 30px;
    font-family: "CloudBold";
    text-decoration: none;
    margin-top: 0px;
    margin-bottom:20px;
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
    margin-top:0px;
  }

</style>