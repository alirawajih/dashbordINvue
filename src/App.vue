<template >
  <router-view  /> 
</template>
<script>
// import flipCard from "./components/compon/flipCard.vue";
import templetform from "@/views/templetform.vue";
import { useAbility } from "@casl/vue";
import { ABILITY_TOKEN } from "@casl/vue";
import { AbilityBuilder, Ability } from "@casl/ability";

export default {
  sockets: {
    connect: function () {
      console.log("socket connected");
    },
    customEmit: function (val) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    },
  },
  components: {
    templetform,
    // flipCard,
  },
  data() {
    return {};
  },
  created() {
    console.log();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #ffffff; */
}
</style>
