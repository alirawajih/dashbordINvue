<template>
  <div class="loginpage row m-0 p-5">
    <div class="col-xl-9 col-md-12 col-sm-12 d-flex justify-content-center">
      <div class="d-inline-block m-0 p-0">
        <router-link :to="{ name: 'homePage' }">
          <vue-feather type="home"></vue-feather>
        </router-link>
        
          <vue-feather type="home" @click="click()"></vue-feather>
        
      </div>
      <img
        src="../../../src/assets/images/pages/not-authorized-dark.svg"
        class="img-fluid"
        alt="..."
      />
    </div>
    <div class="col-xl-3 col-md-12 col-sm-12 login">
      <main class="LoginForm">
        <form @submit.prevent="onSubmit">
          <div class="alert alert-danger" role="alert" v-if="message">
            {{ message }}
          </div>

          <h1 class="h5 mb-3 fw-normal text-dark">log in to {{ name }}</h1>
          <label for="email">Email address</label>
          <div   >
            <input
              v-model="email"
              name="email"
              id="email"
              class="form-control"
              type="email"
            />
            <span class="p-error text-danger"> {{ erroremail }}</span>
          </div>
          <label for="Password">Password</label>
          <div   >
            <input
              v-model="password"
              name="password"
              id="password"
              class="form-control"
              type="password"
            />
            <span class="p-error text-danger"> {{ errorpassword }}</span>
          </div>

          <div class="checkbox mb-3 text-dark">
            <label>
              <input type="checkbox" name="checkbox" value="remember-me" />
              Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  </div>
</template>
<script>
import { ability } from "@/ability/defineApilty";
import router from "@/router";
import { login } from "@/jsc/loginuser";
import { Store } from "vuex";
import * as yup from "yup";
import { Form, Field, ErrorMessage, useField, useForm } from "vee-validate";
export default {
  name: "login",
  props: { name },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    const { handleSubmit } = useForm();

    const onSubmit = handleSubmit((values) => {
      login(values.email, values.password, this.name)
        .then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          ability.update(user.ability);
          // router.replace({ path: "/" });
          if (this.name == "DashbordOne") {
            router.replace({ name: "apexchart" });
          }
          if (this.name == "DashbordTow") {
            router.replace({ path: "/" });
          }
        })
        .catch((e) => (this.message = "email or password is incorrect"));
    });
    const { value: email, errorMessage: erroremail } = useField(
      "email",

      yup.string().email().required()
    );
    const { value: password, errorMessage: errorpassword } = useField(
      "password",

      yup.string().min(3).required()
    );

    return {
      message: "",
      email,
      password,
      errorpassword,
      erroremail,
      handleSubmit,
      onSubmit,
    };
  },
  created() {},
  methods: {
    async submit() {
      // console.log(handleSubmit)
      // login(this.email, this.password)
      //   .then((user) => {
      //     localStorage.setItem("user", JSON.stringify(user));
      //     // updateability(user.position)
      //     ability.update(user.ability);
      //     router.replace({ path: "/" });
      //     // timeout()
      //   })
      //   .catch((e) => (this.message = "email or password is incorrect"));
      ///////////////////
      // this.$store
      //   .dispatch("login", this.user)
      //   .then((user) => {
      //     localStorage.setItem("user", JSON.stringify(user));
      //     // updateability(user.position)
      //     ability.update(user.ability);
      //     router.replace({ path: "/" });
      //     // timeout()
      //   })
      //   .catch((e) => (this.message = "email or password is incorrect"));
      /////////////////////
      // this.$store.dispatch("login", this.user)
      // if(this.$store.state.auth){
      //   localStorage.setItem('user' ,JSON.stringify(this.$store.state.auth))
      //   router.replace({name:"ecommerce"})
      // }else{
      //   this.message = "email or password is incorrect"
      // }
    },
    login() {},
    // validateEmail(value) {
    //   if (!value) {
    //     return "This field is required";
    //   }
    //   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //   if (!regex.test(value)) {
    //     return "This field must be a valid email";
    //   }

    //   return true;
    // },
  },
};
</script>
<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}
.LoginForm {
  margin-left: 7%;
  margin-top: 15%;
  width: 100%;
}
@media screen and (max-width: 1560px) {
  .LoginForm {
    width: 700px;
    margin-top: 10%;
  }
}
.loginpage {
  /* background: rgba(128, 128, 128, 0.484); */
  min-height: 100vh;
}
a {
  color: black;
}
</style>