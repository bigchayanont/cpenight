<template>
  <div id="Usermenu">
    <!---- Menu Bar ---->
    <div id="menu-container" style="min-height: 100vh">
      <!-- Name / Email -->
      <div style="padding-left: 59px; padding-top: 40px">
        <img class="profilepic" :src="image" />
        <h1
          style="margin-top: 15px; text-transform:capitalize;"
          class="nameSide"
        >{{ display.firstName }}</h1>
        <h1 style="text-transform:capitalize;" class="nameSide">{{ display.lastName }}</h1>
        <h3 style="margin-top: 5px" class="emailSide">{{ display.email }}</h3>
      </div>
      <!-- Name / Email -->

      <!-- unSelect -->
      <div style="cursor: pointer;" v-show="select1 == false" @click="Onclick1()">
        <div
          style="
            align-items: center;
            width: 100%;
            margin-left: 59px;
            margin-top: 35px;
            display: flex;
            align-items: center;
          "
        >
          <img class="icon" style="width: 23px;" src="@/assets/user/ticket-white.png" />
          <h2 style="color: #ffffff; text-transform: uppercase;" class="select">{{$t('myAccount.myTicket')}}</h2>
        </div>
      </div>
      <!-- unSelect -->

      <!-- Select -->
      <div v-show="select1 == true" style="border-left: 8px solid #f28093; cursor: default;">
        <div
          style="
            align-items: center;
            width: 100%;
            margin-left: 51px;
            margin-top: 35px;
            display: flex;
            align-items: center;
          "
        >
          <img class="icon" style="width: 23px" src="@/assets/user/ticket-pink.png" />
          <h2 style="color: #f28093; text-transform: uppercase;" class="select">{{$t('myAccount.myTicket')}}</h2>
          <img
            class="leaves"
            style="padding-left: 20px; width: 35px"
            src="@/assets/user/TitleLeaves_Pink.png"
          />
        </div>
      </div>
      <!-- Select -->

      <!-- unSelect -->
      <div style="cursor: pointer;" v-show="select2 == false" @click="Onclick2()">
        <div
          style="
            align-items: center;
            width: 100%;
            margin-left: 59px;
            margin-top: 25px;
            display: flex;
            align-items: center;
          "
        >
          <img class="icon" style="width: 23px" src="@/assets/user/profile.white.png" />
          <h2 style="color: #ffffff; text-transform: uppercase;" class="select">{{$t('myAccount.myAccount')}}</h2>
        </div>
      </div>
      <!-- unSelect -->

      <!-- Select -->
      <div v-show="select2 == true" style="border-left: 8px solid #f28093; cursor: default;">
        <div
          style="
            align-items: center;
            width: 100%;
            margin-left: 51px;
            margin-top: 25px;
            display: flex;
            align-items: center;
          "
        >
          <img class="icon" style="width: 23px" src="@/assets/user/profile-pink.png" />
          <h2 style="color: #f28093; text-transform: uppercase;" class="select">{{$t('myAccount.myAccount')}}</h2>
          <img
            class="leaves"
            style="padding-left: 20px; width: 35px"
            src="@/assets/user/TitleLeaves_Pink.png"
          />
        </div>
      </div>
      <!-- Select -->
      <div id="bottom">
        <!-- Mainpage -->
        <div>
          <router-link to="/">
            <div
              style="
                align-items: center;
                width: 100%;
                margin-left: 59px;
                display: flex;
                align-items: center;
                cursor: pointer;
              "
            >
              <img class="icon" style="width: 23px; margin-top:-3px;" src="@/assets/user/home.png" />
              <h2 style="color: #ffffff; text-transform: uppercase;" class="select">{{$t('myAccount.mainpage')}}</h2>
            </div>
          </router-link>
        </div>
        <!-- Mainpage -->

        <!-- Logout -->
        <div>
          <div
            @click="logOut()"
            style="
              align-items: center;
              width: 100%;
              margin-left: 59px;
              margin-top: 25px;
              display: flex;
              align-items: center;
              cursor: pointer;
            "
          >
            <img
              class="icon"
              style="width: 20px; margin-top:-2px; padding-right:13px;"
              src="@/assets/user/exit.png"
            />
            <h2 style="color: #ffffff; text-transform: uppercase;" class="select">{{$t('myAccount.logout')}}</h2>
          </div>
        </div>
        <!-- Logout -->
      </div>
    </div>
    <!---- Menu Bar ---->
  </div>
</template>

<script>
import { bus } from "../main";
import User from "../models/user";

export default {
  data() {
    return {
      select1: false,
      select2: true,
      image: "",
      display: new User(),
      googleAuth: {
        params: {
          client_id:
            "691961416858-9n4gn62s613l3v6ubp3g562e5b6brp1b.apps.googleusercontent.com"
        }
      }
    };
  },
  created() {
    bus.$on("display", data => {
      this.display = data;
      this.image = this.display.profilePic;
    });
  },
  methods: {
    Onclick1() {
      alert("Coming soon....")
      // this.select1 = true;
      // this.select2 = false;
      // this.$emit("pageReturn", false);
    },
    Onclick2() {
      this.select1 = false;
      this.select2 = true;
      this.$emit("pageReturn", true);
    },
    backMain() {
      window.location.href = "/";
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
      alert("Logged Out Successful");
    }
  }
};
</script>

<style scoped>
.icon {
  padding-right: 10px;
}

.leaves {
  display: initial;
}

#Usermenu {
  box-shadow: 15px 0 15px -2px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

#menu-container {
  background-color: #312f71;
}

.profilepic {
  border-radius: 50%;
  width: 70px;
  height: 70px;
}

.nameSide {
  font-family: "CloudBold";
  font-size: 2.5em;
  letter-spacing: 2.24px;
  color: #ffffff;
  margin: 0px 0px;
}

.emailSide {
  color: #f8b8b2;
  font-family: "CloudLight";
  font-size: 1.25em;
  letter-spacing: 0.98px;
  margin: 0px 0px;
}

.select {
  font-size: 2em;
  letter-spacing: 1px;
  margin: 0px;
  padding-top: 3px;
  font-family: "CloudBold";
}

#bottom {
  margin-top: 300px;
}

@media screen and (max-width: 1360px) {
  .leaves {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  #Usermenu {
    display: none;
  }
}
</style>
