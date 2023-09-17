<template>
  <div class="section w-100">
    <div class="row cc gap-0 p-0 m-0">
      <div class="EcommerceMedal col-sm-12 col-md-5 col-xl-4 p-2">
        <EcommerceMedal />
      </div>
      <div class="Statistics col-sm-12 col-md-7 col-xl-8 p-2">
        <Statistics />
      </div>

      <div class="row col-sm-12 col-md-5 col-xl-4 p-2 m-0">
        <div class="col-12 p-0 m-0 row">
          <div class="orders col-6 pe-2 ps-0">
            <orders />
          </div>
           <div class="profit col-6 ps-2 pe-0">
            <profit />
          </div>
          <div class="Eanings col-12 pt-4">
            <Eanings />
          </div>
        </div>
      </div> 
      <div class="revenue-report col-sm-12 col-md-7 col-xl-8 p-2">
        <revenue-report />
      </div>
      <div class="Companytabel col-sm-12 col-md-7 col-xl-8 p-2">
        <Companytabel />
      </div>
      <div class="DeveloperMeetup row col-sm-12 col-md-5 col-xl-4 p-2 m-0">
        <DeveloperMeetup />
      </div>
      <div class="BrowserStates row col-sm-12 col-md-4 col-xl-4 p-2 m-0">
        <BrowserStates />
      </div>
      <div class="goaloverview row col-sm-12 col-md-4 col-xl-4 p-2 m-0">
        <goaloverview />
      </div>
      <div class="transactions row col-sm-12 col-md-4 col-xl-4 p-2 m-0">
        <transactions />
      </div>
      
     
      
    </div>
  </div>
</template>
  
  <script>
import EcommerceMedal from "@/views/ecommerce/EcommerceMedal.vue";
import Statistics from "@/views/ecommerce/Statistics.vue";
import Orders from "@/views/ecommerce/Orders.vue";
import Profit from "@/views/ecommerce/Profit.vue";
import Eanings from "@/views/ecommerce/Eanings.vue";
import RevenueReport from "@/views/ecommerce/RevenueReport.vue";
import Companytabel from "@/views/ecommerce/Companytable.vue";
import DeveloperMeetup from "./DeveloperMeetup.vue";
import BrowserStates from "./BrowserStates.vue";
import goaloverview from "./goaloverview.vue";
import Transactions from "./Transactions.vue";

import { data } from "../../db/dataAnalytics";

export default {
  name: "ecommerce",

  data() {
    return {
      dataAnalytics: [],
    };
  },
  components: {
    RevenueReport,
    Eanings,
    Profit,
    Orders,
    EcommerceMedal,
    Statistics,
    Companytabel,
    DeveloperMeetup,
    BrowserStates,
    goaloverview,
    Transactions,
  
  },
  created() {
    this.dataAnalytics = data.data;
  },
};
</script>
  
  <style scoped>
.cc {
  margin-right: 1rem;
  margin-left: 0rem;
}

@media screen and(max-width: 765px) {
  .cc {
    margin-right: 1px;
    margin-left: 3px;
  }
}
</style>