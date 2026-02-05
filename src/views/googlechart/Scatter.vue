<template>
  <GChart type="ScatterChart" :data="chartData" :options="chartOptions" />
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
      chartData: [
        ["Language", "Speakers (in millions)"],
        ["12051 - Abyan Capital", 37738],
        ["12051 - Abyan Capital", 56090],
        ["12051 - Abyan Capital", 37979],
        ["12051 - Abyan Capital", 33355],
        ["12051 - Abyan Capital", 63242],
        ["12051 - Abyan Capital", 11414],
        ["12051 - Abyan Capital", 60415],
        ["12051 - Abyan Capital", 39864],
        ["12051 - Abyan Capital", 20750],
        ["12051 - Abyan Capital", 10874],
        ["12051 - Abyan Capital", 439],
      ],

      chartOptions: {
        chartArea: { width: "85%" },
        height: 600,
        pointSize: 10,
        tooltip: { textStyle: { color: "#000" }, isHtml: true },
        colors: ["green"],
        legend: "none",
      },
    };
  },
};
</script>
      
    