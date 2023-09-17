<template>
  <GChart
    :settings="{ packages: ['geochart'] }"
    type="GeoChart"
    :data="chartData"
    :options="chartOptions"
    ref="gChart"
  />
</template>
<script>
import { GChart } from "vue-google-charts";
export default {
  name: "geochart",
  components: {
    GChart,
  },
  data() {
    return {
      chartData: [
        [
          "Country",
          "Volume",
          { role: "tooltip", type: "string", p: { html: true } },
        ],
        [
          "SA",
          317437,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Saudi Arabia</strong></b></h5><h6>Trix count : 317.437K</h6><h6>Trix Amount :18.971M</h6><h6>ACK % 100%</h6>",
        ],
        [
          "US",
          32203,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>United States of America</strong></b></h5><h6>Trix count : 32.203K % 100%</h6>",
        ],
        [
          "EM",
          1205,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>EMPTY</strong></b></h5><h6>Trix count : 1.205K</h6><h6>Trix Amount : 22.872K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "FR",
          447,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>France</strong></b></h5><h6>Trix count : 447</h6><h6>Trix Amount : 31.241K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "DE",
          2569,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Germany</strong></b></h5><h6>Trix count : 2.569K</h6><h6>Trix Amount : 72.477K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "Ka",
          5895,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Kazakhstan</strong></b></h5><h6>Trix count : 5.895K</h6><h6>Trix Amount : 164.850K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "JO",
          156,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "Do",
          2411,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Dominican Republic</strong></b></h5><h6>Trix count : 2.411K</h6><h6>Trix Amount : 90.120K/h6>",
        ],
        [
          "Bo",
          88,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Bolivia</strong></b></h5><h6>Trix count : 88</h6><h6>Trix Amount : 3.428K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "UA",
          1429,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Brazil</strong></b></h5><h6>Trix count : 760</h6><h6>Trix Amount : 12.856K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "Br",
          760,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Brazil</strong></b></h5><h6>Trix count : 760</h6><h6>Trix Amount : 12.856K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "In",
          4987,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>India</strong></b></h5><h6>Trix count : 4.987K</h6><h6>Trix Amount : 245.241K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "TD",
          156666,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "AR",
          166,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "TN",
          16699,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "PM",
          1111,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "YU",
          1100,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "TW",
          1100,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "FJ",
          1156,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "SB",
          995,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "NZ",
          777,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "NC",
          396,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "TJ",
          3965,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "AL",
          99,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "VN",
          55,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "YD",
          985,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "IR",
          845,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "MO",
          332,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "AR",
          900,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "ZA",
          898,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "BW",
          545,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "TT",
          90,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "VC",
          9454,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "IL",
          885,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "KW",
          805,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "RU",
          15656,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "CA",
          15566,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Jordan</strong></b></h5><h6>Trix count : 15.373K</h6><h6>Trix Amount : 186.562K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "BD",
          35,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Bangladesh</strong></b></h5><h6>Trix count : 35</h6><h6>Trix Amount : 4.485K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "PK",
          4,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Pakistan</strong></b></h5><h6>Trix count : 84</h6><h6>Trix Amount : 2.927K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "KR",
          5,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Korea (the Republic of)</strong></b></h5><h6>Trix count : 5</h6><h6>Trix Amount : 716</h6><h6>ACK % 100%</h6>",
        ],
        [
          "GR",
          7,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Greece</strong></b></h5><h6>Trix count : 7</h6><h6>Trix Amount : 751</h6><h6>ACK % 100%</h6>",
        ],
        [
          "LT",
          3,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Lithuania</strong></b></h5><h6>Trix count : 3</h6><h6>Trix Amount : 409</h6><h6>ACK % 100%</h6>",
        ],
        [
          "TR",
          7,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Turkey</strong></b></h5><h6>Trix count : 7</h6><h6>Trix Amount : 79</h6><h6>ACK % 100%</h6>",
        ],
        [
          "AZ",
          18,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Azerbaijan</strong></b></h5><h6>Trix count : 18</h6><h6>Trix Amount : 542</h6><h6>ACK % 100%</h6>",
        ],
        [
          "CZ",
          7,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Czechia</strong></b></h5><h6>Trix count : 7</h6><h6>Trix Amount : 1.152K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "BG",
          18,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Bulgaria</strong></b></h5><h6>Trix count : 18</h6><h6>Trix Amount : 328</h6><h6>ACK % 100%</h6>",
        ],
        [
          "MN",
          14,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Mongolia</strong></b></h5><h6>Trix count : 14</h6><h6>Trix Amount : 69</h6><h6>ACK % 100%</h6>",
        ],
        [
          "CO",
          23,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Colombia</strong></b></h5><h6>Trix count : 23</h6><h6>Trix Amount : 408</h6><h6>ACK % 100%</h6>",
        ],
        [
          "NZ",
          3,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>New Zealand</strong></b></h5><h6>Trix count : 3</h6><h6>Trix Amount : 1.427K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "NL",
          70,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Netherlands</strong></b></h5><h6>Trix count : 70</h6><h6>Trix Amount : 18.458K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "EE",
          5,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Estonia</strong></b></h5><h6>Trix count : 5</h6><h6>Trix Amount : 28</h6><h6>ACK % 100%</h6>",
        ],
        [
          "AO",
          1,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Angola</strong></b></h5><h6>Trix count : 1</h6><h6>Trix Amount : 0</h6><h6>ACK % 100%</h6>",
        ],
        [
          "TW",
          9,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Taiwan</strong></b></h5><h6>Trix count : 9</h6><h6>Trix Amount : 381</h6><h6>ACK % 100%</h6>",
        ],
        [
          "ZA",
          141,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>South Africa</strong></b></h5><h6>Trix count : 141</h6><h6>Trix Amount : 11.589K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "GI",
          1,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Gibraltar</strong></b></h5><h6>Trix count : 1</h6><h6>Trix Amount : 34</h6><h6>ACK % 100%</h6>",
        ],
        [
          "ID",
          4,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Indonesia</strong></b></h5><h6>Trix count : 4</h6><h6>Trix Amount : 166</h6><h6>ACK % 100%</h6>",
        ],
        [
          "BS",
          0,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Bahamas</strong></b></h5><h6>Trix count : 20</h6><h6>Trix Amount : 348</h6><h6>ACK % 100%</h6>",
        ],
        [
          "CY",
          4,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Cyprus</strong></b></h5><h6>Trix count : 4</h6><h6>Trix Amount : 859</h6><h6>ACK % 100%</h6>",
        ],
        [
          "LY",
          1,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Libya</strong></b></h5><h6>Trix count : 1</h6><h6>Trix Amount : 0</h6><h6>ACK % 100%</h6>",
        ],
        [
          "KE",
          1,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Kenya</strong></b></h5><h6>Trix count : 1</h6><h6>Trix Amount : 285</h6><h6>ACK % 100%</h6>",
        ],
        [
          "MU",
          1,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Mauritius</strong></b></h5><h6>Trix count : 1</h6><h6>Trix Amount : 53</h6><h6>ACK % 100%</h6>",
        ],
        [
          "CH",
          9,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Switzerland</strong></b></h5><h6>Trix count : 9</h6><h6>Trix Amount : 1.434K</h6><h6>ACK % 100%</h6>",
        ],
        [
          "BN",
          3,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Brunei Darussalam</strong></b></h5><h6>Trix count : 3</h6><h6>Trix Amount : 428</h6><h6>ACK % 100%</h6>",
        ],
        [
          "MT",
          1,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Malta</strong></b></h5><h6>Trix count : 1</h6><h6>Trix Amount : 916</h6><h6>ACK % 100%</h6>",
        ],
        [
          "MV",
          6,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Maldives</strong></b></h5><h6>Trix count : 6</h6><h6>Trix Amount : 43</h6><h6>ACK % 100%</h6>",
        ],
        [
          "SC",
          2,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Seychelles</strong></b></h5><h6>Trix count : 2</h6><h6>Trix Amount : 0</h6><h6>ACK % 100%</h6>",
        ],
        [
          "RO",
          6,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Romania</strong></b></h5><h6>Trix count : 6</h6><h6>Trix Amount : 510</h6><h6>ACK % 100%</h6>",
        ],
        [
          "TH",
          8,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Thailand</strong></b></h5><h6>Trix count : 8</h6><h6>Trix Amount : 945</h6><h6>ACK % 100%</h6>",
        ],
        [
          "KN",
          1,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Saint Kitts and Nevis</strong></b></h5><h6>Trix count : 1</h6><h6>Trix Amount : 53</h6><h6>ACK % 100%</h6>",
        ],
        [
          "NA",
          2,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Namibia</strong></b></h5><h6>Trix count : 2</h6><h6>Trix Amount : 285</h6><h6>ACK % 100%</h6>",
        ],
        [
          "DJ",
          3,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Djibouti</strong></b></h5><h6>Trix count : 3</h6><h6>Trix Amount : 428</h6><h6>ACK % 100%</h6>",
        ],
        [
          "GE",
          5,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Georgia</strong></b></h5><h6>Trix count : 5</h6><h6>Trix Amount : 0</h6><h6>ACK % 100%</h6>",
        ],
        [
          "CL",
          4,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Chile</strong></b></h5><h6>Trix count : 4</h6><h6>Trix Amount : 353</h6><h6>ACK % 100%</h6>",
        ],
        [
          "TN",
          1,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Tunisia</strong></b></h5><h6>Trix count : 1</h6><h6>Trix Amount : 0</h6><h6>ACK % 100%</h6>",
        ],
        [
          "AL",
          2,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Albania</strong></b></h5><h6>Trix count : 2</h6><h6>Trix Amount : 285</h6><h6>ACK % 100%</h6>",
        ],
        [
          "PE",
          1,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Peru</strong></b></h5><h6>Trix count : 1</h6><h6>Trix Amount : 0</h6><h6>ACK % 100%</h6>",
        ],
        [
          "UY",
          1,
          "<h4><b><strong>undefined</strong></b></h4><h5><b><strong>Uruguay</strong></b></h5><h6>Trix count : 1</h6><h6>Trix Amount : 203</h6><h6>ACK % 100%</h6>",
        ],
      ],

      chartOptions: {
        // magnifyingGlass: {enable: true, zoomFactor: 7.5},

        // region: "145",
        height: 700,
        tooltip: { isHtml: true },

        datalessRegionColor: "#f8f9fa",
        colorAxis: {
          // colors: ["#7e7daa",'#297d86','#1c19c1', '#080a48'],
          // colors:['#C9BB8E','#F26E01','#8D4004','#60100B']
          // colors:['blue','green','red']
          // colors:['#52B2BF','#2832C2','#6CB4EE','#0039A6']
          // colors:['green','orange','yellow','red']
          // colors:['gray','#000']
          // colors: ['#acb2b9', '#2f3f4f']
          colors: ["#b8f8b8",'#008000', "#213a25"],

        },
        backgroundColor: "#799ed5",
        displayMode: "auto",
        // forceIFrame:true,
        keepAspectRatio: false,
        // enableRegionInteractivity:false,
      },
    };
  },
};
</script>