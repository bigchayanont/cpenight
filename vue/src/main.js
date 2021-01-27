import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import VueParticles from "vue-particles"
import VueI18n from 'vue-i18n'
import messages from './locales'

Vue.config.productionTip = false;
Vue.use(VueParticles)
Vue.use(VueI18n)


Vue.config.productionTip = false;
export const bus = new Vue();

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages 
})


Vue.use(VeeValidate);
Vue.use(Vuex);

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
