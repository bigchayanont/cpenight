import Vue from "vue";
import VueRouter from "vue-router";
import Mainpage from "../views/Mainpage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Register1 from "@/components/Register1.vue";
import Register2 from "@/components/Register2.vue"
import Register3 from "@/components/Register3.vue";
import Register4 from "@/components/Register4.vue";
import Register5 from "@/components/Register5.vue";
import profile from "../views/profile.vue";
import MyAccount from "@/components/MyAccount.vue";
import MyTicket from "@/components/MyTicket.vue";
import souvenir from "../views/souvenir.vue";
import newMainpage from "../views/newMainpage.vue"
import backup from "@/components/backup.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/mainpage",
    name: "Mainpage",
    component: Mainpage
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/register1",
    name: "Register1",
    component: Register1
  },
  {
    path: "/register2",
    name: "Register2",
    component: Register2
  },
  {
    path: "/register3",
    name: "Register3",
    component: Register3
  },
  {
    path: "/register4",
    name: "Register4",
    component: Register4
  },
  {
    path: "/register5",
    name: "Register5",
    component: Register5
  },
  {
    path: "/profile",
    name: "profile",
    component: profile
  },
  {
    path: "/myaccount",
    name: "myaccount",
    component: MyAccount
  },
  {
    path: "/myticket",
    name: "myticket",
    component: MyTicket
  },
  {
    path: "/souvenir",
    name: "souvenir",
    component: souvenir
  },
  {
    path: "/",
    name: "newmain",
    component: newMainpage
  },
  {
    path: "/backup",
    name: "backup",
    component: backup
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;