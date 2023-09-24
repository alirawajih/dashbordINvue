<template>
  <div class="chart">
    <div class="text-start p-2 pb-0" style="font-size: 5px">
      <h6 style="">Profit</h6>
      <h4 class=" ">6,24k</h4>
    </div>
    <div id="chart" class="text-black m-2">
      <apexchart
        height="100"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      series: [
        {
          name: "Desktops",
          data: [0, 20, 5, 30, 15, 45],
        },
      ],
      chartOptions: {
        theme: {},
        chart: {
          sparkline: {
        enabled: true,
    }
          // toolbar: {
          //   show: false,
          // },
          // show: false,
          // height: 5,
          // type: "line",

          // zoom: {
          //   enabled: false,
          // },
        },
        // dataLabels: {
        //   enabled: true,
        // },
        stroke: {
          curve: "straight",
          
        },

      
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style_scss/Partials/variables";
@import "../../assets/style_scss/Partials/mixin";

.chart {
  @include card;
  @include font;
}
</style>