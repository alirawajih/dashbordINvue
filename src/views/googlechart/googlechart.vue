<template>
  <div class="section w-100">
    <div class="row contant gap-0 p-0 m-0">
      <div class=" col-8 p-2 comp">
        <GeoChartsVue />
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6 p-2 comp" >
        <barchart />
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6 p-2 comp">
        <piechart />
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6 p-2 comp">
        <histogram />
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6 p-2 comp">
        <lineChart/>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6 p-2 comp">
        <areachart/>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6 p-2 comp">
        <lineColum />
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6 p-2 comp">
        <candlestickChart />
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6 p-2 comp">
        <scatter />
      </div>
      
    </div>
  </div>
</template>
  
  <script>
import barchart from "./barchart.vue";
import GeoChartsVue from './GeoChartsVue.vue';
import Histogram from './Histogram.vue';
import piechart from "./piechart.vue";
import lineColum from "./line&colum.vue";
import candlestickChart from "./CandlestickChart.vue";
import scatter from "./Scatter.vue";
import lineChart from "./lineChart.vue";
import areachart from "./areachart.vue";

export default {
  name: "GoogleChart",

  data() {
    return {};
  },
  components: {
    barchart,
    Histogram,
    piechart,
    GeoChartsVue,
    lineColum,
    candlestickChart,
    scatter,
    lineChart,
    areachart
  },
};
</script>
  
  <style scoped>
.contant {
  margin-right: 1rem;
  margin-left: 0rem;
}

@media screen and(max-width: 765px) {
  .contant {
    margin-right: 1px;
    margin-left: 3px;
  }
}

</style>
  