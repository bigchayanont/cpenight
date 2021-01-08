import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { auth } from "./auth.module";
import { profile } from "./user.module";

export default new Vuex.Store({
  state: {
    accountTypeCheck: "",
    userInfo: [
      {
        id: null,
        email: null,
        password: null,
        accountType: null,
        authId: null,
        profilePic: null,
        firstName: null,
        lastName: null,
        nickName: null,
        birthday_day: null,
        birthday_month: null,
        birthday_year: null,
        classOf: null,
        phoneNumber: null,
        line: null,
        facebookAccount: null,
        organ: null,
        role: null,
        field: null,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    profile,
  },
});
