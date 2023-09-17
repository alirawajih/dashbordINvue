<template>
  <div class="section w-100">
    <div class="row cc gap-0 p-0 m-0">
      <div class="scatter row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <scatter />
      </div>
      <div class="apexchart1Vue row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <apexchart1Vue />
      </div>
      <div class="horizontalBar row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <horizontalBar />
      </div>
      <div class="chartjs row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <chartjs />
      </div>
      <div class="chartjs row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <donut />
      </div>
      <div class="chartjs row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <halfdonut-vue />
      </div>
      
      <div
        class="apexchart row col-sm-12 col-md-12 col-xl-6 p-2 m-0"
        v-for="data in dataAnalytics"
        :key="data"
      >
        <apexchart :data="data" />
      </div>
     
      <div class="testApexchart row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <testApexchart />
      </div>
      <div class="LineANDbar row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <LineANDbar />
      </div>
      <div class="candlestick row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <candlestick />
      </div>
      <div class="negativchart row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <negativeValues />
      </div>
      <div class="linnegativ row col-sm-12 col-md-12 col-xl-6 p-2 m-0">
        <linnegativ />
      </div>
    </div>
  </div>
</template>
    
    <script>
import { data } from "../../db/dataAnalytics";
import horizontalBar from "./horizontalBar.vue";
import apexchart from "./apexchart.vue";
import apexchart1Vue from "./apexchart1.vue";
import chartjs from "./chartjs.vue";
import testApexchart from "./testApexchart.vue";
import scatter from "./scatter.vue";
import donut from "./donut.vue"
import halfdonutVue from './halfdonut .vue';
import LineANDbar from "./LineANDbar.vue";
import candlestick from "./candlestick.vue";
import negativeValues from "./negativchart.vue";
import linnegativ from "./linnegativ.vue";
export default {
  name: "EpexchartExampel",

  data() {
    return {
      dataAnalytics: [],
    };
  },
  components: {
    horizontalBar,
    scatter,
    apexchart,
    apexchart1Vue,
    chartjs,
    testApexchart,
    donut,
    halfdonutVue,
    LineANDbar,
    candlestick,
    negativeValues,
    linnegativ
  },
  created() {
    this.dataAnalytics = data.data;
  },
};
</script>
    
    <style scoped>
.cc {
  margin-right: 1rem;
  margin-left: 0rem;
}

@media screen and(max-width: 765px) {
  .cc {
    margin-right: 1px;
    margin-left: 3px;
  }
}
</style>