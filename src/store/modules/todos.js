// for actions and mutations getters setters
// import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "todo 1"
    }
  ]
};

const getters = {
  allTodos: (state) => {
    return state.todos;
  }
};

const actions = {};

const mutations = {};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
