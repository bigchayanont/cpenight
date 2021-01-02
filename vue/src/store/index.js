import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { auth } from './auth.module';
import { profile } from './user.module';

export default new Vuex.Store({
  state: {
    userInfo:[
      {
      id: "",
      email: null,
      password : "",
      accountType : "",
      authId : "",
      profilePic : "",
      firstName: null,
      lastName : null,
      nickName: null,
      birthday_day : "",
      birthday_month : "",
      birthday_year : "",
      classOf : "",
      phoneNumber : null,
      line : "",
      facebookAccount : "",
      organ : "",
      role : "",
      field : "",
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    profile
  }
});
