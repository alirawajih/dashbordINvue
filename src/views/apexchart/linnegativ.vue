<template>
    <div class="maindiv">
      <div id="chart">
        <apexchart
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
            name: "Cash Flow",
            data: [
              0, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09,
              0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8,
              -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6,
              -29.4, -2.4, -2.4,
            ],
          },
        ],
        chartOptions: {
         
          chart: {
            type: "line",
            height: 350,
            toolbar: {
              show: false,
            },
          },
          colors: ['#B72136'], 
  
  fill: {
      type: "gradient",
  
  gradient: {
    type: 'vertical',
  
    gradientToColors:['#007B55'], 
    stops: [27, 0],
    },
  
  },
  
          plotOptions: {
   
            
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            title: {
              text: "Growth",
            },
            labels: {
              formatter: function (y) {
                return y;
              },
            },
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2011-01-01",
              "2011-02-01",
              "2011-03-01",
              "2011-04-01",
              "2011-05-01",
              "2011-06-01",
              "2011-07-01",
              "2011-08-01",
              "2011-09-01",
              "2011-10-01",
              "2011-11-01",
              "2011-12-01",
              "2012-01-01",
              "2012-02-01",
              "2012-03-01",
              "2012-04-01",
              "2012-05-01",
              "2012-06-01",
              "2012-07-01",
              "2012-08-01",
              "2012-09-01",
              "2012-10-01",
              "2012-11-01",
              "2012-12-01",
              "2013-01-01",
              "2013-02-01",
              "2013-03-01",
              "2013-04-01",
              "2013-05-01",
              "2013-06-01",
              "2013-07-01",
              "2013-08-01",
              "2013-09-01",
            ],
            
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
        