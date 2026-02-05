<template>
  <div
    class="row pt-3"
    :class="classmenu"
    @mousemove="mouseover"
    @mouseout="mouseout"
  >
    <div class="col-12 ">
      <div class="logotop">
        <ul>
          <li class="d-flex mb-3 ">
            <vue-feather
              class="p-2"
              type="codesandbox"
            ></vue-feather>
            <div class="d-inline-block pt-2 ">
              <span :class="text" class="  ">vuexy</span>
            </div>
            <vue-feather
            class="icon ms-auto p-2"
            :class="text"
            :type="menytype"
            @click="sm"
          ></vue-feather>
          </li>

         
        </ul>
      </div>

      <div class="menuitems">
        <ul class="ps-1">
          <li class="link">
            <ul class="Grouplist">
              <li @click="changtype">
                <vue-feather type="home"></vue-feather>
                <div   >
                  <span :class="text">dashboard</span>
                </div>
                <div class="chevron">
                  <span :class="text"
                    ><vue-feather :type="type"></vue-feather
                  ></span>
                </div>
              </li>
              <ul v-if="show">
                <router-link :to="{ name: 'ecommerce' }">
                  <li class="link">
                    <vue-feather :class="text" type="minus"></vue-feather>
                    <span :class="text">ecommerce</span>
                  </li>
                </router-link>
                <router-link to="analytics">
                  <li class="link">
                    <vue-feather :class="text" type="minus"></vue-feather>
                    <span :class="text">analytics</span>
                  </li>
                </router-link>
              </ul>
            </ul>
          </li>
          <li class="comint">
            <span :class="text">Apps &amp; Pages</span>
            <vue-feather
              class="pe-5"
              type="more-horizontal"
              v-if="classmenu == 'menu'"
            ></vue-feather>
          </li>

          <router-link to="email">
            <li class="link">
              <vue-feather type="mail"></vue-feather>
              <span :class="text"> Email</span>
            </li>
          </router-link>
          <router-link to="apexchart">
            <li class="link">
              <vue-feather
                type="bar-chart-2"
              ></vue-feather>
              <span :class="text"> Epexchart</span>
            </li>
          </router-link>
          <router-link to="Googlechart">
            <li class="link">
              <vue-feather
                type="bar-chart-2"
              ></vue-feather>
              <span :class="text"> GoogleChart</span>
            </li>
          </router-link>
          <router-link to="inputForm">
            <li class="link">
              <vue-feather
                type="file-text"
              ></vue-feather>
              <span :class="text"> inputForm</span>
            </li>
          </router-link>
          <router-link to="logs">
            <li class="link">
              <vue-feather
                type="alert-circle"
              ></vue-feather>
              <span :class="text"> Logs</span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/views/img/download.png";


export default {
  name: "navmenu",
  components: {},
  data() {
    return {
      logo: logo,
      classmenu: "menuOpen",
      checked: true,
      text: "",
      type: "chevron-down",
      menytype: "disc",
      padding: "",
      show: false,
    };
  },

  methods: {
    sm() {
      if (this.menytype == "disc") {
        this.menytype = "circle";
        this.menuclos();
        this.$store.commit("navbar_big");
        this.$store.commit("component_big");
      } else {
        this.menytype = "disc";
        this.menuopen();
        this.$store.commit("navbar_min");
        this.$store.commit("component");
      }
    },

    mouseover() {
      if (this.menytype == "circle") {
        this.menuopen();
      }
    },
    mouseout() {
      if (this.menytype == "circle") {
        this.menuclos();
      }
    },
    menuclos() {
      this.padding = "p-0";
      this.classmenu = "menu";
      this.text = "text-none";
    },
    menuopen() {
      this.classmenu = "menuOpen";
      this.text = "";
    },
    changtype() {
      if (this.type == "chevron-down") {
        this.type = "chevron-up";
        this.show = !this.show;
      } else if (this.type == "chevron-up") {
        this.type = "chevron-down";
        this.show = !this.show;
      }
    },
  },
  created(){
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style_scss/components/navmenu.scss";
</style>
