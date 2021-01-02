<template>
  <div>
      <vue-navigation-bar 
        :options="navbarOptions" 
        style=
        "
        padding-left:240px; 
        padding-right:240px; 
        padding-top:30px; 
        padding-bottom:30px;
        background-color:#393679;
        "
      />
  </div>
</template>

<script>
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import Vue from 'vue'
// import the library
import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);
export default {
    name:"navbar",
      data() {
        return {
          navbarOptions: {
            elementId: "main-navbar",
            isUsingVueRouter: true,
            mobileBreakpoint: 992,
            brandImagePath: "./",
            brandImage: require("@/assets/Navbar/Nav_Logo.png"),
            brandImageAltText: "brand-image",
            collapseButtonOpenColor: "#661c23",
            collapseButtonCloseColor: "#661c23",
            showBrandImageInMobilePopup: true,
            ariaLabelMainNav: "Main Navigation",
            tooltipAnimationType: "shift-away",
            tooltipPlacement: "bottom",
            menuOptionsLeft: [
              {
                type: "link",
                text: "Home",
                path: "/",
              },
              {
                type: "link",
                text: "About",
                path: "/",
              },
              {
                type: "link",
                text: "Ticket",
                path: "/",
              },
              {
                type: "link",
                text: "Souvenir",
                path: "/",
              },
              {
                type: "link",
                text: "FAQs",
                path: "/",
              },
              {
                type: "link",
                text: "Contact",
                path: "/",
              },
            ],
            menuOptionsRight: [
              {
                type: "link",
                text: "Shop",
                path: "/souvenir",
              },
              {
                type: "link",
                text: "Log In",
                path: "/login",
              },
              {
                type: "link",
                text: "EN | TH",
                path: "/",
              },
            ]
          }
        }
    },
}
</script>

<style>
    @import "/path/to/node_modules/vue-navigation-bar.css";

    .vnb-image {
    max-width: 100%;
    height: auto;
    }

    .vnb__brand-image-wrapper__link__image {
    max-height: 64px;
    }

    .vnb__menu-options__option__link {
    cursor: pointer;
    color: #FFFFFF;
    transition: color 0.2s ease-in;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font: normal normal bold 22px/30px Cloud;
}

    
</style>