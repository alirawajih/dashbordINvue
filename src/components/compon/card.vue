<template>
    <div class="congratulation text-start p-3">
     <slot name="card">







     </slot>
    </div>
  </template>
      
      <script>
  export default {
    data() {
      return {
        
      };
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
 
  </style>