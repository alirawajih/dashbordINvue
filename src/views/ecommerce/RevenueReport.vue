<template>
  <div class="revenue row p-0 m-0">
    <div class="col-8">
      <div id="chart" class="text-black">
        <apexchart
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
    <div class="col-4 rightdiv">
      <div class="dropdown pb-4">
        <button
          class="btn btn-secondary dropdown-toggle dropbtn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          2022
        </button>
        <ul class="dropdown-menu dropmenu">
          <li><a class="dropdown-item" href="#">2021</a></li>
          <li><a class="dropdown-item" href="#">A2020</a></li>
          <li><a class="dropdown-item" href="#">2019</a></li>
        </ul>
      </div>
      <div    style="justify-items: center">
        <h5>$25,852</h5>
        <span class="textgray">Budget:56,800</span>
      </div>

      <button type="button" class="btn btn-outline-primary mt-5">
        Primary
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      series: [
        {
          name: "Males",
          data: [1.9, 2.8, 4.9, 7.2, 9, 7.3, 4.1, 2.2, 1.5],
        },
        {
          name: "Females",
          data: [-1.8, -3.05, -4.06, -7.18, -9, -7.2, -4.85, -3.4, -1.5],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",

          stacked: true,

          toolbar: {
            show: false,
          },
           
        },
        colors: ["rgba(115, 103, 240, 0.85)", "rgba(255, 159, 67, 0.85)"],

        stroke: {
          width: 0,
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: "15%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        xaxis: {
          axisTicks: {
            show: false,
          },

          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: true,

            style: {
              colors: ["#ffffff7a"],
              fontSize: "10px",
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style_scss/ecommerce/Revenue.scss";
</style>