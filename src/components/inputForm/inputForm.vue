<template>
    <div class="section w-100">
      <div class="row cc gap-0 p-0 m-0">
        <div class="EcommerceMedal col-sm-12 col-md-6 col-xl-6 p-2">
          <webhook />
        </div>    
        <div class="EcommerceMedal col-sm-12 col-md-6 col-xl-6 p-2">
          <ExportVue />
        </div> 
        <div class="EcommerceMedal col-sm-12 col-md-6 col-xl-6 p-2">
          <email_sendVue />
        </div> 
        
      </div>
    </div>
  </template>
    
    <script>
import email_sendVue from './email_send.vue';
import ExportVue from './Export.vue';
import webhook from './webhook.vue';
  
  export default {
    name: "ecommerce",
  
    data() {
      return {
     
      };
    },
    components:{
        webhook,
        ExportVue,
        email_sendVue
    }
   
  };
  </script>
    
    <style scoped>
  .cc {
    margin-right: 1rem;
    margin-left: 0rem;
  }
  
  @media screen and(max-width: 765px) {
    .cc {
      margin-right: 1px;
      margin-left: 3px;
    }
  }
  </style>