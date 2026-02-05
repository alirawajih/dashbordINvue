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
        ["Element", "Density", { role: "style" }],
        [
          "12051 - Abyan Capital",
          3773870736,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          56090919,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          37979116,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          33355799,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          6324241,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          114142,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          60415,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          39864,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          20750,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          10874,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          0,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          20750,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          10874,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
        [
          "12051 - Abyan Capital",
          0,
          "stroke-color: #00796B;  stroke-width: 8; fill-color: #00796B;",
        ],
      ],

      chartOptions: {
        title: "",
        height: 600,
        widthe: "100%",
        bar: { groupWidth: "50%" },
        vAxis: {
          format: "short",
        },
        hAxis: {
          maxValue: 0,
        },
        dataOpacity: 1,
        focusTarget: "datum",
        forceIFrame: false,
        legend: { position: "none" },
        tooltip: {
          textStyle: { color: "#000" },
          showColorCode: true,
          showColorCode: false,
          isHtml: true,
        },
        backgroundColor: "rgb(154, 155, 157)",
      },
    };
  },
};
</script>
  
