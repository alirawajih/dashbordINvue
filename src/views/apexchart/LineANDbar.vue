<template>
    <div class="maindiv">
        <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </template>
      
      <script>
  export default {
    data: function () {
      return {
        series: [
        {
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37]
          }, {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21]
          }
        ],
        chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              stacked: false,
          toolbar: {
            show: false,
          },
            },
            stroke: {
              width: [0, 2, 5],
              curve: 'smooth'
            },
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            },
            
            fill: {
              opacity: [0.85, 0.25, 1],
              gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
              }
            },
            labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
              
            ],
            markers: {
              size: 0
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              title: {
                text: 'Points',
              },
              min: 0
            },
            tooltip: {
              shared: true,
              intersect: false,
              }
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
      