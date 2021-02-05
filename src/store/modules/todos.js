// for actions and mutations getters setters
// import axios from "axios";

import axios from "axios";

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => {
    return state.todos;
  }
};

// action calls the state via commit
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );

    commit("newTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    console.log('"delete" :>> ', "delete" + id);
    await axios.delete("https://jsonplaceholder.typicode.com/todos/" + id);

    commit("removeTodo", id);
  },
  async filterTodos({ commit }, e) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_limit=" +
        parseInt(e.target.options[e.target.options.selectedIndex].innerText)
    );

    commit("setTodos", response.data);
  },
  async updateTodo({ commit }, todo) {
    await axios.put("https://jsonplaceholder.typicode.com/todos/" + todo.id);
    commit("updateTodo", todo);
  }
};

// mutations mutate the state
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id != id)),
  updateTodo: (state, updateTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updateTodo.id);

    if (index !== -1) {
      state.todos.splice(index, 1, updateTodo);
    }
  }
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
