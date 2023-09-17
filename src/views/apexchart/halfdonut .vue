<template>
    <div class="maindiv">
        <div id="chart">
        <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
      </div>
    </div>
  </template>
    
    <script>
  export default {
    data() {
      return {
        series: [377387, 560909, 379791, 333557, 634241],
          chartOptions: {
            chart: {
              type: 'donut',
            },
            plotOptions: {
              pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 0
              }
            },
            grid: {
              padding: {
                bottom: -80
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                
              }
            }],
            labels: [  "SAR",
          "JOD",
          "USD",
          "AED",
          "IQD",
          ],
          },
          
          
        
      };
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
    