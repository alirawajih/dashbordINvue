<template>
  <div class="maindiv">
    <div id="chart"   >
      <div class="text-start p-2 pb-0" style="font-size: 5px">
        <h6 style="color: rgba(255, 255, 255, 0.27)">apexchart1Vue</h6>
        <h4 class=" ">6,24k</h4>
      </div>
      <apexchart
        type="scatter"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      colorArray: [
        "#A7FFEB",
        "#64FFDA",
        "#1DE9B6",
        "#00BFA5",
        "#4DB6AC",
        "#26A69A",
        "#009688",
        "#00897B",
        "#00796B",
        "#00695C",
        "#004D40",
      ],
      data: {
        keys: [
          "SAR",
          "JOD",
          "USD",
          "AED",
          "IQD",
          "EGP",
          "EUR",
          "OMR",
          "BHD",
          "KWD",
          "QAR",
        ],
        values: [
          3773876, 5609099, 3979116, 3355799, -6324241, 114142, -60415,
          39864, 20750, 10874, 439,
        ],
      },
      result: [],
      series: [
        {
          name: "Data",
          data: [],
        },
      ],

      chartOptions: {
        chart:{
          toolbar: {
            show: false,
          },
        },

        markers: {
          size: 10,
          strokeWidth: 0,

          shape: "circle",

          hover: {
            size: undefined,
            sizeOffset: 15,
          },
        },
        xaxis: {
          tickPlacement: "between",
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
              colors: [],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          crosshairs: {
            show: true,
          },
          tooltip: {
            enabled: false,
          },
        },
        // yaxis: {
        //   min: 1,
        //   logarithmic: true,
        //   tickAmount: 4,
        //   forceNiceScale: true,
        //   labels: {
        //     formatter: (value) => {
        //       return value;
        //     },
        //   },
        // },
        tooltip: {
          theme: "dark",
          x: {
            show: true,            
              formatter: function () {
                return "";
              },
           
          },
          y: {
            title: {
              formatter: function (val) {
                return ;
              },
            },
          },
        }
      },
    };
  },
  
  created() {
    for (let i = 0; i < this.data.keys.length; i++) {
      this.result.push({
        x: this.data.keys[i],
        y: this.data.values[i],
        fillColor: this.colorArray[i],
      });
    }
    this.series[0].data = this.result;
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
  