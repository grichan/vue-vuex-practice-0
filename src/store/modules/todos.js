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
  }
};

// mutations mutate the state
const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
