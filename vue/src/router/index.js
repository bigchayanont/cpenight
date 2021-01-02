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
import userManagement from "../views/userManagement.vue";
import MyAccount from "@/components/MyAccount.vue";
import MyTicket from "@/components/MyTicket.vue";
import MyPurchase from "@/components/MyPurchase.vue";
import cart from "../views/cart.vue";
import souvenir from "../views/souvenir.vue";
import Shipping from "@/components/Shipping.vue"
import newMainpage from "../views/newMainpage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
    path: "/register1:user",
    name: "Register1",
    component: Register1
  },
  {
    path: "/register2:user",
    name: "Register2",
    component: Register2
  },
  {
    path: "/register3:user",
    name: "Register3",
    component: Register3
  },
  {
    path: "/register4:user",
    name: "Register4",
    component: Register4
  },
  {
    path: "/register5:user",
    name: "Register5",
    component: Register5
  },
  {
    path: "/userManagement",
    name: "userManagement",
    component: userManagement
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
    path: "/mypurchase",
    name: "mypurchase",
    component: MyPurchase
  },
  {
    path: "/cart",
    name: "cart",
    component: cart
  },
  {
    path: "/souvenir",
    name: "souvenir",
    component: souvenir
  },
  {
    path: "/shipping",
    name: "shipping",
    component: Shipping
  },
  {
    path: "/newmain",
    name: "newmain",
    component: newMainpage
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
