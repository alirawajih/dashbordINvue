<template>
  <div class="maindiv">
    <div class="chart">
      <div class="text-start p-2 pb-0" style="font-size: 5px">
        <h6 style="color: rgba(255, 255, 255, 0.27)">testApexchart</h6>
        <h4 class=" ">6,24k</h4>
      </div>
      <div id="chart">
        <apexchart
          type="area"
          height="350"
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
          name: "Network",
          data: [
            {
              x: "Nov 2019",
              y: 50,
            },
            {
              x: "Dec 2019",
              y: 50,
            },
            {
              x: "Jan 2020",
              y: 50,
            },
            {
              x: "Feb 2020",
              y: 30.17,
            },
            {
              x: "Mar 2020",
              y: null,
            },
            {
              x: "Apr 2020",
              y: 25.34,
            },
            {
              x: "May 2020",
              y: 13.17,
            },
            {
              x: "Jun 2020",
              y: 13.17,
            },
            {
              x: "Jul 2020",
              y: 13.17,
            },
            {
              x: "Aug 2020",
              y: 13.17,
            },
            {
              x: "Sep 2020",
              y: 13.17,
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
               toolbar: {
            show: false,
          },
          
         
          type: "area",
          height: 350,
          animations: {
            enabled: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 0.8,
          //   type: 'pattern',
          pattern: {
            style: ["verticalLines", "horizontalLines"],
            width: 5,
            height: 6,
          },
        },
        markers: {
          size: 5,
          hover: {
            size: 9,
          },
        },
        title: {
          text: "Network Monitoring",
        },
        tooltip: {
          intersect: true,
          shared: false,
        },
        theme: {
          palette: "palette1",
        },
        xaxis: {
           
          type: "datetime",
        },
        // yaxis:{
        //     min:0,
        // }
       
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