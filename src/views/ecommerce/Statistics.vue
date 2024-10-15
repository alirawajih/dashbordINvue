<template>
  <div class="Statistics row position-relative p-2 m-0">
    <div class="col-12 p-2">
      <b-card-title class="float-start fs-5">Statistics</b-card-title>
      <b-card-text class="font-small-2 mr-25 mb-0 float-end text-white-50">
        Updated 1 month ago
      </b-card-text>
    </div>
    <div class="col-12 row">
      <div class="col-xl-3 col-md-6  cols-sm-12">
        <b-card-body class="statistics-body">
          <b-row>
            <b-col class="d-flex">
              <div class="p-2 featherdiv">
                <vue-feather type="trending-up"></vue-feather>
              </div>
              <div no-body class="ps-3">
                <div class="fs-6">
                  <h4 class="font-weight-bolder mb-0">555k</h4>
                  <b-card-text class="font-small-3 mb-0"> sasle </b-card-text>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </div>
      <div class="col-xl-3 col-md-6 col-sm-12">
        <b-card-body class="statistics-body">
          <b-row>
            <b-col class="d-flex">
              <div class="p-2 featherdiv">
                <vue-feather type="trending-up"></vue-feather>
              </div>
              <div no-body class="ps-3">
                <div class="fs-6">
                  <h4 class="font-weight-bolder mb-0">555k</h4>
                  <b-card-text class="font-small-3 mb-0"> sasle </b-card-text>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </div>
      <div class="col-xl-3 col-md-6 col-sm-12">
        <b-card-body class="statistics-body">
          <b-row>
            <b-col class="d-flex">
              <div class="p-2 featherdiv">
                <vue-feather type="trending-up"></vue-feather>
              </div>
              <div no-body class="ps-3">
                <div class="fs-6">
                  <h4 class="font-weight-bolder mb-0">555k</h4>
                  <b-card-text class="font-small-3 mb-0"> sasle </b-card-text>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </div>
      <div class="col-xl-3 col-md-6 col-sm-12">
        <b-card-body class="statistics-body">
          <b-row>
            <b-col class="d-flex">
              <div class="p-2 featherdiv">
                <vue-feather type="trending-up"></vue-feather>
              </div>
              <div no-body class="ps-3">
                <div class="fs-6">
                  <h4 class="font-weight-bolder mb-0">555k</h4>
                  <b-card-text class="font-small-3 mb-0"> sasle </b-card-text>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Statistics",

  compatConfig: { MODE: 3 },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style_scss/Partials/mixin";
@import "../../assets/style_scss/Partials/variables";
.Statistics {
 @include card;
}
.featherdiv {
  background: white;
  color: #7367f0;
  height: 40px;
  border-radius: 19px;
}
h4,p{
  color: var(--color_text);
}
</style>