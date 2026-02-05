<template>
  <div class="" >
    <div class=" addmore w-full">
      <div class="" v-for="(course, index) in courses" :key="index">

        <div class="">
          
          <slot name="body">
            
          </slot>

          <vue-feather class="pt-3" @click="remove(index)" type="trash-2"> </vue-feather>
        </div>
      </div>
      
    </div>
    <div class="addInput m-3">
        <vue-feather type="plus-circle" @click="addMore()"> </vue-feather>
        <span>add {{ event }}</span>
      </div>
  </div>
</template>
  
  <script>
export default {
  name: "HelloWorld",
  props: ["event"],
  data() {
    return {
      courses: [
        {
          courseName: "",
        },
      ],
    };
  },
  methods: {
    addMore() {
      this.courses.push({
        courseName: "",
      });
    },
    remove(index) {
      this.courses.splice(index, 1);
    },
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.addmore{
  overflow-y: scroll;max-height: 13em;
}
.addmore::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px gray;
  display: none;
}

.addmore::-webkit-scrollbar
{
	width: 7px;
	/* // background-color: #e0d2d2; */
}

.addmore::-webkit-scrollbar-thumb
{
  
	background-color: #0000007e;
  border-radius:5px ;
}

</style>
  