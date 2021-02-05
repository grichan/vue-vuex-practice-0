<template>
  <div>
    <h1>Todos</h1>
    <div
      @dblclick="onDBClick(todo)"
      v-for="todo in allTodos"
      :key="todo.id"
      class="todo"
      v-bind:class="{ 'is-complete': todo.completed }"
    >
      {{ todo.title }}
      <FontAwesomeIcon :icon="['fas', 'trash']" @click="deleteTodo(todo.id)" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDBClick(todo) {
      const uTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };

      this.updateTodo(uTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
.is-complete {
  color: red;
}
</style>
