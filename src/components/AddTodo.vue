<template>
  <div><h3>Add Todo</h3></div>
  <form @submit="onSubmit">
    <input type="text" v-model="title" placeholder="Add Todo..." />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  },
  components: {}
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-size: 5vh;
}

form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 0 1em 0;
}
</style>
