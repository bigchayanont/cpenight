<template>
 <div id="usermanage" class="container" style=" width: 100%; display: grid; grid-template-columns: 20% 80%">
       <Usermenu style="z-index:999;" @pageReturn="pageReturn"/>
    <div>
      <div v-if="select1 == false">
        <MyTicket/>
      </div>
      <div v-else>
        <div v-if="select2 == true">
          <MyAccount @selectReturn="selectReturn"/>  
        </div>
        <div v-else>
          <ChangePassword @selectReturn="selectReturn"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Usermenu from "@/components/Usermenu.vue"
import MyAccount from "@/components/MyAccount.vue"
import MyTicket from "@/components/MyTicket.vue"
import ChangePassword from "@/components/ChangePassword.vue"

export default {
    name: "userManagement",
    
    components: {
        Usermenu,
        MyAccount,
        MyTicket,
        ChangePassword,
    },
    data (){
      return{
        select1: true,
        select2: true,
      }
    },
    methods: {
        pageReturn(value){
        this.select1 = value
        },
        selectReturn(value){
        this.select2 = value
        }
    },
}
</script>

<style scoped>
  #usermanage{
    height: 100vh;
    overflow-y:hidden ;
  }
</style>