<template>
  <div>
    <h1>Todos</h1>
    <div v-for="todo in allTodos" :key="todo.id" class="todo">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos"])
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped></style>
