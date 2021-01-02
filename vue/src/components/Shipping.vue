<template>
  <div id="shipping">
      <a style="font-size:30px; padding-left:30px;" href="/">Back to main</a>
      <div class="row" style="padding-top:40px; padding-left:200px; padding-right:200px; display: grid; grid-template-columns: 60% 40%">
          <!-- Left -->
          <div style="margin-right:20px;">
              <h1>Shipping Details</h1>
              <hr style="margin-bottom:0px; margin-top:0px; height:2px;border:none;color:#000000;background-color:#000000;" />
                <div class="row" style="padding-top:40px; padding-left:60px; padding-right:60px; display: grid; grid-template-columns: 30% 30% 40%">
                    <!-- Title -->
                    <div>
                        <h3>SHIPPING METHOD</h3>
                        <h3>SHIPPING ADDRESS*</h3>
                    </div>
                    <!-- Detail -->
                    <div>
                        <h3>Registered</h3>
                        <h3>No Shipping Address</h3>
                    </div>
                    <!-- Button -->
                    <div style="margin-top:140px; display: flex; justify-content: flex-end; align-items: center;">
                        <button class="button">ADD ADDRESS</button>
                    </div>
                </div>

                <h1 style="margin-top:150px; margin-bottom:0px;">Payment Method</h1>
                <h1 style="font-size:20px;">BANK TRANSFER</h1>
                <hr style="margin-bottom:0px; margin-top:0px; height:2px;border:none;color:#000000;background-color:#000000;" />
                    <h3 style="padding-left:60px; margin-top:40px; text-decoration:underline;">TRANSFER DETAILS</h3>
                    <div class="row" style="padding-left:60px; padding-right:60px; display: grid; grid-template-columns: 30% 30% 40%">
                        <!-- Title -->
                        <div>
                            <h3>BANK NAME</h3>
                            <h3>ACCOUNT NAME</h3>
                            <h3>ACCOUNT NUMBER</h3>
                        </div>
                        <!-- Detail -->
                        <div>
                            <h3>Lorem Imsum</h3>
                            <h3>Cpenight2021</h3>
                            <h3>203-12349-0092</h3>
                        </div>
                        <!-- Button -->
                        <div style="margin-top:30px;">
                            <button style="width:100%;" class="button">PAY with QR code</button>
                            <p style="text-align:left;">NOTE : Please upload the transfer slip below otherwise you cannot place the order</p>
                        </div>
                    </div>
          </div>
          <!-- Left -->

          <!-- Right -->
          <div style="margin-left:20px;">
              <h1>Order Summary</h1>
              <hr style="margin-bottom:0px; margin-top:0px; height:2px;border:none;color:#000000;background-color:#000000;" />
              <!--List-->
              <div class="row" style="margin-top:20px; display: grid; grid-template-columns: 50% 50%">
                <p style="display: flex; justify-content: flex-start; align-items: center;">LOREM IPSUM</p>
                <p style="display: flex; justify-content: flex-end; align-items: center;">฿250.00</p>
              </div>
              <!--List-->
              <!--List-->
              <div class="row" style="display: grid; grid-template-columns: 50% 50%">
                <p style="display: flex; justify-content: flex-start; align-items: center;">LOREM IPSUM</p>
                <p style="display: flex; justify-content: flex-end; align-items: center;">฿250.00</p>
              </div>
              <!--List-->
              <!--List-->
              <div class="row" style="display: grid; grid-template-columns: 50% 50%">
                <p style="display: flex; justify-content: flex-start; align-items: center;">DOLOR SIT AMET (XS-RED)</p>
                <p style="display: flex; justify-content: flex-end; align-items: center;">฿750.00</p>
              </div>
              <!--List-->
              <!--List-->
              <div class="row" style="display: grid; grid-template-columns: 50% 50%">
                <p style="display: flex; justify-content: flex-start; align-items: center;">SED ULLAMCORPER</p>
                <p style="display: flex; justify-content: flex-end; align-items: center;">฿1500.00</p>
              </div>
              <!--List-->
              <hr style="margin-bottom:0px; margin-top:20px; height:2px;border:none;color:#000000;background-color:#000000;" />
              <!--List-->
              <div class="row" style="display: grid; grid-template-columns: 50% 50%">
                <p style="display: flex; justify-content: flex-start; align-items: center;">ITEM(4)</p>
                <p style="display: flex; justify-content: flex-end; align-items: center;">฿2750.00</p>
              </div>
              <!--List-->
              <!--Ways-->
                <div>
                    <div class="row" style="display: grid; grid-template-columns: 70% 30%">
                        <div style="align-items: center;">
                            <p style="margin-right:0px; margin-top:10px; margin-bottom:0px; margin-left:0px;">DELIVERY COST</p>
                            <p style="margin-bottom:0px; margin-top:5px; margin-left:0px;">type : registered</p>
                        </div>
                        <p style="margin-right:0px; margin-top:10px; margin-bottom:0px; display: flex; justify-content: flex-end;">฿60.00</p>
                    </div>
                </div>
                <!---->
                <hr style="margin-bottom:0px; margin-top:20px; height:2px;border:none;color:#000000;background-color:#000000;" />
                <!--List-->
                <div class="row" style="display: grid; grid-template-columns: 50% 50%">
                    <p style="display: flex; justify-content: flex-start; align-items: center;">ORDER TOTAL</p>
                    <p style="display: flex; justify-content: flex-end; align-items: center;">฿2810.00</p>
                </div>
                <!--List-->

                <!--Bottom Section-->
                <div style="margin-top:200px;">
                    <h3>UPLOAD THE SLIP HERE*</h3>
                    <button style="width:100%; padding-top:33px; padding-bottom:33px; ">ADD FILE</button>
                </div>
                <!--Bottom Section-->
                <!-- Button-->
                <div class="row" style="margin-top:30px; display: grid; grid-template-columns: 50% 50%">
                    <button @click="onClick()" style="margin-right:30px; text-transform: uppercase;">Back to cart</button>
                    <button style="margin-left:30px; text-transform: uppercase;">Place order</button>
                </div>
                <!-- Button-->
          </div>
          <!-- Right -->
      </div>
  </div>
</template>

<script>
export default {
    name:"shipping",
    methods: {
    onClick() {
      this.$emit("pageReturn",1)
    }
  },
}
</script>

<style scoped>
    .button{
        padding-top:15px;
        padding-bottom: 15px;
        padding-left:30px;
        padding-right: 30px;
    }

    p{
        font-size:20px;
        margin-top:10px;
        margin-bottom: 0px;
    }
</style>