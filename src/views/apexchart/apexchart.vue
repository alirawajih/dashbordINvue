<template>
  <div class="maindiv">
    <div class="chart">
      <div class="text-start p-2 pb-0" style="font-size: 5px">
        <h6 style="color: rgba(255, 255, 255, 0.27)">apexchart</h6>
        <p>{{  }}</p>
      </div>
      <div id="chart">
        <apexchart
          :options="chartOptions"
          :series="chartSeries"
          type="bar"
          height="350"
        />
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: ["data"],
  data() {
    return {
      dataAna: [],
      chartData: {},
    };
  },
  created() {
    this.chartData = this.data;
    
    
  },
  computed: {
    
    chartOptions() {
      const normalizedValues = this.chartData.values.map((value) =>
        Math.log(value + 1)
      );
      const maxLogValue = Math.max(...normalizedValues);

      return {
        chart: {
          type: "bar",

          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "15%",
            distributed: false,
            // colors: {
            //   backgroundBarColors: ["#808080"],
            // },
          },
        },
        xaxis: {
          categories: this.chartData.keys,
          labels: {
            show: true,
            // trim: true,
            formatter: function (value, opts) {
              if (value.length > 11) {
                return value.slice(0, 10) + "...";
              }
              return value;
            },
          },
        },
        yaxis: {
          min: 1,
          logarithmic: true,
          // tickAmount: 9,
          // forceNiceScale: true,
          labels: {
            formatter: (value) => {
              return value.toFixed(0);
            },
          },
        },
        legend: {
          show: false,
        },
        tooltip: {
          theme: "dark",
          x: {
            show: true,
            formatter: function (val) {
              return val;
            },
          },
          y: {
            title: {
              formatter: function (val) {
                return "value";
              },
            },
          },
        },
        fill: {
          colors: "#00796B",
        },
      };
    },
    chartSeries() {
      return [
        {
          name: "Data",
          data: this.chartData.values,
        },
      ];
    },
    
  },
};
</script>
<style lang="scss" scoped>
.maindiv {
  position: relative;
  border-radius: 5px;
  background: rgb(154, 155, 157);
  color: black;
  height: 100%;
}
</style>