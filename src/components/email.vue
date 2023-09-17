<template>
  <div class="email row m-2">
    <div
      class="col-lg-8 col-md-12 listemail showEmail"
      :class="openEmail ? 'showEmail-open' : 'showEmail-close'"
    >
      <showEmail :data="emailData" @close="close()" />
    </div>
    <div class="col-lg-8 col-md-12 listemail">
      <div class="p-2 bordar">
        <div
          data-v-10417946=""
          class="d-flex align-content-center justify-content-between"
        >
          <div
            data-v-10417946=""
            role="group"
            class="input-group input-group-merge"
            style=""
          >
            <!---->
            <div data-v-10417946="" class="input-group-prepend">
              <div data-v-10417946="" class="input-group-text Searchpar">
                <svg
                  data-v-10417946=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-muted feather feather-search"
                >
                  <circle data-v-10417946="" cx="11" cy="11" r="8"></circle>
                  <line
                    data-v-10417946=""
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                  ></line>
                </svg>
              </div>
            </div>
            <input
              data-v-10417946=""
              type="text"
              placeholder="Search email"
              class="form-control Searchpar"
              id="__BVID__637"
            /><!---->
          </div>
        </div>
      </div>
      <div class="p-2 bordar">
        <div
          data-v-10417946=""
          class="d-flex align-content-center justify-content-between"
        >
          <div class="form-check fs-6 ms-3">
            <input
              type="checkbox"
              class="form-check-input checkbox"
              id="exampleCheck1"
            />
            <label class="form-check-label text-secondary" for="exampleCheck1"
              >Select All</label
            >
          </div>
        </div>
      </div>
      <div class="m-0" style="overflow-y: scroll; height: 83em">
        <ul
          v-for="email in emails"
          :key="email.id"
          class="email-slist"
        >
          <li class="emails">
            <div class="d-flex ps-3">
              <div   >
                <div class="p-2">
                  <label
                    for="toggler "
                    style="cursor: pointer"
                   
                  >
                    <b-avatar class="p-0" :src="email.from.avatar"></b-avatar>
                  </label>
                </div>
                <div>
                  <div class="form-check fs-6">
                    <input
                      type="checkbox"
                      class="form-check-input checkbox"
                      id="exampleCheck1"
                    />
                  </div>
                </div>
              </div>
              <div class="pt-2 d-flex"  @click="showEmaildata(email)">
                <div class="flex-item">
                  <h6 class="text-white-60">
                    {{ email.from.name }}
                  </h6>
                  <h6 class="text-truncate">
                    {{ email.subject }}
                  </h6>
                  <p class=" fs-6">
                    {{ subject(email.message) }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { emails } from "../db/emails";
import showEmail from "./showEmail.vue";
export default {
  components: { showEmail },
  data() {
    return {
      emails: [],
      openEmail: false,
      emailData: null,
    };
  },
  created() {
    this.emails = emails.emails;
  },
  methods: {
    subject(messag) {
      let messages = messag.replace(/<\/?[^>]+(>|$)/g, "");
      return messages.substr(0, 100) + "....";
    },
    showEmaildata(data) {
      this.openEmail = true;
      this.emailData = data
    },
    close(){
      this.openEmail = false;
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/style_scss/components/emailStyle.scss";
</style>