<template>
  <div class="m-0 p-0 maindiv">
    <div class="states text-start text-white p-3 pb-5 d-flex">
      <div   >
        <div>
          <h5>Goal Overview</h5>
        </div>
      </div>

      <div class="btn-group groupmenu">
        <vue-feather type="alert-circle"></vue-feather>
      </div>
    </div>
    <div class="chart">
      <div   >
        <div id="chart  ">
          <apexchart
            type="radialBar"
            height="250"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 p-2 text-center datacompleted">
        <span> Completed </span>
        <h5 class="textgray">786,617</h5>
      </div>
      <div class="col-6 p-2 text-center">
        <span> In Progress </span>
        <h5 class="textgray">13,561</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"goaloverview",
  data: function () {
    return {
      series: [75],
      chartOptions: {
        chart: {
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 5,
              size: "80%",
              background: "transparent",

              imageClipped: true,
              position: "front",
              dropShadow: {
                enabled: false,
              },
            },
            track: {
              show: false,
            },

            dataLabels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                formatter: function (val) {
                  return parseInt(val);
                },
                color: "white",
                fontSize: "50px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Percent"],
      },
    };
  },
};
</script>
    
<style lang="scss" scoped>
@import "../../assets/style_scss/ecommerce/goaloverview.scss";
</style>