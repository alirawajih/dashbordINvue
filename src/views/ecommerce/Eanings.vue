<template>
  <div class="row chart p-2">
    <div class="col-6 text-start">
      <h6>Earnings</h6>
      <span>This Month</span>
      <h6>$4055.56</h6>
      <p>68.2% more earnings than last month.</p>
    </div>
    <div class="col-6 m-0 p-0">
      <div id="chart" class="text-black m-2">
      <apexchart
        height="150"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Eanings",
  data() {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          width: 150,
          type: "donut",
          
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },

        
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style_scss/ecommerce/enings.scss";
</style>