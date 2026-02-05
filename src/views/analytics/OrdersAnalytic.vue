<template>
  <div class="chart">
    <div class="text-start p-2 pb-0" style="font-size: 5px">
      <h6 style="">Orders Received</h6>
      <h4 class=" ">38.4k</h4>
    </div>

    <div id="chart " class="text-black m-0 p-0">
      <apexchart
        type="area"
        height="310"
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
          data: [11, 32, 45, 32, 34, 52, 41],
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
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        chart: {
          toolbar: {
            show: false,
          },
          show: false,
          height: 5,
          type: "line",

         
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        grid: {
          show: false,
        },
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
@import "../../assets/style_scss/Partials/mixin";
.chart {
  @include font;
  @include card;
}

</style>
  