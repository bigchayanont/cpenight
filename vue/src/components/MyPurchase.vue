<template>
  <div id ="myPurchase">
     <div class="row" style="min-height: 100vh; display: grid; grid-template-columns: 20% 80%">
        <div id ="columnLeft">
          <div id ="callManagement">
            <h1 style="font-size:70px;">Manage</h1>
            <div id= "MyTicket" style="margin-bottom:30px;">
              <button style="padding:10px; font-size:30px;" @click="Ticket()">My Ticket</button>
            </div>
            <div id= "MyPurchase" style="margin-bottom:30px;"> 
              <button style="padding:10px; font-size:30px;">My Purchase</button>
            </div>
            <div id= "MyAccount" style="margin-bottom:500px;">
              <button style="padding:10px; font-size:30px;" @click="Account()">My Account</button>
            </div>
            <div id= "Mainpage">
              <a style="padding:10px; font-size:30px; text-decoration: none;" href="/">MAINPAGE</a>
            </div>
          </div>
        </div>

        <div id ="columnRight" style="margin-left: 100px; margin-top: 50px;">
          <h1>MY PURCHASES</h1>
          <div id="top">
              <a @click="select = 1" style="padding-Right: 20px;">All orders</a>
              <a @click="select = 2" style="padding-Right: 20px;">To ship</a>
              <a @click="select = 3" style="padding-Right: 20px;">To Receive</a>
              <hr>
          </div>
          <div id="bottom">
            <div id="order" v-if="select == 1">
              <div class="orderNumber">
                <div>
                  <h3>Order Number #C011</h3>
                  <p>23 DEC 2020 23:43:01</p>
                  <hr>
                </div>
                <div style="display: grid; grid-template-columns: 70% 30%">
                  <div style="display: flex; justify-content: left; align-items: top;">
                    <img style="width:150px; display: inline-block;" src="@/assets/TestCatalog/unnamed.jpg">
                    <h3 style="margin-left: 10px;">Lorem ipsum</h3>
                   </div>
                     <h3>฿ 500</h3>
                </div>
                <div style="display: grid; grid-template-columns: 70% 30%">
                  <div style="display: flex; justify-content: left; align-items: top;">
                    <img style="width:150px; display: inline-block;" src="@/assets/TestCatalog/1A1A435FFBB845CD9929EDCD0ADCBF14.jpg">
                    <h3 style="margin-left: 10px;">Lorem ipsum</h3>
                   </div>
                     <h3>฿ 500</h3>
                </div>
                <h1 style="display: inline-block; margin-right: 10px;">Status :</h1>
                <h1 style="display: inline-block; color: #1683A3;">Wait for shipping</h1>
                <h1 style="display: inline-block; margin-left: 500px; color: #F28093;">Total : ฿ 1000</h1>
                <hr>
              </div>
              <div>
                  <h3>Order Number #C002</h3>
                  <p>23 DEC 2020 23:43:01</p>
                  <hr>
                </div>
                <div style="display: grid; grid-template-columns: 70% 30%">
                  <div style="display: flex; justify-content: left; align-items: top;">
                    <img style="width:150px; display: inline-block;" src="@/assets/TestCatalog/unnamed.jpg">
                    <h3 style="margin-left: 10px;">Lorem ipsum</h3>
                   </div>
                     <h3>฿ 500</h3>
                </div>
                <h1 style="display: inline-block; margin-right: 10px;">Status :</h1>
                <h1 style="display: inline-block; color: #2DA32D;">Thailand-post RB435672435TH</h1>
                <h1 style="display: inline-block; margin-left: 320px; color: #F28093;">Total : ฿ 500</h1>
            </div>
            <div id="shipping" v-if="select == 2">
              <div class="orderNumber">
                <div>
                  <h3>Order Number #C011</h3>
                  <p>23 DEC 2020 23:43:01</p>
                  <hr>
                </div>
                <div style="display: grid; grid-template-columns: 70% 30%">
                  <div style="display: flex; justify-content: left; align-items: top;">
                    <img style="width:150px; display: inline-block;" src="@/assets/TestCatalog/unnamed.jpg">
                    <h3 style="margin-left: 10px;">Lorem ipsum</h3>
                   </div>
                     <h3>฿ 500</h3>
                </div>
                <div style="display: grid; grid-template-columns: 70% 30%">
                  <div style="display: flex; justify-content: left; align-items: top;">
                    <img style="width:150px; display: inline-block;" src="@/assets/TestCatalog/1A1A435FFBB845CD9929EDCD0ADCBF14.jpg">
                    <h3 style="margin-left: 10px;">Lorem ipsum</h3>
                   </div>
                     <h3>฿ 500</h3>
                </div>
                <h1 style="display: inline-block; margin-right: 10px;">Status :</h1>
                <h1 style="display: inline-block; color: #1683A3;">Wait for shipping</h1>
                <h1 style="display: inline-block; margin-left: 500px; color: #F28093;">Total : ฿ 1000</h1>
                <hr>
              </div>
            </div>
            <div id="receive" v-if="select == 3">
              <div class="orderNumber">
                <div>
                  <div>
                    <h3>Order Number #C002</h3>
                    <p>23 DEC 2020 23:43:01</p>
                    <hr>
                  </div>
                  <div style="display: grid; grid-template-columns: 70% 30%">
                    <div style="display: flex; justify-content: left; align-items: top;">
                      <img style="width:150px; display: inline-block;" src="@/assets/TestCatalog/unnamed.jpg">
                      <h3 style="margin-left: 10px;">Lorem ipsum</h3>
                    </div>
                      <h3>฿ 500</h3>
                  </div>
                  <h1 style="display: inline-block; margin-right: 10px;">Status :</h1>
                  <h1 style="display: inline-block; color: #2DA32D;">Thailand-post RB435672435TH</h1>
                  <h1 style="display: inline-block; margin-left: 320px; color: #F28093;">Total : ฿ 500</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"myPurchase",
  data() {
    return {
      select: 1,
    }
  },
  methods: {
    Ticket(){
      this.$emit("pageReturn",1)
    },
    Account(){
      this.$emit("pageReturn",3)
    }
  },
}
</script>

<style scoped>

</style>