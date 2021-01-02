<template>
  <div id="cart">
    <div id="cardPage" v-if="select == 1">
        <a style="font-size:30px; padding-left:30px;" href="/">Back to main</a>
        <div class="row" style="padding-top:40px; padding-left:200px; padding-right:200px; display: grid; grid-template-columns: 60% 40%">
            <div style="margin-right:20px;">
                <h1>List of Products in the basket</h1>
                <hr style="margin-bottom:0px; margin-top:0px; height:2px;border:none;color:#000000;background-color:#000000;" />
                <div style="text-align:right;">
                    <p style="display: inline-block;">Unit Price</p>
                    <p style="margin-left:20px; display: inline-block;">Qty.</p>
                    <p style="margin-left:20px; margin-right:40px; display: inline-block;">Total</p>
                </div>
                <hr style="margin-bottom:30px; margin-top:0px; height:2px;border:none;color:#000000;background-color:#000000;" />
                <!-- Item list -->
                <div class="row" style="display: grid; grid-template-columns: 30% 70%">
                    <div style="display: flex; justify-content: left; align-items: center;">
                        <img style="width:120px; display: inline-block;" src="@/assets/TestCatalog/1A1A435FFBB845CD9929EDCD0ADCBF14.jpg">
                        <h1 style="margin-left:30px; display: inline-block;">Item 1</h1>
                    </div>
                    <div align="right" style="display: flex; justify-content: flex-end; align-items: center;">
                        <p>฿ 250.00</p>
                        <div id="field1" style="margin-left:20px;">
                            <button type="button" id="sub" class="sub">-</button>
                            <input type="number" id="1" value="1" min="1" max="3" />
                            <button type="button" id="add" class="add">+</button>
                        </div>
                        <p style="margin-left:20px;">฿ 500</p>
                        <p style="margin-left:20px;">x</p>
                    </div>
                </div>
                <!--End Item list-->
                <!-- Item list -->
                <div class="row" style="margin-top:20px; display: grid; grid-template-columns: 30% 70%">
                    <div style="display: flex; justify-content: left; align-items: center;">
                        <img style="width:120px; display: inline-block;" src="@/assets/TestCatalog/d9z04r.png">
                        <h1 style="margin-left:30px; display: inline-block;">Item 1</h1>
                    </div>
                    <div align="right" style="display: flex; justify-content: flex-end; align-items: center;">
                        <p>฿ 250.00</p>
                        <div id="field1" style="margin-left:20px;">
                            <button type="button" id="sub" class="sub">-</button>
                            <input type="number" id="1" value="1" min="1" max="3" />
                            <button type="button" id="add" class="add">+</button>
                        </div>
                        <p style="margin-left:20px;">฿ 500</p>
                        <p style="margin-left:20px;">x</p>
                    </div>
                </div>
                <!--End Item list-->
                <!-- Item list -->
                <div class="row" style="margin-bottom:20px; margin-top:20px; display: grid; grid-template-columns: 30% 70%">
                    <div style="display: flex; justify-content: left; align-items: center;">
                        <img style="width:120px; display: inline-block;" src="@/assets/TestCatalog/mlt3ud.png">
                        <h1 style="margin-left:30px; display: inline-block;">Item 1</h1>
                    </div>
                    <div align="right" style="display: flex; justify-content: flex-end; align-items: center;">
                        <p>฿ 250.00</p>
                        <div id="field1" style="margin-left:20px;">
                            <button type="button" id="sub" class="sub">-</button>
                            <input type="number" id="1" value="1" min="1" max="3" />
                            <button type="button" id="add" class="add">+</button>
                        </div>
                        <p style="margin-left:20px;">฿ 500</p>
                        <p style="margin-left:20px;">x</p>
                    </div>
                </div>
                <!--End Item list-->
                <hr style="margin-bottom:30px; margin-top:0px; height:2px;border:none;color:#000000;background-color:#000000;" />
            </div>
            <div style="margin-left:20px;">
                <h1>Shipping Method</h1>
                <hr style="margin-bottom:0px; margin-top:0px; height:2px;border:none;color:#000000;background-color:#000000;" />
                <div class="row" style="display: grid; grid-template-columns: 50% 50%">
                    <p style="display: flex; justify-content: flex-start; align-items: center;">Type</p>
                    <p style="display: flex; justify-content: flex-end; align-items: center;">Price</p>
                </div>
                <hr style="margin-bottom:0px; margin-top:0px; height:2px;border:none;color:#000000;background-color:#000000;" />
            <!--Ways-->
            <div class="row" style="display: grid; grid-template-columns: 70% 30%">
                <div style="display: flex; justify-content: flex-start; align-items: center;">
                    <input style="padding:10px;" type="checkbox" value="XL" id="myCheck">
                    <p style="margin-right:0px; margin-top:0px; margin-bottom:0px; margin-left:20px;">Recieved at Department</p>
                </div>
                <p style="margin-right:0px; margin-top:10px; margin-bottom:0px; display: flex; justify-content: flex-end; align-items: center;">FREE</p>
            </div>
            <!---->
            <!--Ways-->
            <div class="row" style="display: grid; grid-template-columns: 70% 30%">
                <div style="display: flex; justify-content: flex-start; align-items: center;">
                    <input style="padding:10px;" type="checkbox" value="XL" id="myCheck">
                    <p style="margin-right:0px; margin-top:0px; margin-bottom:0px; margin-left:20px;">Recieved at The Event</p>
                </div>
                <p style="margin-right:0px; margin-top:10px; margin-bottom:0px; display: flex; justify-content: flex-end; align-items: center;">FREE</p>
            </div>
            <!---->
            <!--Ways-->
            <div class="row" style="display: grid; grid-template-columns: 70% 30%">
                <div style="display: flex; justify-content: flex-start; align-items: center;">
                    <input style="padding:10px;" type="checkbox" value="XL" id="myCheck">
                    <p style="margin-left:20px; margin-right:0px; margin-top:0px; margin-bottom:0px;">Registered</p>
                </div>
                <p style="display: flex; margin-right:0px; margin-top:10px; margin-bottom:0px; justify-content: flex-end; align-items: center;">฿60.00</p>
            </div>
            <!---->
            <!--Ways-->
            <div class="row" style="display: grid; grid-template-columns: 70% 30%">
                <div style="display: flex; justify-content: flex-start; align-items: center;">
                    <input style="padding:10px;" type="checkbox" value="XL" id="myCheck">
                    <p style="margin-right:0px; margin-top:0px; margin-bottom:0px; margin-left:20px;">EMS</p>
                </div>
                <p style="margin-right:0px; margin-top:10px; margin-bottom:0px; display: flex; justify-content: flex-end; align-items: center;">฿90.00</p>
            </div>
            <!---->

            <div>
                <h1>Order Summary</h1>
                <hr style="margin-bottom:0px; margin-top:0px; height:2px;border:none;color:#000000;background-color:#000000;" />
                <!--Ways-->
                <div class="row" style="display: grid; grid-template-columns: 70% 30%">
                    <div style="display: flex; justify-content: flex-start; align-items: center;">
                        <p style="margin-right:0px; margin-top:0px; margin-bottom:0px; margin-left:0px;">ITEM(4)</p>
                    </div>
                    <p style="margin-right:0px; margin-top:10px; margin-bottom:0px; display: flex; justify-content: flex-end; align-items: center;">฿2750.00</p>
                </div>
                <!---->
                <div>
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
                    <hr style="margin-bottom:0px; margin-top:10px; height:2px;border:none;color:#000000;background-color:#000000;" />
                    <div>
                        <div class="row" style="display: grid; grid-template-columns: 70% 30%">
                            <div style="display: flex; justify-content: flex-start; align-items: center;">
                            <p style="margin-top:10px;">ORDER TOTAL</p>
                            </div>
                            <div style="display: flex; justify-content: flex-end; align-items: center;">
                                <p style="margin-top:10px;">฿2810.00</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Button-->
                    <div class="row" style="display: grid; grid-template-columns: 50% 50%">
                        <button @click ="onClick()" style="margin-right:30px; text-transform: uppercase;">Continue Shopping</button>
                        <button @click ="select = 2" style="margin-left:30px; text-transform: uppercase;">Proceed to checkout</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div id="shippingPage" v-if="select == 2">
        <Shipping @pageReturn="pageReturn"/>
    </div>
  </div>
</template>

<script>
import Shipping from "@/components/Shipping.vue"

export default {
    name:"cart",
    components:{
        Shipping,
    },
    data(){
        return{
        select: 1,
        }
    },
    methods: {
        onClick(){
            window.location.href ="/souvenir"
        },
        pageReturn(value){
        this.select = value
        }
    },
}
</script>

<style scoped>
    p{
        font-size:25px;
    }
    input[type=checkbox] {
    transform: scale(2);
    -ms-transform: scale(2);
    -webkit-transform: scale(2);
    padding: 10px;
}
</style>