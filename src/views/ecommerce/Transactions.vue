<template>
  <div class="m-0 p-0 maindiv">
    <div class="states text-start text-white p-3 d-flex">
      <div   >
        <div>
          <h5>Transactions</h5>
        </div>
      </div>

      <div class="btn-group groupmenu">
        <vue-feather
          type="more-vertical"
          class="dropdownbutton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></vue-feather>

        <ul class="dropdown-menu menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div class="states text-start text-white p-2 d-flex">
      <div class="d-flex">
        <div class="p-2 featherdiv">
          <vue-feather type="activity"></vue-feather>
        </div>
        <span class="textgray p-2">activity</span>
      </div>

      <div class="rightdiv d-flex pt-3">
        <div class="p-1 textgray">
          <span class="text-success">+$30</span>
        </div>
      </div>
    </div>
    <div class="states text-start text-white p-2 d-flex">
      <div class="d-flex">
        <div class="p-2 featherdiv">
          <vue-feather type="book"></vue-feather>
        </div>
        <span class="textgray p-2">book</span>
      </div>

      <div class="rightdiv d-flex pt-3">
        <div class="p-1 textgray">
          <span class="text-danger">-$50</span>
        </div>
      </div>
    </div>
    <div class="states text-start text-white p-2 d-flex">
      <div class="d-flex">
        <div class="p-2 featherdiv">
          <vue-feather type="credit-card"></vue-feather>
        </div>
        <span class="textgray p-2">credit-card</span>
      </div>

      <div class="rightdiv d-flex pt-3">
        <div class="p-1 textgray">
          <span class="text-success">+$25</span>
        </div>
      </div>
    </div>
    <div class="states text-start text-white p-2 d-flex">
      <div class="d-flex">
        <div class="p-2 featherdiv">
          <vue-feather type="speaker"></vue-feather>
        </div>
        <span class="textgray p-2">speaker</span>
      </div>

      <div class="rightdiv d-flex pt-3">
        <div class="p-1 textgray">
          <span class="text-primary">$25</span>
        </div>
      </div>
    </div>
    <div class="states text-start text-white p-2 d-flex">
      <div class="d-flex">
        <div class="p-2 featherdiv">
          <vue-feather type="phone"></vue-feather>
        </div>
        <span class="textgray p-2">phone</span>
      </div>

      <div class="rightdiv d-flex pt-3">
        <div class="p-1 textgray">
          <span class="text-success">+$25</span>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  data: function () {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../../assets/style_scss/ecommerce/transaction.scss";
</style>