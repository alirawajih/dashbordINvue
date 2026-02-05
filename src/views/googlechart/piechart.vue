<template>
  <GChart
    type="PieChart"
    :data="chartData"
    :options="chartOptions"
  />
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
        legend: "none",
        is3D: true,
        // pieSliceText: "none",
        height: 600,
        backgroundColor: "rgb(154, 155, 157)",
        slices: {
          4: { offset: 0.3 },
          9: { offset: 0.1 },
          6: { offset: 0.4 },
          5: { offset: 0.5 },
        },
      },
    };
  },
};
</script>
    
  