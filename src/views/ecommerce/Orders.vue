<template>
  <div class="chart">
    <div class="text-start p-2 pb-0" style="font-size: 5px">
      <h6 style="color: rgba(255, 255, 255, 0.27)">Orders</h6>
      <h4 class=" ">6,24k</h4>
    </div>
    <div id="chart " class="text-black m-2">
      <apexchart
        type="bar"
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
          data: [15, 30, 100, 60, 80, 99],
        },
      ],
      chartOptions: {
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: "30%",
            barHeight: "30%",
          },
        },

        theme: {},
        chart: {
          sparkline: {
            enabled: true,
          },
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
        //   enabled: false,
        // },
        // stroke: {
        //   curve: "straight",
        // },

        // grid: {
        //   show: false,
        // },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
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
