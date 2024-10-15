<template>
    <div class=" maindiv">
      
      <div class=" m-0 p-0">
        <div id="chart" class="text-black ">
        <apexchart
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
        series: [ 377387, 560909, 379791, 333557, 634241, 114142, 60415,
          39864, 20750, 10874, 439,],
        chartOptions: {
          chart: {
            width: 150,
            type: "donut",
            
          },
          plotOptions: {
            pie: {
              
              donut: {
                  labels: {
                    show: true,
                    total: {
                      showAlways: true,
                      show: true
                    }
                  }
                }
            },
          },
          dataLabels: {
            enabled: true,
          },
  
          legend: {
            show: true,
          },
          labels: [  "SAR",
          "JOD",
          "USD",
          "AED",
          "IQD",
          "EGP",
          "EUR",
          "OMR",
          "BHD",
          "KWD",
          "QAR",],

  
          
        },
      };
    },
  };
  </script>
  
<style scoped>
.maindiv {
  position: relative;
  border-radius: 5px;
  background: rgb(154, 155, 157);
  color: black;
  height: 100%;
}
</style>