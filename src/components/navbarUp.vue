<template>
  <nav class="navbar navmenuup navbar-expand-lg">
    <div class="mt-2">
      <ul>
        <li>
          <vue-feather class="menu" type="menu" @click="menuopen"></vue-feather>
        </li>

        <li>
          <vue-feather type="calendar"></vue-feather>
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
    <div   >
      <ul class="mt- rightlist">
        <li class="themeIcon">
          <vue-feather
            :type="light ? 'moon' : 'sun'"
            @click="!light ? darkLayout('light') : darkLayout('dark')"
          ></vue-feather>
        </li>
        <li>
          <a href="#">
            <vue-feather type="shopping-cart"></vue-feather>
          </a>
        </li>
        <li class="username">
          <div class="d-inline-block">
            <p class="m-0 fs-5">ali</p>
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
                  src="https://placekitten.com/300/300"
                ></b-avatar>
              </label>
              <div class="dropdown dropdown-menu float-start" :class="dropdown">
                <ul>
                  <li class="mt-2">
                    <router-link :to="{ name: 'user' }">
                      <vue-feather type="user"></vue-feather>
                      <span>user</span>
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
export default {
  name: "navbarUp",
  data() {
    return {
      dropdown: "",
      light: null,
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
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style_scss/components/navbarUp.scss";
</style> 