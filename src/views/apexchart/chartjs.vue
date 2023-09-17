<template>
  <div class="maindiv">
    <div id="chart">
      <div class="text-start p-2 pb-0" style="font-size: 5px">
        <h6 style="color: rgba(255, 255, 255, 0.27)">chartjs</h6>
        <h4 class=" ">6,24k</h4>
      </div>
      <apexchart
        type="bar"
        height="350"
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
          name: "Q1 Budget",
          group: "budget",
          data: [
            3773870736, 56090919, 37979116, 33355799, 6324241, 114142, 60415,
            39864, 20750, 10874, 439,
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
          textAnchor: "middle",
        },

        stroke: {
          show: true,
          lineCap: "square",
          width: 10,
          colors: ["#00796B"],
        },

        plotOptions: {
          bar: {
            horizontal: false,
            // columnWidth: "15%",

            distributed: false,
            dataLabels: {
              hideOverflowingLabels: true,
            },
            // colors: {
            //   // backgroundBarColors: ["gray"],

            // },
          },
        },
        xaxis: {
          categories: [
            "SAR",
            "JOD",
            "USD",
            "AED",
            "IQD",
            "EGP",
            "EUR",
            "Hyperpay_via_ConnectIn",
            "HyperPay_via_ConnectIn_CLIQ",
            "HyperPay1_via_ConnectIn",
            "HyperPay_via_ConnectIn_CLIQ",
          ],
          crosshairs: {
            show: false,
          },
          labels: {
            show: true,
            // trim: true,
            formatter: function (value, opts) {
              if (value.length >= 10) {
                return value.slice(0, 10) + "...";
              }
              return value;
            },
          },
          axisBorder: {
            show: false,
          },
        },

        yaxis: {
          labels: {
            formatter: (val) => {
              if (val > 1000 && val < 1000000) {
                return val / 1000 + "K";
              }
              if (val > 1000000 && val < 1000000000) {
                return val / 1000000 + "M";
              }
              if (val > 1000000000 && val < 1000000000000) {
                return val / 1000000000 + "B";
              }
              return val;
            },
          },
        },
        legend: {
          show: false,
        },
        fill: {
          colors: ["#00796B"],
          opacity: 1,
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
              formatter: function () {
                return "value";
              },
            },
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
.maindiv {
  position: relative;
  border-radius: 5px;
  background: rgb(154, 155, 157);
  color: black;
  height: 100%;
}
.apexcharts-tooltip {
  background: #f3f3f3;
  color: orange;
}
</style>
    