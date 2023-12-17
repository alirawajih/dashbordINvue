<template>
  <div class="contant pt-5">
    <div class="row">
      <div class="col-lg-4">
        <div class="imguser">
          <img
            class="img-fluid "
            :src="user ? this.user.image:'../assets/images/profile/user-uploads/timeline.jpg'"
            
          />
        </div>
      </div>

      <div class="col-lg-6">
        <table class="table">
          <tbody>
            <tr>
              <td>
                <strong>
                  <span
                    class="glyphicon glyphicon-asterisk text-primary"
                  ></span>
                  First name
                </strong>
              </td>
              <td>
                {{ user.Firstname }}
                <a class="float-left" href="#">
                  <i class="bx bx-edit editicons" style="float: right"></i
                ></a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>
                  <span class="glyphicon glyphicon-user text-primary"></span>
                  Last name
                </strong>
              </td>
              <td>{{ user.lastname }}</td>
            </tr>
            <tr>
              <td>
                <strong>
                  <span class="glyphicon glyphicon-cloud text-primary"></span>
                  Email
                </strong>
              </td>
              <td>{{ user.email }}</td>
            </tr>

            <tr>
              <td>
                <strong>
                  <span
                    class="glyphicon glyphicon-bookmark text-primary"
                  ></span>
                  Phone number
                </strong>
              </td>
              <td>+9620......</td>
            </tr>

            <tr>
              <td>
                <strong>
                  <span
                    class="glyphicon glyphicon-eye-open text-primary"
                  ></span>
                  Position
                </strong>
              </td>
              <td>{{ user.position }}</td>
            </tr>
            <tr>
              <td>
                <strong>
                  <span
                    class="glyphicon glyphicon-eye-open text-primary"
                  ></span>
                  ability
                </strong>
              </td>
              <td>{{ user.ability.length + 1 }}</td>
            </tr>
            <tr>
              <input @change="onImage" type="file" multiple />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  <script>
import store from "../store";
export default {
  data() {
    return {
      user: [],
      image: null,
    };
  },
  components: {},
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  methods: {
    onImage(event) {
      let file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result;
        store.state.userIN.image = reader.result;
      };

      reader.readAsDataURL(file);
     
    },
  },
};
</script>
  <style scoped>
.contant {
  background: white;

  border-radius: 5px;
  margin: 12px;
}
</style>
  