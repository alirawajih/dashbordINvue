<template>
  <div class="m-0 p-0 maindiv">
    <div class="states text-start text-white p-3 d-flex">
      <div   >
        <div>
          <h5>Browser States</h5>
          <span class="textgray">Counter August 2020</span>
        </div>
      </div>

      <div class="btn-group groupmenu">
        <vue-feather
          type="more-vertical"
          class="dropdownbutton "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></vue-feather>
        <ul class="dropdown-menu menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div class="states text-start text-white ps-3 pe-3 d-flex">
      <div class="d-flex">
        <div class="p-2 featherdiv">
          <vue-feather type="chrome"></vue-feather>
        </div>
        <span class="textgray p-2">chrome</span>
      </div>

      <div class="rightdiv d-flex pt-3">
        <div class="p-1 textgray">
          <span>25%</span>
        </div>
        <div id="chart " class="chart">
          <apexchart
            type="radialBar"
            height="150"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
    <div class="states text-start text-white ps-3 pe-3 d-flex">
      <div class="d-flex">
        <div class="p-2 featherdiv">
          <vue-feather type="chrome"></vue-feather>
        </div>
        <span class="textgray p-2">chrome</span>
      </div>

      <div class="rightdiv d-flex pt-3">
        <div class="p-1 textgray">
          <span>25%</span>
        </div>
        <div id="chart " class="chart">
          <apexchart
            type="radialBar"
            height="150"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
    <div class="states text-start text-white ps-3 pe-3 d-flex">
      <div class="d-flex">
        <div class="p-2 featherdiv">
          <vue-feather type="chrome"></vue-feather>
        </div>
        <span class="textgray p-2">chrome</span>
      </div>

      <div class="rightdiv d-flex pt-3">
        <div class="p-1 textgray">
          <span>25%</span>
        </div>
        <div id="chart " class="chart">
          <apexchart
            type="radialBar"
            height="150"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { FLOWBASEANNOTATION_TYPES } from "@babel/types";

export default {
  name: "EcommerceStates",
  data: function () {
    return {
      series: [70],
      chartOptions: {
        chart: {
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            inverseOrder: false,
            startAngle: 0,
            endAngle: 360,
            offsetX: 0,
            offsetY: -50,
            hollow: {
              margin: 5,
              size: "0%",
              background: "transparent",

              imageClipped: true,
              position: "front",
              dropShadow: {
                enabled: false,
              },
            },
            track: {
              show: true,
              startAngle: undefined,
              endAngle: undefined,
              background: "#f2f2f2",
              strokeWidth: "90%",
              opacity: 0,
              margin: 25,
              dropShadow: {
                enabled: false,
              },
            },
            dataLabels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                show: false,
              },
              total: {
                show: false,
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
@import '../../assets/style_scss/ecommerce/BrowserStates.scss'

</style>