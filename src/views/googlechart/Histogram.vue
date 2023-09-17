<template>
  <GChart type="Histogram" :data="chartData" :options="chartOptions" />
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
        ["Dinosaur", "Length"],
        ["SAR", 3773870736],
        ["JOD", 56090919],
        ["USD", 37979116],
        ["AED", 33355799],
        ["IQD", 6324241],
        ["EGP", 114142],
        ["EUR", 60415],
        ["OMR", 39864],
        ["BHD", 20750],
        ["KWD", 10874],
        ["QAR", 439],
      ],

      chartOptions: {
        
        width: "100%",
        height: 600,
        bar: { groupWidth: "50%" },
        legend: { position: "none" },
        interpolateNulls: true,
        backgroundColor: "rgb(154, 155, 157)",
        chartArea: {},
        orientation: "vertical",
        hAxis: {
          textPosition: "none",
        },
      },
    };
  },
};
</script>
      
    