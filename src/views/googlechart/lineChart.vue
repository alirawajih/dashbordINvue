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
      chartType: "LineChart",

      chartData: [
        ["Year", "Sales"],
        ["2004", 1000],
        ["2005", 1170],
        ["2006", 660],
        ["2007", 1030],
      ],

      chartOptions: {
        chartArea: { height: "85%", width: "80%" },
        curveType: "function",
        legend: { position: "none" },
        width: '100%',
        height: 600,
      },
    };
  },
};
</script>
      
    