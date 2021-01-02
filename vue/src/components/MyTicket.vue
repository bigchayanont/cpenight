<template>
  <div id ="myTicket">
    <div class="row" style="min-height: 100vh; display: grid; grid-template-columns: 20% 80%">
        <div id ="columnLeft">
          <div id ="callManagement">
            <h1 style="font-size:70px;">Manage</h1>
            <div id= "MyTicket" style="margin-bottom:30px;">
              <button style="padding:10px; font-size:30px;" >My Ticket</button>
            </div>
            <div id= "MyPurchase" style="margin-bottom:30px;"> 
              <button style="padding:10px; font-size:30px;" @click="Purchase()">My Purchase</button>
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
          <div id="myTicket">
            <h1>MY TICKET</h1>
            <div id="tickerDetails">
              <h3>Ticket Details</h3>
              <hr>
              <div id="info" style="margin-top: 40px;">
                <p>Name</p>
                <p>Ticket Type</p>
                <p>Price</p>
                <p>Date Bought</p>
              </div>
              <div id="otherDetails" style="font-size: 20px; margin: 200px">
                <h1>For other details</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name:"myTicket",
    methods: {
    Account(){
      this.$emit("pageReturn",3)
    },
    Purchase(){
      this.$emit("pageReturn",2)
    }
  },
}
</script>

<style scoped>

</style>