
<template>
  <div class="section w-100">
    <div class="row component gap-0 p-0 m-0">
      <div class="col-12 p-2">
        <cardVue>
          <template #card >
            <div class="d-inline-block position-relative float-end pb-2" >
              <input
                type="button"
                value="save"
                class="btn btn-success"
                @click="save"
              />
            </div>
            <!-- {{ time }} -->
          </template>
        </cardVue>
      </div>
      <div class="EcommerceMedal col-sm-12 col-md-6 col-xl-6 p-2">
        <webhook @sendKey="sendKey" @reseveKey="reseveKey" />
      </div>
      <div class="EcommerceMedal col-sm-12 col-md-6 col-xl-6 p-2">
        <ExportVue @email_Op="email_Op" @emails_key="emails_key" />
      </div>
      <div class="EcommerceMedal col-sm-12 col-md-12 col-xl-6 p-2">
        <emailsendVue @newEmail="newemailCon" @editEmail="editEmail" />
      </div>
      <div class="EcommerceMedal col-sm-12 col-md-12 col-xl-6 p-2">
        <exampelVue @data="data_email" @delet="delet_row" />
      </div>
    </div>
    
  </div>
</template>
    
    <script>
import cardVue from "../compon/card.vue";
import emailsendVue from "./email_send.vue";
import exampelVue from "./exampel.vue";
import ExportVue from "./Export.vue";
import webhook from "./webhook.vue";
export default {
  name: "ecommerce",

  data() {
    return {
      time:0,
      keys: {
        reseveKey: null,
        sendKey: null,
      },
      export: {
        email_Op: [],
        emails_key: [],
      },
     emailsCon:{
      emailConfig: [],
      emailConfigEdit: []
     },
      items: {
        AE: [],
        delet_row: [],
      },
    };
  },
  components: {
    webhook,
    ExportVue,
    emailsendVue,
    cardVue,
    exampelVue,
  },
  methods: {
    reseveKey(e) {
      if (e) {
        this.keys.reseveKey = e;
      }
    },
    sendKey(e) {
      if (e) {
        this.keys.sendKey = e;
      }
    },

    email_Op(e) {
      this.export.email_Op = e;
    },
    newemailCon(e) {
      this.emailsCon.emailConfig.push(e);
    },
    editEmail(e) {
      this.emailsCon.emailConfigEdit.push(e);
    },
    emails_key(e) {
      //   this.export.emails_key = e;
      console.log("e");
    },
    data_email(e) {
      this.items.AE.push(e);
    },
    delet_row(e) {
      this.items.delet_row.push(e);
    },
    save() {
      console.log(this.keys);
      console.log(this.export);
      console.log(this.emailsCon);
    
      console.log(this.items);
    },
  },
//   created(){
//     setInterval(() => {
//   this.time++
// }, 1000);

//   }
};
</script>
    
    <style scoped>
.component {
  margin-right: 1rem;
  margin-left: 0rem;
}

@media screen and(max-width: 765px) {
  .component {
    margin-right: 1px;
    margin-left: 3px;
  }
}
</style>