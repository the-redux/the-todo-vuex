import { ADD_TODO, TOGGLE_TODO } from "../mutation-types";

let nextTodoId = 7;

const state = {
  list: [
    { id: 0, completed: false, text: 'read a Book', },
    { id: 1, completed: false, text: 'watch a movie', },
    { id: 2, completed: false, text: 'sing a song', },
    { id: 3, completed: false, text: 'running', },
    { id: 4, completed: false, text: 'swimming', },
    { id: 5, completed: false, text: 'learn English', },
    { id: 6, completed: false, text: 'send a email', },
  ],
};

const getters = {
};

const mutations = {
  [ADD_TODO] (state, todo) {
    state.list.push({
      ...todo,
      id: nextTodoId++,
      completed: false,
    });
  },
  [TOGGLE_TODO] (state, todoId) {
    const todo = state.list.find(todo => todo.id === todoId);
    todo.completed = !todo.completed;
  },
};

const actions = {
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
