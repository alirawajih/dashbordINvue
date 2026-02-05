<template>
  <div class="congratulation p-3">
    <div class="table_scroll">
      <b-table stickyColumn :items="items" :fields="fields">
        <template #cell(name)="data">
          <b-form-input
            v-if="items[data.index].isEdit"
            type="text"
            v-model="items[data.index].name"
          ></b-form-input>

          <div class="span" v-else>
            <span>{{ data.value }}</span>
          </div>
        </template>
        <template #cell(department)="data">
          <b-form-select
            v-if="items[data.index].isEdit"
            v-model.lazy="items[data.index].department"
            :options="['Development', 'Marketing', 'HR', 'Accounting']"
          ></b-form-select>
          <span v-else>{{ data.value }}</span>
        </template>
        <template #cell(age)="data">
          <b-form-input
            v-if="items[data.index].isEdit"
            type="number"
            v-model.lazy="items[data.index].age"
          ></b-form-input>
          <span v-else>{{ data.value }}</span>
        </template>
        <template #cell(dateOfBirth)="data">
          <b-form-input
            v-if="items[data.index].isEdit"
            v-model.lazy="items[data.index].dateOfBirth"
          ></b-form-input>
          <span v-else>{{ data.value }}</span>
        </template>
        <template #cell(option)="data">
          <div> </div>
          <div class="d-flex">
            <b-button
              v-if="!items[data.index].isEdit"
              class="m-2"
              @click="editRowHandler(data)"
            >
              <span>Edit</span>
            </b-button>
            <b-button v-else class="m-2" @click="done(data)">
              <span>Done</span>
            </b-button>
            <b-button class="m-2" @click="delet(data)">
              <span v-if="!items[data.index].isEdit">delet</span>
              <span v-else>delet</span>
            </b-button>
          </div>
        </template>
      </b-table>
    </div>

    <div class="d-grid gap-2">
      <button class="btn btn-primary" @click="add_row" type="button">
        add row
      </button>
    </div>
    
  </div>
</template>
  <script>
export default {
  name: "App",
  components: {},
  // emits:{
  //   delet:null,
  //   data:null
    
  // },

  data() {
    return {
      fields: [
        { key: "name", label: "Name" },
        { key: "department", label: "Department" },
        { key: "age", label: "Age" },
        { key: "dateOfBirth", label: "Date Of Birth" },
        { key: "option", label: "option" },
      ],
      items: [
        {
          age: 40,
          name: "Dickerson",
          department: "Development",
          dateOfBirth: "1984-05-20",
        },
        {
          age: 21,
          name: "Larsen",
          department: "Marketing",
          dateOfBirth: "1984-05-20",
        },
        {
          age: 89,
          name: "Geneva",
          department: "HR",
          dateOfBirth: "1984-05-20",
        },
        {
          age: 38,
          name: "Jami",
          department: "Accounting",
          dateOfBirth: "1984-05-20",
        },
      ],
    };
  },
  mounted() {
    this.items = this.items.map((item) => ({ ...item, isEdit: false }));
  },
  methods: {
    editRowHandler(data) {
      this.items[data.index].isEdit = true;
    },
    add_row() {
      this.items.push({ isEdit: true });
    },
    done(data) {
      this.items[data.index].isEdit = false;
      this.$emit("data", data.item);
    },
    delet(data) {
      this.items.splice(data.index, 1);
      this.$emit('delet',data.item.name)
    },
  },
};
</script>
  <style lang="scss" scoped>
@import "../../assets/style_scss/Partials/variables";

.congratulation {
  position: relative;
  border-radius: 5px;
  background: var(--background_def);
  height: 100%;
  color: var(--color_text);
  // background: white;
  // color: black;
}
thead,
tbody,
tfoot,
tr,
td,
th {
  text-align: left;
  width: 100px;
  vertical-align: middle;
}
span {
  color: var(--color_text);
}
.table_scroll {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 22em;
}
.table_scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px gray;
  display: none;
}

.table_scroll::-webkit-scrollbar {
  width: 7px;
  /*  background-color: #e0d2d2; */
}

.table_scroll::-webkit-scrollbar-thumb {
  background-color: #0000007e;
  border-radius: 5px;
}
.span {
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color:var(--color_text);
}
.form-control,.form-select {
    background: var(--background_def);
  color: var(--color_text);
  border: solid 1px var(--color_text);
}
.form-control:focus,.form-select{
  background: var(--background_def);
  color: var(--color_text);
}
</style>