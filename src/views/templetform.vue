<template>
  <div class="dashbord" :data-theme="$store.state.theme">
   <div> 
    <div class="navmenu" v-if="$store.state.menuopen =='close'">
      <navmenu />
    </div>
    <div class="navright" :class="$store.state.menuopen" v-else>
      <navright />
    </div>
   </div>
    <div :class="$store.state.componentsize">
        <div  :class="$store.state.navnbarsize">
          <navbarUp />
        </div>
        <!-- <div :class="$store.state.navnbarsize"> <navbarUp/></div> -->
      <div class="dataviewer ">
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>

      </div>
    </div>
  </div>
</template>

<script>
import navmenu from "@/components/navmenu";
import navbarUp from "@/components/navbarUp";
import navright from "@/components/navright";
// import navright from ""
import { watch } from "vue";

export default {
  name: "template",
  components: {
    navmenu,
    navbarUp,
    navright,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/style_scss/main/templetrForm.scss";
</style>
