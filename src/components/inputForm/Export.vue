<template>
  <div class="congratulation text-start p-3">
    <h3>Export Email</h3>
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        v-model="email"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">Email</label>
      <div class="emailcompany" v-if="email">
        <div>
          <p class="fs-6 mt-2">company</p>
          <addmoreVue event="key">
            <template #body>
              <div class="pt-2">
                <label  class="form-label">Key</label>
               <div class=" "> 
                <input
                  type="text"
                  class="form-control w-75"
                />
               
               </div>
              </div>
            </template>
          </addmoreVue>
        </div>
        <div class="option grid gap-3">
          <div class="pt-2"><h5>option</h5></div>
          <div class="mt-3" style="margin-left: 50px">
            <div class="form-check form-check-inline w-25 w-25">
              <input
                type="checkbox"
                class="form-check-input"
                id="inlineCheckbox1"
                value="zero"
              />
              <label class="form-check-label" for="inlineCheckbox1">zero</label>
            </div>
            <div class="form-check form-check-inline w-25">
              <input
                type="checkbox"
                class="form-check-input"
                id="inlineCheckbox1"
                value="six"
              />
              <label class="form-check-label" for="inlineCheckbox1">six</label>
            </div>
            <div class="form-check form-check-inline w-25">
              <input
                type="checkbox"
                class="form-check-input"
                id="inlineCheckbox1"
                value="seven"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >seven</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- -->
  </div>
</template>
    
    <script>
import addmoreVue from "./addmore.vue";
export default {
  name: "EcommerceMedal",
  data() {
    return {
      email: true,
    };
  },
  components: {
    addmoreVue,
  },
  methods: {},
};
</script>
    
    <style lang="scss" scoped>
@import "../../assets/style_scss/ecommerce/ecommerce.scss";
@import "../../assets/style_scss/Partials/mixin";
@import "../../assets/style_scss/Partials/variables";
.congratulation {
  color: var(--color_text);
}
</style>