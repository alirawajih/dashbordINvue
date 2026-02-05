<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="front"> </slot>
      </div>
      <div class="flip-card-back">
        <slot name="back"> </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["img"],

  data() {
    return {
      image: this.img,
    };
  },
};
</script>
<style scoped>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 600px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
  border-radius: 7px;
  display: flex;
    align-items: center;
    justify-content: center;
}

.flip-card-back {
  background-color: #878b8d;
  color: white;
  transform: rotateY(180deg);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>