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
        <div >
          <p class="fs-6 mt-2">company</p>
          <label class="form-label">Key</label>
                <div class=" pt-2" v-for="email in emails" :key="email.id">
                  <input type="text" v-model="email.key" class="form-control w-75" id="key" />
                </div>
          <!-- <addmoreVue event="key" >
            <template #body >
              <div class="pt-2  " >
                <div class=" ">
                  <input type="text" class="form-control w-75" id="key" />
                </div>
              </div>
            </template>
          </addmoreVue> -->
        </div>
        <div class="option grid gap-3">
          <div class="pt-2"><h5>option</h5></div>
          <div class="mt-3" style="margin-left: 50px">
            <div class="form-check form-check-inline w-25 w-25">
              <input
                type="checkbox"
                class="form-check-input"
                value="zero"
                v-model="Option"
              />
              <label class="form-check-label">zero</label>
            </div>
            <div class="form-check form-check-inline w-25">
              <input
                type="checkbox"
                class="form-check-input"
                value="six"
                v-model="Option"
              />
              <label class="form-check-label">six</label>
            </div>
            <div class="form-check form-check-inline w-25">
              <input
                type="checkbox"
                class="form-check-input"
                value="seven"
                v-model="Option"
              />
              <label class="form-check-label">seven</label>
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
      emails:[{key:'emas'}],
      Option: [],
    };
  },
  components: {
    addmoreVue,
  },
  methods: {},
  watch: {
    Option() {
      this.$emit("email_Op", this.Option);
    },
    emails(){
        // this.$emit('emails_key', this.emails)
        console.log('sss')
    }
  },
};
</script>
    
    <style lang="scss" scoped>
@import "../../assets/style_scss/ecommerce/ecommerce.scss";
@import "../../assets/style_scss/Partials/mixin";
@import "../../assets/style_scss/Partials/variables";
.congratulation {
  color: var(--color_text);
}
#key {
  background: transparent;
  color: var(--color_text);
  border: solid 1px var(--color_text);
}
</style>