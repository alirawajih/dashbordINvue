<template>
  <div class="meetup text-white p-0">
    <div style="">
      <img
        class="rounded img-fluid"
        height="170"
        src="@/views/img/email.de935b8f.svg"
      />
    </div>
    <div class="compont d-flex p-3">
      <div>
        <div class="date">
          <h4>THU</h4>
          <h6>20</h6>
        </div>
      </div>

      <div class="ps-3">
        <h4>Developer Meetup</h4>
        <span class="textgray">Meet world popular developers</span>
      </div>
    </div>
    <div class="p-2">
      <div class="d-flex">
        <div class="p-2 feathercategory d-flex textsize">
          <span>
            <vue-feather type="calendar"></vue-feather>
          </span>
        </div>
        <div class="p-2">
          <h6>Sat, May 25, 2020</h6>
          <span class="textgray textgray">10:AM to 6:PM</span>
        </div>
      </div>

      <div class="d-flex">
        <div class="p-2 feathercategory d-flex textsize">
          <span>
            <vue-feather type="info"></vue-feather>
          </span>
        </div>
        <div class="p-2">
          <h6>Central Park</h6>
          <span class="textgray">Manhattan, New york Cit</span>
        </div>
      </div> <div class="d-flex">
        <div class="p-2 feathercategory d-flex textsize">
          <span>
            <vue-feather type="info"></vue-feather>
          </span>
        </div>
        <div class="p-2">
          <h6>Central Park</h6>
          <span class="textgray">Manhattan, New york Cit</span>
        </div>
      </div>
      
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "DeveloperMettup",
  data() {
    return {};
  },
};
</script>
  
  <style lang="scss" scoped>
@import "../../assets/style_scss/ecommerce/Developer.scss";
</style>