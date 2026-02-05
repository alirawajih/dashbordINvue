<template>
  <div class="row">
    <div class="col-12" v-if="data">
      <div class="email row m-2">
        <div   >
          <div class="p-2 bordar">
            <div
              data-v-10417946=""
              class="align-content-center justify-content-between"
            >
              <div
                data-v-10417946=""
                role="group"
                class="input-group input-group-merge d-block"
                style=""
              >
                <div>
                  <vue-feather
                    class="backbutton"
                    @click="$emit('close')"
                    type="arrow-left"
                  ></vue-feather>
                </div>
                <div data-v-10417946="" class="input-group-prepend d-flex">
                  <b-avatar class="p-0" :src="data.from.avatar"></b-avatar>
                  <h2 class="ps-3">{{ data.from.name }}</h2>
                </div>
                <div class="pt-3">
                  <h6 class="text-muted">{{ data.from.email }}</h6>
                </div>
                <div class="rightbutton">
                  <span class="d-inline text-muted fs-6">{{ date }}</span>
                  <vue-feather
                    type="more-vertical"
                    class="dropdownbutton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></vue-feather>
                  <ul class="dropdown-menu menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="p-2 bordar">
            <div class="masse" >
              <h5 v-html="data.message" ></h5>
             
            </div>
            <div class="event pt-5" >
              <p class="fs-6 " >
                Click here to <a href="#">Reply</a> or <a href="#">Forward</a>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { format } from "date-fns";

export default {
  props: ["data"],
  data() {
    return {};
  },
  computed: {
    date() {
      return format(new Date(this.data.time), "yyyy-MMM-dd");
    },
  },
};
</script>
<style scoped>
a {
  color: #67bd11;
  text-decoration: none;
  font-size: 15px;
  
}
.rightbutton {
  display: inline;
  position: absolute;
  top: 0px;
  right: 0px;
}
.menu {
  background: #283046;
}
.menu a {
  color: white;
}
.menu a:hover {
  color: black;
}
.backbutton:hover {
  color: rgba(0, 128, 0, 0.838);
}
.masse{
  word-break: break-word;
}
</style>