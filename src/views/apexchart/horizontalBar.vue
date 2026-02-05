<template>
  <div class="maindiv">
    <div class="chart">
      <div id="chart">
        <apexchart
          type="bar"
          height="430"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
    
  <script>
export default {
  data() {
    return {
      series: [
        {
          data: [377387073, 56090919, 37979116, 33355799, 6324002],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 430,
          toolbar: {
            show: false,
          },
        },
        
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top",
            },
            distributed: false,
          },
        },
        colors: "#00796B",
        dataLabels: {
          enabled: true,
          textAnchor: "middle",

          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        stroke: {
          show: false,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        xaxis: {
          categories: ["SAR", "JOD", "USD", "AED", "IQD"],
        },
        legend: {
          show: false,
        },
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
              formatter: function () {
                return "";
              },
            },
          },
        },
      },
    };
  },
  created() {},
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