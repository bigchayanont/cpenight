<template>
  <div id="mainpage">
      <Navbar/>
      <!-- First Section-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div id="firstsection">
          <img style="height:215px;" src="@/assets/Navbar/Landing_Logo.png">
          <h3 style="margin-top:40px; display: inline-block;" id="nighttomeet">Night to meet you</h3>
          <h3 style="margin-left:35px; display: inline-block;" id="year">2021</h3>
          <h3 style="margin-top:10px; font-family:'CloudLight'; font-size: 40px; Cloud; color: #F8B8B2; " >ยินดีที่ได้กลับมาพบกัน...</h3>
        <div class="row" style="margin-top:30px; display: grid; grid-template-columns: 40% 60%">
            <div >
                <h3 style="margin-top:25px; font-size: 55px; letter-spacing: 5.5px; font-family:'Cloud'; color: #FFFFFF;">20 MARCH 2021</h3>
                <p style="margin-top:10px; margin-bottom:0px; font-size:30px; letter-spacing: 1.05px; font-family:'CloudLight'; color: #FFFFFF; opacity: 1;">The Cavalry Club 19:00 - 23:00 น.</p>
                <div>
                    <button id="nextButton" @click="checkRegister1()">BUY TICKET NOW<i style="align:center; padding-left:20px;" class="fa fa-arrow-right"></i></button>
                </div>
            </div>
            
            <!-- Countdown -->
            <div style="text-align:center;">
                <h3 style="font-size:44px; margin-top:27px; letter-spacing: 4.4px; color: #FFFFFF; opacity: 0.7; font-family:'CloudBold';">COUNTDOWN</h3>
            </div>
        </div>
      </div>
      <!-- First Section-->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    name:"mainpage",
    components:{
        Navbar
    }
}
</script>

<style scoped>
    h3{
        margin-top:0px;
        margin-bottom: 0px;
    }
    #firstsection{
        padding-top: 150px;
        padding-left: 250px;
        padding-right: 250px;
        padding-bottom:180px ;
    }
    #mainpage{
        background-color: #292668;
    }
    #nighttomeet{
        font-size: 40px;
        font: normal normal 300 55px/76px Cloud;
        color: #FFFFFF;
        letter-spacing: 5.5px;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #FFFFFF;
    }
    #year{
        font-size: 40px;
        font: normal normal 300 55px/76px Cloud;
        color: #FFFFFF;
        letter-spacing: 5.5px;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #F8B8B2;
    }
    #nextButton{
    color: #FFFFFF;
    background:#F28093;
    border: none;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 23px;
    letter-spacing: 2.3px;
    font-family: "CloudBold";
    margin-left: 0px;
    margin-top:30px;
    }
</style>