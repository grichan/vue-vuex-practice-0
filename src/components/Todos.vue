<template>
  <div>
    <h1>Todos</h1>
    <div v-for="todo in allTodos" :key="todo.id" class="todo">
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
    ...mapActions(["fetchTodos", "deleteTodo"])
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

<style scoped></style>
