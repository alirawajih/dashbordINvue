<template>
  <div class="chat p-3">
   
    <div class="messages" id="style-4">
      <div
        class="d-flex"
        :class="value.side"
        v-for="value in messages"
        :key="value"
      >
        <div class="message">
          <p class="m-0 p-2">{{ value.message }}</p>
        </div>
      </div>
    </div>
    <div class="textSendmessages">
      <div class="input-group mb-3 d-flex">
        <form @submit.prevent="sendmessage">
          <input
            type="text"
            class="form-control"
            v-model="message"
            placeholder="messges....."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

          <button class="btn btn-primary">
            <vue-feather type="chevron-right"></vue-feather>
          </button>
        </form>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      show: false,
      messages: [
        {
          name: "ali",
          message: "xd alaklsjaks nal knalsknaklsaml knajlnsamkl kamnki",
          time: new Date().getHours(),
          side: "left",
        },
        {
          name: "ssss",
          message: "xd sslklalks malksmalksmlakms lkasmlkams laks maslkm alkss",
          time: new Date().getHours(),
          side: "right",
        },
        {
          name: "ssss",
          message: "xd ssss",
          time: new Date().getHours(),
          side: "left",
        },
      ],
      messegesSide: "left",
    };
  },

  methods: {
    sendmessage() {
      if (this.message != "") {
        this.messages.push({
          mame: "anas",
          message: this.message,
          time: new Date().setHours(),
          side: this.messegesSide,
        });
      }
      this.message = "";
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/style_scss/components/chat.scss";
</style>