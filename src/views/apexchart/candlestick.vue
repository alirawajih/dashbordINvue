<template>
    <div class="maindiv">
        <div id="chart">
        <apexchart height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </template>
      
      <script>
  export default {
    data: function () {
      return {
      
        series: [{
            name: 'candle',
            data: [
              {
                x: new Date(1538778600000),
                y: [6629.81, 6629.81, 6633.33, 6633.33]
              },
              {
                x: new Date(1538780400000),
                y: [6632.01, 6632.01, 6630.11, 6630.11]
              },
              {
                x: new Date(1538782200000),
                y: [6630.71, 6630.71, 6635.65, 6635.65]
              },
              {
                x: new Date(1538784000000),
                y: [6635.65, 6635.65, 6638.24, 6638.24]
              },
              {
                x: new Date(1538785800000),
                y: [6638.24, 6638.24, 6624.47, 6624.47]
              },
              {
                x: new Date(1538787600000),
                y: [6624.53, 6624.53, 6624.31, 6624.31]
              },
              {
                x: new Date(1538789400000),
                y: [6624.61, 6624.61, 6626.02, 6626.02]
              },
            
              
            ]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'candlestick',
            },
            
            
            annotations: {
              xaxis: [
                {
                  x: 'Oct 06 14:00',
                  borderColor: '#00E396',
                  label: {
                    
                    borderColor: '#00E396',
                    style: {
                      fontSize: '12px',
                      color: '#fff',
                      background: '#00E396'
                    },
                    orientation: 'horizontal',
                    offsetY: 7,
                    text: 'Annotation Test'
                  }
                }
              ]
            },
            tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="arrow_box p-3">' +
              "<span>" +'value : ' +
              series[seriesIndex][dataPointIndex] +
              "</span>" +
              "</div>"
            );
          },
        },
            xaxis: {
              
              tooltip: {
                enabled: false
              },
              type: 'category',
              labels: {
            show: true,
            trim: true,
            formatter: function (value, ) {
            
              return new Date(value).toDateString();
            },
          },
            },
            yaxis: {
              
              tooltip: {
                enabled: false
              }
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
      