<template>
  <div>
    <AcNavbar @pageReturn="pageReturn" />
    <div id="usermanage">
      <Usermenu style="z-index: 50" @pageReturn="pageReturn" />
      <div>
        <div v-if="select1 == false">
          <MyTicket />
        </div>
        <div v-else>
          <div v-if="select2 == true">
            <MyAccount @selectReturn="selectReturn" />
          </div>
          <div v-else>
            <ChangePassword @selectReturn="selectReturn" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Usermenu from "@/components/Usermenu.vue";
import MyAccount from "@/components/MyAccount.vue";
import MyTicket from "@/components/MyTicket.vue";
import ChangePassword from "@/components/ChangePassword.vue";
import AcNavbar from "@/components/accountNav.vue";

export default {
  name: "userManagement",

  components: {
    Usermenu,
    MyAccount,
    MyTicket,
    ChangePassword,
    AcNavbar,
  },
  data() {
    return {
      select1: true,
      select2: true,
    };
  },
  methods: {
    pageReturn(value) {
      this.select1 = value;
    },
    selectReturn(value) {
      this.select2 = value;
    },
  },
};
</script>

<style scoped>
/* #usermanage{
    height: 100vh;
    overflow-y:hidden ;
  } */
#usermanage {
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
}
@media screen and (max-width: 1024px) {
  #usermanage {
    width: 100%;
    display: block;
    margin-top: 80px;
  }
}
</style>