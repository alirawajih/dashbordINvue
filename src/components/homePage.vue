<template>
  <div class="row justify-content-center g-3 m-0">
    <div class="col-lg-4 col-md-12 d-flex justify-content-center">
      <router-link :to="{ name: 'login', params: { name: 'DashbordOne' } }">
        <flipCard>
          <template v-slot:front>
            <div class="frontCard d-flex align-items-center">
              <img
                src="../assets/images/pages/register-v2.svg"
                style="width: 300px; height: 300px"
              />
            </div>
          </template>
          <template v-slot:back>
            <div class="backCard">
              <h1>DashbordOne</h1>
            </div>
          </template>
        </flipCard>
      </router-link>
    </div>
    <div class="col-xl-3 col-lg-4 col-md-12 d-flex justify-content-center">
      <router-link :to="{ name: 'login', params: { name: 'DashbordTow' } }">
        <flipCard>
          <template v-slot:front>
            <div class="frontCard d-flex align-items-center">
              <img
                src="../assets/images/pages/coming-soon-dark.svg"
                style="width: 300px; height: 300px"
              />
            </div>
          </template>
          <template v-slot:back>
            <div class="backCard">
              <h1>DashbordTow</h1>
            </div>
          </template>
        </flipCard>
      </router-link>
    </div>
    <div class="col-lg-4 col-md-12 d-flex justify-content-center">
      <flipCard>
        <template v-slot:front>
          <div class="frontCard">
            <img
              src="../assets/images/pages/under-maintenance-dark.svg"
              style="width: 300px; height: 300px"
            />
          </div>
        </template>
        <template v-slot:back>
          <div class="backCard">
            <h2>vue 3</h2>
          </div>
        </template>
      </flipCard>
    </div>
    
  </div>
</template>
<script>
import flipCard from "./compon/flipCard.vue";
export default {
    name : "homePage",
  components: {
    flipCard,
  },
};
</script>
<style scoped>
.row {
  /* padding-top: 13%; */
  background: #283046;
  /* min-height: 1003px; */
  position: absolute;
  inset:0 0 0 0;
  align-content: center;
  
}
@media (max-width: 992px) {
  .row{
    position: relative;
  }
}

</style>