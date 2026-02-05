<template>
  <div class="row body position-fixed">
    <div class="col-12 menu">
      <div class="logotop">
        <ul>
          <li>
            <vue-feather
              class="float-start p-2"
              type="codesandbox"
            ></vue-feather>
            <span :class="text" class="d-inline-block float-start pt-1"
              >vuexy</span
            >

            <div class="fs-3">
              <button class="clossbutton" @click="clossbutton">
                <svg
                  id="i-close"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentcolor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M2 30 L30 2 M30 30 L2 2" />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>

      <div class="menuitems">
        <ul class="ps-1">
          <li class="link">
            <ul class="Grouplist">
              <li @click="changtype">
                <vue-feather type="home"></vue-feather>
                <div>
                  <span :class="text">dashboard</span>
                </div>
                <div class="chevron">
                  <span :class="text"
                    ><vue-feather :type="type"></vue-feather
                  ></span>
                </div>
              </li>
              <ul v-if="show">
                <router-link to="ecommerce">
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
          </li>

          <router-link to="email">
            <li class="link">
              <vue-feather type="mail"></vue-feather>
              <span :class="text"> Email</span>
            </li>
          </router-link>
          <router-link to="apexchart">
            <li class="link">
              <vue-feather type="bar-chart-2"></vue-feather>
              <span :class="text"> Epexchart</span>
            </li>
          </router-link>
          <router-link to="GoogleChart">
            <li class="link">
              <vue-feather type="bar-chart-2"></vue-feather>
              <span :class="text"> GoogleChart</span>
            </li>
          </router-link>
          <router-link to="inputForm">
            <li class="link">
              <vue-feather type="file-text"></vue-feather>
              <span :class="text"> inputForm</span>
            </li>
          </router-link>
          <router-link to="logs">
            <li class="link">
              <vue-feather type="alert-circle"></vue-feather>
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
  name: "navright",
  data() {
    return {
      logo: logo,
      type: "chevron-down",
      text: "",
      show: false,
    };
  },
  methods: {
    clossbutton() {
      this.$store.commit("menuclos");
    },
    changtype() {
      if (this.type == "chevron-down") {
        this.show = !this.show;

        this.type = "chevron-up";
      } else if (this.type == "chevron-up") {
        this.show = !this.show;

        this.type = "chevron-down";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style_scss/components/navright.scss";
</style>

