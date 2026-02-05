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
      chartType: "ColumnChart",

      chartData: [
        ["Month", "old", "new"],
        ["US", 638, 610],
        ["AS", 660, 620],
        ["JO", 616, 600],
        ["EG", 611, 600],
        ["QR", 691, 560],
      ],

      chartOptions: {
        chartArea: { width: "85%" },
        bar: { groupWidth: "30%" },
        height: 600,
        colors: ["gray"],
        seriesType: "bars",
        tooltip: {
          textStyle: { color: "#000" },
          showColorCode: true,
          showColorCode: false,
          isHtml: true,
        },

        series: {
          0: {
            type: "line",
            color: "blue",
            lineWidth: 5,
            pointSize: 9,
            // pointsVisible: true,
          },
        },
        legend: { position: "none" },
      },
    };
  },
};
</script>
    
  