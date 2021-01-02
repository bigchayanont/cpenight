<template>
  <div id="Usermenu">
      
      <!---- Menu Bar ---->
      <div id="menu-container" style="min-height: 100vh;">
        
        <!-- Name / Email -->
        <div style="padding-left:59px; padding-top:90px;">
          <img class="profilepic" style="width:100px; height:100px;" src="@/assets/user/profile.jpg" >
          <h1 style="margin-top:15px;" class="nameSide">Piriya</h1>
          <h1 class="nameSide">Chaigul</h1>
          <h3 style="margin-top:5px;" class="emailSide">pound_piriya@hotmail.com</h3>
        </div>
        <!-- Name / Email -->

        <!-- unSelect -->
        <div v-show="select1 == false" @click="Onclick1()">
          <div style="align-items: center; width: 100%; margin-left:59px; margin-top:45px; display: grid; grid-template-columns: 15% 85%">
            <img class="icon" style="width:35px;" src="@/assets/user/ticket-white.png" >
            <h2 style="color:#FFFFFF;" class="select">MY TICKET</h2>
          </div>
        </div>
        <!-- unSelect -->

        <!-- Select -->
        <div v-show="select1 == true" style="border-left: 8px solid #F28093;">
          <div style="align-items: center; width: 100%; margin-left:51px; margin-top:45px; display: grid; grid-template-columns: 15% 50% 35%">
            <img class="icon" style="width:35px;" src="@/assets/user/ticket-pink.png" >
            <h2 style="color:#F28093;" class="select">MY TICKET</h2>
            <img style="width:50px;" src="@/assets/user/TitleLeaves_Pink.png" >
          </div>
        </div>
        <!-- Select -->

        <!-- unSelect -->
        <div v-show="select2 == false" @click="Onclick2()">
          <div style="align-items: center; width: 100%; margin-left:59px; margin-top:45px; display: grid; grid-template-columns: 15% 85%">
            <img class="icon" style="width:28px;" src="@/assets/user/profile.white.png" >
            <h2 style="color:#FFFFFF;" class="select">MY ACCOUNT</h2>
          </div>
        </div>
        <!-- unSelect -->

        <!-- Select -->
        <div v-show="select2 == true" style="border-left: 8px solid #F28093;">
          <div style="align-items: center; width: 100%; margin-left:51px; margin-top:45px; display: grid; grid-template-columns: 15% 50% 35%">
            <img class="icon" style="width:28px;" src="@/assets/user/profile-pink.png" >
            <h2 style="color:#F28093;" class="select">MY ACCOUNT</h2>
            <img style="width:50px;" src="@/assets/user/TitleLeaves_Pink.png" >
          </div>
        </div>
        <!-- Select -->
        <div id="bottom">
            <!-- Mainpage -->
            <div>
                <div @click="backMain()" style="align-items: center; width: 100%; margin-left:59px; margin-top:45px; display: grid; grid-template-columns: 15% 85%">
                    <img class="icon" style="width:28px;" src="@/assets/user/home.png" >
                    <h2 style="color:#FFFFFF;" class="select">MAINPAGE</h2>
                </div>
            </div>
            <!-- Mainpage -->

            <!-- Logout -->
            <div>
                <div style="align-items: center; width: 100%; margin-left:59px; margin-top:45px; display: grid; grid-template-columns: 15% 85%">
                    <img class="icon" style="width:28px;" src="@/assets/user/exit.png" >
                    <h2 style="color:#FFFFFF;" class="select">LOG OUT</h2>
                </div>
            </div>
            <!-- Logout -->
        </div>
      </div>
      <!---- Menu Bar ---->
   
  </div>
</template>

<script>
export default {
    data(){
        return{
            select1: false,
            select2: true,
        }
    },
    methods:{
        Onclick1(){
            this.select1 = true;
            this.select2 = false;
            this.$emit("pageReturn",false)
        },
        Onclick2(){
            this.select1 = false;
            this.select2 = true;
            this.$emit("pageReturn",true)
        },
        backMain(){
            window.location.href ="/";
        },
    }

}
</script>

<style scoped>

  #Usermenu{
    box-shadow: 15px 0 15px -2px rgba(0,0,0,.20);
    z-index: 2;
    height: 100vh;
  }

  #menu-container{
    background-color:#312F71;
  }

  .profilepic{
    border-radius: 50%;
  }

  .nameSide{
    font-family: "CloudBold";
    font-size: 32px;
    letter-spacing: 2.24px;
    color: #FFFFFF;
    margin:0px 0px;
  }

  .emailSide{
    color: #F8B8B2;
    font-family: "CloudLight";
    font-size: 14px;
    letter-spacing: 0.98px;
    margin:0px 0px;
  }

  .select{
    font-size: 22px;
    letter-spacing: 2.2px;
    margin:0px;
    padding-top:3px;
    font-family: "CloudBold";
  }

  #bottom{
    margin-top:429px;
  }

</style>