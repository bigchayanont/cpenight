import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import VueParticles from "vue-particles"

Vue.config.productionTip = false;
Vue.use(VueParticles)


Vue.config.productionTip = false;
export const bus = new Vue();

Vue.use(VeeValidate);
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
