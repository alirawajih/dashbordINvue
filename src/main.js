import { createApp } from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue-next'

import App from './App.vue'
import router from './router'
import store from "@/store";
// import 'boxicons'
import VueFeather from 'vue-feather';
import globalMethods from './globalMethods';
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import VueApexCharts from "vue3-apexcharts";
// import { Can, abilitiesPlugin } from '@casl/vue';
createApp(App).use(store)

.use(globalMethods)
.component(VueFeather.name, VueFeather)
.use(VueApexCharts).use(router).mount('#app')
