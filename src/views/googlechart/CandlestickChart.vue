<template>
  <div>
    <GChart :type="chartType" :data="chartData" :options="chartOptions" />
  </div>
</template>
  
  <script>
import { GChart } from "vue-google-charts";

export default {
  name: "GoogleChart",
  components: {
    GChart,
  },
  data() {
    return {
      chartType: "CandlestickChart",
      chartData: [
        ["day", "a", "b", "c", "d"],
        ["Mon", 45, 45, 20, 20],
        ["Tue", 31, 31, 66, 66],
        ["Wed", 80, 80, 50, 50],
        ["Thu", 50,50, 77, 77],
        ["Fri", 68, 68, 15, 15],
      ],

      chartOptions: {
        
        // colors:['gray'],
        legend: "none",
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
          risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
        },
        legend: "none",
        height: 600,
        tooltip: {
          textStyle: { color: "#000" },
          showColorCode: true,
          showColorCode: false,
          isHtml: true,
        },
      },
    };
  },
  created(){
   
  }
  
};
</script>
  
