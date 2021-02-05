<template>
  <div class="todo-box">
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
.todo-box {
  display: flex;
  flex-direction: column;
  max-width: 70vh;
  margin: 0 auto;
}

.todo {
  padding: 0.1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.todo:hover {
  cursor: pointer;
}

.is-complete {
  /* color: rgba(255, 0, 0, 0.911); */
  border-bottom: solid 1px rgb(218, 87, 87);
}
</style>
