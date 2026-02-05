<template>
  <div class="section w-100">
  
    <div class="row contant gap-0 p-0 m-0">
        <div class=" GolOverview col-sm-12 col-md-6 col-xl-7 p-2">
        <GolOverview />
      </div>
      <div class=" OrdersAnalyticVue col-sm-12 col-md-6 col-xl-5 p-2">
        <OrdersAnalyticVue />
      </div>
      <div class=" tableAnalytics col-sm-12 col-md-12 col-xl-12 p-2">
        <tableAnalytics />
      </div>
    </div>
  </div>
</template>

<script>
import tableAnalytics from "./tableAnalytics.vue";
import GolOverview from "./GolOverviewAny.vue";
import OrdersAnalyticVue from './OrdersAnalytic.vue';
export default {
  name: "analytics",

  data() {
    return {};
  },
  components: {
    tableAnalytics,
    GolOverview,
    OrdersAnalyticVue
  },
};
</script>

<style scoped>

.contant {
  margin-right: 1rem;
  margin-left: 0rem;
}

@media screen and(max-width: 765px) {
  .contant {
    margin-right: 1px;
    margin-left: 3px;
  }
  
}
</style>
