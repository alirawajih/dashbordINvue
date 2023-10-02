<template>
  <nav class="navbar navmenuup navbar-expand-lg">
    <div class="mt-2">
      <ul>
        <li>
          <vue-feather class="menu" type="menu" @click="menuopen"></vue-feather>
        </li>

        <li>
          <router-link to="email">
            <vue-feather type="mail"> </vue-feather>
          </router-link>
        </li>
        <li>
          <router-link to="chat">
            <vue-feather type="message-square"> </vue-feather>
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <ul class="rightlist">
        <li class="themeIcon">
          <vue-feather
            :type="light ? 'moon' : 'sun'"
            @click="!light ? darkLayout('light') : darkLayout('dark')"
          ></vue-feather>
        </li>
        <li>
          <div class="usermenu">
            <label
              for="toggler "
              style="cursor: pointer"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <vue-feather type="bell"></vue-feather>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill p-1"
                style="
                  width: auto;
                  background: rgb(43, 39, 39);

                  color: rgb(44, 134, 44);
                "
              >
                9+
                <span class="visually-hidden">unread messages</span>
              </span>
            </label>

            <div class="dropdown dropdown-menu p-0 m-0" id="style-4" style="">
              <div class="p-2"></div>
              <div class=" ">
                <div
                  class="LatestLINKMost"
                  :class="newview ? 'borderBottom' : ''"
                >
                  <button type="button" href="#" @click="newView">
                    new Viewed
                  </button>
                </div>
                <div
                  class="LatestLINKMost"
                  :class="mostview ? 'borderBottom' : ''"
                >
                  <button @click="mostView" class="" href="#">
                    Most Viewed
                  </button>
                </div>
              </div>
              <div class="p-3" style="max-height: 400px">
                <div class="newview" v-if="newview">
                  
                  <div class="card-notification"> 
                    <p class="fw-bold p-0 m-0">please send me your ....</p>
                    <span class="">data needed to a applay users </span>                    
                  </div>
                  <div class="card-notification"> 
                    <p class="fw-bold p-0 m-0">please send me your ....</p>
                    <span class="">data needed to a applay users </span>                    
                  </div><div class="card-notification"> 
                    <p class="fw-bold p-0 m-0">please send me your ....</p>
                    <span class="">data needed to a applay users </span>                    
                  </div><div class="card-notification"> 
                    <p class="fw-bold p-0 m-0">please send me your ....</p>
                    <span class="">data needed to a applay users </span>                    
                  </div><div class="card-notification"> 
                    <p class="fw-bold p-0 m-0">please send me your ....</p>
                    <span class="">data needed to a applay users </span>                    
                  </div><div class="card-notification"> 
                    <p class="fw-bold p-0 m-0">please send me your ....</p>
                    <span class="">data needed to a applay users </span>                    
                  </div>                 
                </div>
                <div class="mostview" v-if="mostview">
                  <p>mostView</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="username">
          <div class="d-inline-block">
            <p class="m-0 fs-5">{{ $store.state.userIN.Firstname }}</p>
          </div>
        </li>

        <li>
          <b-container>
            <div class="usermenu">
              <label
                for="toggler "
                style="cursor: pointer"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b-avatar
                  badge
                  badge-variant="success"
                  class="p-0"
                  :src="$store.state.userIN.image"
                ></b-avatar>
              </label>
              <div class="dropdown dropdown-menu m-0 p-0" :class="dropdown">
                <ul>
                  <li class="mt-2">
                    <router-link :to="{ name: 'user' }">
                      <vue-feather type="user"></vue-feather>
                      <span>{{ $store.state.userIN.Firstname }}</span>
                    </router-link>
                  </li>
                  <li>
                    <a href="#">
                      <vue-feather type="inbox"></vue-feather>
                      <span>inbox</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <vue-feather type="check-square"></vue-feather>
                      <span>Task</span>
                    </a>
                  </li>
                  <li>
                    <router-link :to="{ name: 'chat' }">
                      <vue-feather type="mail"></vue-feather>
                      <span>chat</span>
                    </router-link>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
                <ul class=" ">
                  <li class="mt-2">
                    <a href="#">
                      <vue-feather type="settings"></vue-feather>
                      <span>settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <vue-feather type="credit-card"></vue-feather>
                      <span>Pricing</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <vue-feather type="help-circle"></vue-feather>
                      <span>help</span>
                    </a>
                  </li>
                  <li class="mb-2">
                    <a @click="logout" href="#">
                      <vue-feather type="log-out"></vue-feather>
                      <span>log-out</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-container>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ability } from "@/ability/defineApilty";
import { initialAbility } from "@/ability/config";
import { Logoutuser } from "@/jsc/loginuser";
import store from "../store";
export default {
  name: "navbarUp",
  data() {
    return {
      dropdown: "",
      light: null,
      user: [],
      newview: true,
      mostview: false,
    };
  },
  created() {
    this.themedata();
  },
  methods: {
    darkLayout(newTheme) {
      this.light = !this.light;
      this.$store.commit("changeTheme", newTheme);
    },
    menuopen() {
      this.$store.commit("menuopen");
    },

    logout() {
      Logoutuser();
      ability.update(initialAbility.ability);
    },
    themedata() {
      let theme = localStorage.getItem("theme");
      if (theme == "dark") {
        this.light = false;
      }
      if (theme == "light") {
        this.light = true;
      }
    },
    mostView() {
      this.mostview = true;
      this.newview = false;
    },
    newView() {
      this.mostview = false;
      this.newview = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style_scss/components/navbarUp.scss";
</style> 