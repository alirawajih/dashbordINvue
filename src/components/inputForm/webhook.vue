<template>
  <div class="congratulation text-start  p-3" >
    <h3>webhook</h3>
    <form class="ps-3" @submit.prevent="form">
      <div class="border-bottom pb-5">
        <div class="reseve pt-3 d-grid">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="reseve"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault"
              >reseve</label
            >
          </div>
          <div class="d-inline-flex" v-if="reseve">
            <input
              name="key"
              v-model="reseveKey"
              id="flexCheckDefault"
              class="form-control w-75"
              type="text"
              style="color: white; background: transparent"
            />
            <label class="form-check-label ps-3 pt-2" for="flexCheckDefault">
              key
            </label>
          </div>
        </div>
      </div>

      <div class="send pt-3 d-grid">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="send"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >send</label
          >
        </div>
        <div class="">
          <div class="" v-if="send">
            <div class="d-flex">
              <input
                name="key"
                v-model="sendKey"
                id="flexCheckDefault"
                class="form-control w-75"
                type="text"
                style="color: white; background: transparent"
              />
              <label class="form-check-label ps-3 pt-2" for="flexCheckDefault">
                key
              </label>
            </div>
           
          </div>
        </div>
      </div>

      <!-- <button type="subeit" class="btn btn-primary">Primary</button> -->
    </form>
  </div>
</template>
  
  <script>
import addmoreVue from "./addmore.vue";
export default {
  name: "EcommerceMedal",
  data() {
    return {
      reseve: true,
      send: true,
      reseveKey: null,
      sendKey: null,
      emails: [],
      courseName: "",
    };
  },
  components: {
    addmoreVue,
  },
  methods: {
    form() {
      console.log(this.reseveKey, this.sendKey);
    },
  },
};
</script>
  
  <style lang="scss" scoped>
@import "../../assets/style_scss/ecommerce/ecommerce.scss";
@import "../../assets/style_scss/Partials/mixin";
@import "../../assets/style_scss/Partials/variables";
.congratulation{
    color: var(--color_text);

}
</style>