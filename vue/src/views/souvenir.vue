<template>
  <div id="souvenir">
      <a style="font-size:30px; padding-left:30px;" href="/">Back to main</a>
      <div class="row" style="padding-top:40px; padding-left:200px; padding-right:200px; display: grid; grid-template-columns: 50% 50%">
          <img style="padding-top:20px; padding-left:400px; width:150px;" src="@/assets/TestCatalog/fe71ebd7d4515a716c013c0d363e7f49.jpg">
          <div style="text-align:left;">
          <h1>{{item_data.item_name}}</h1>
          <p>฿ 250.00</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed viverra.</p>
          <div style="display: inline-block;">
              <label for="myCheck">Size:</label>
              <input type="checkbox" value="SS" v-model="item_selected.item_size" id="myCheck">
              <input type="checkbox" value="S" v-model="item_selected.item_size" id="myCheck">
              <input type="checkbox" value="M" v-model="item_selected.item_size" id="myCheck">
              <input type="checkbox" value="L" v-model="item_selected.item_size" id="myCheck">
              <input type="checkbox" value="XL" v-model="item_selected.item_size" id="myCheck">
          </div>
          <div style="margin-left:20px; display: inline-block;">
              <label for="myCheck">Color:</label>
              <input type="checkbox" id="myCheck">
              <input type="checkbox" id="myCheck">
          </div>
          <div style="margin-left:20px; display: inline-block;">
              <div id="field1">Quantity :
                <button type="button" id="sub" class="sub">-</button>
                <input type="number" id="1" value="1" min="1" max="3" />
                <button type="button" id="add" class="add">+</button>
            </div>
          </div>
      </div>
      </div>
      <div class="row" style="padding-top:40px; padding-left:200px; padding-right:200px;">
          <h1 style="margin-bottom:40px; text-align:center;">Other Product</h1>
          <div style="display: flex; justify-content: center; align-items: center;}">
              <div style="margin-left:20px; display: inline-block;">
                <img style="width:120px;" src="@/assets/TestCatalog/unnamed.jpg">
                <p>Item1</p>
                <p>฿ 500.00</p>
              </div>
              <div style="margin-left:100px; display: inline-block;">
                <img style="width:120px;" src="@/assets/TestCatalog/mlt3ud.png">
                <p>Item1</p>
                <p>฿ 500.00</p>
              </div>
              <div style="margin-left:100px; display: inline-block;">
                <img style="width:120px;" src="@/assets/TestCatalog/d9z04r.png">
                <p>Item1</p>
                <p>฿ 500.00</p>
              </div>
              <div style="margin-left:100px; display: inline-block;">
                <img style="width:120px;" src="@/assets/TestCatalog/1A1A435FFBB845CD9929EDCD0ADCBF14.jpg">
                <p>Item1</p>
                <p>฿ 500.00</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"souvenir",
    data() {
      return {
        item_data: {
          item_id:"PSS011",
          item_name:"Screen Shirt",
          item_price:"฿100.00",
          item_color:["Red","Blue"],
          item_description:"Screen Shirt Blue Size S",
          item_image:"",
        },
        item_selected:{
          item_id:"",
          item_size:[],
          item_color:""
        },
        /* checkData: {
          tickLimit: 1,
          ticks: [],
          boxes: [
            { value: 'first', checked: false, disabled: false },
            { value: 'second', checked: false, disabled: false },
            { value: 'third', checked: false, disabled: false },
            { value: 'fourth', checked: false, disabled: false },
            { value: 'fifth', checked: false, disabled: false },
          ],
        }, */
      }
    },
    methods: {
      /* updateBoxes() {
      // update the number of ticks...
      this.ticks = this.boxes.filter(box => box.checked);

      // re-enable checkboxes if back under the limit...
      if (this.ticks.length < this.tickLimit) {
        this.boxes.forEach(box => {
          if (box.checked == false) box.disabled = false;
        });
      } */
    }
    
}
</script>

<style scoped>
</style>