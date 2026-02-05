<template>
  <div class="congratulation text-start text-white p-3">
    <h5>Congratulations 🎉 sss!</h5>
    <b-card-text class="font-small-3 textgray">
      You have won gold medal
    </b-card-text>
    <h3 class="mb-75 mt-2 pt-50">
      <a href="#">ssss</a>
    </h3>
    <button type="button"  class=" btn btn-primary text-white p-2">View Sales</button>
    <img
      :src="require('@/assets/images/illustration/badge.svg')"
      alt="Medal Pic"
    />
  </div>
</template>

<script>
export default {
  name: "EcommerceMedal",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style_scss/ecommerce/ecommerce.scss";
</style>