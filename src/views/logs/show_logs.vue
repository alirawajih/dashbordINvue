<template>
  <div class="contant m-3">
    <div class="row">
      <div class="col-3">
        <div class="cardlist" >
          <div class="list-group dayslogs">
            
            <a href="#"  v-for="(item,index) in list" :key="index" style="border-bottom: 2px solid gray; border-radius: 0px;" class="list-group-item list-group-item-action"
              >A fourth link item</a
            >
          </div>
          <!-- <div style="display: grid; place-items: center">
            <nav aria-label="">
              <ul class="pagination">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
              </ul>
            </nav>
          </div> -->
        </div>
      </div>

      <div class="col-9">
        <div class="accordion" id="accordionExample">
          <div
            v-for="(item, index) in list"
            :key="index"
            class="accordion-item"
          >
            <h2 class="accordion-header" style="border-bottom: 2px solid gray;">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#modal-' + index"
                :aria-controls="item.name"
                aria-expanded="false"
              >
                Accordion Item #{{ item.name }}
              </button>
            </h2>
            <div
              :id="'modal-' + index"
              class="accordion-collapse collapse showcollapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          
        </div>
        <!-- <div class="paginat" >
            <nav aria-label="">
              <ul class="pagination">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>

              </ul>
            </nav>
          </div> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "one" },
        { name: "tow" },
        { name: "three" },
        { name: "four" },
        { name: "five" },
        { name: "six" },
        { name: "seven" },
        
      ],
    };
  },
  created() {
    console.log("show logs");
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/style_scss/components/logs.scss";
</style>