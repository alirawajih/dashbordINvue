<template>
  <div class="congratulation text-start text-white p-3">
    <h3>Email configuration</h3>
    <form class="ps-3" @submit.prevent="form">
      <div class="emailcompany">
        <p class="fs-6 mt-2">data</p>
        <!-- <addmoreVue>
          <template v-slot:body>
            <div class="mb-3 gap-3">
                
                <div class="mb-3 w-75">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div><div class="mb-3 w-75">
                <label for="exampleFormControlInput1" class="form-label"
                  >url</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div><div class="mb-3 w-75">
                <label for="exampleFormControlInput1" class="form-label"
                  >key</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <vue-feather class="ms-3" type="trash-2"> </vue-feather>
            </div>
          </template>
        </addmoreVue> -->

        <div class="table_scroll">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">email</th>
                <th scope="col">key</th>
                <th scope="col">url</th>
                <th scope="col">opiont</th>
              </tr>
            </thead>
            <tbody>
              <tr class="" v-for="(data, index) in emails_id" :key="index">
                <th scope="row">{{ data.id }}</th>
                <td>
                  <span>{{ data.email }}</span>
                </td>
                <td>
                  <span>{{ data.key }}</span>
                </td>
                <td>
                  <span>{{ data.url }}</span>
                </td>
                <td>
                  <vue-feather
                    data-bs-toggle="modal"
                    data-bs-target="#edit_email"
                    type="edit"
                    style="cursor: pointer"
                    @click="show_email(data.id)"
                  ></vue-feather>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-grid gap-2">
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="button"
          >
            add row
          </button>
        </div>
      </div>
    </form>
  </div>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div class="modal-dialog" style="margin-top: 15%">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New Email</h1>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addemail">
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Email:</label
                >
                <input
                  type="email"
                  v-model.lazy="new_email.email"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Url:</label>
                <input
                  type="text"
                  v-model.lazy="new_email.url"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Key</label>
                <input
                  type="text"
                  v-model.lazy="new_email.key"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">add Email</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="edit_email"
      tabindex="-1"
      aria-labelledby="edit_email"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div class="modal-dialog" style="margin-top: 15%">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New Email</h1>
          </div>
          <div class="modal-body">
            <form @submit.prevent="edit_email(editemail)">
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Email:</label
                >
                <input
                  type="email"
                  v-model.lazy="editemail.email"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Url:</label>
                <input
                  type="text"
                  v-model.lazy="editemail.url"
                  class="form-control"
                  id="recipient-name"
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Key</label>
                <input
                  type="text"
                  v-model.lazy="editemail.key"
                  class="form-control"
                  id="recipient-name"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button type="submit" class="btn btn-primary">
                  edit Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import addmoreVue from "./addmore.vue";
export default {
  name: "EcommerceMedal",
  emits: {
    newEmail: null,
    editEmail: null,
  },
  data() {
    return {
      reseve: true,
      send: true,
      reseveKey: null,
      sendKey: null,
      emails: [],
      emails_id: [
        {
          id: 1,
          email: "asas@yahoo.com",
          key: "aklsjlckajslkajkczzzzzzsaakjscnaskcas",
          url: "https://www.cda.com",
        },
        {
          id: 2,
          email: "asaxzcz@yahoo.com",
          key: "ccascsckajslkhjgjhgbkscnakjcascsacxs",
          url: "https://www.ads.com",
        },
        {
          id: 3,
          email: "cavavas@yahoo.com",
          key: "cascassjlckajslkajkansaaskcas",
          url: "https://www.asas.com",
        },
      ],
      new_email: {},
      editemail: [],
      addemailstate: true,
      editemailstate: true,
    };
  },
  components: {
    addmoreVue,
  },
  methods: {
    form() {
      console.log(this.reseveKey, this.sendKey);
    },
    addrow() {
      this.emails_id.push({ id: this.emails_id.length + 1 });
    },
    addemail() {
      this.emails_id.push({
        id: this.emails_id.length + 1,
        email: this.new_email.email,
        key: this.new_email.key,
        url: this.new_email.url,
      });
      this.$emit("newEmail", this.new_email);
      this.new_email = [];
      this.addemailstate = false;
    },
    show_email(id) {
      this.emails_id.filter((i) => {
        if (i.id == id) {
          this.editemail = i;
        }
      });
    },
    edit_email(data) {
      this.emails_id.map((i) => {
        if (i.id == data.id) {
          alert("success");
          this.$emit("editEmail", data);
        }
      });
    },
  },
  created() {},
};
</script>
    
    <style lang="scss" scoped>
@import "../../assets/style_scss/ecommerce/ecommerce.scss";
@import "../../assets/style_scss/Partials/mixin";
@import "../../assets/style_scss/Partials/variables";
.form-control {
  background: transparent;
  border: 1px solid black;
}
td {
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.EmailGonf {
  background: gray;
  border-radius: 5px;
}

.table {
  color: var(--color_text);
}
.tableAnalytics {
  height: 50em;
}
th,
td {
  color: var(--color_text);
}
h3 {
  color: var(--color_text);
}
p {
  color: var(--color_text);
}
.table_scroll {
  overflow-y: scroll;
  overflow-x: hidden;

  height: 15em;
}
.table_scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px gray;
  display: none;
}

.table_scroll::-webkit-scrollbar {
  width: 7px;
  /*  background-color: #e0d2d2; */
}

.table_scroll::-webkit-scrollbar-thumb {
  background-color: #0000007e;
  border-radius: 5px;
}
</style>