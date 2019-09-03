<template>
  <div>
    VisibleTodoList
    <TodoList
      :todos="getVisibleTodos"
      @toggle-todo="(todoId) => toggleTodo(todoId)"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import TodoList from '@/components/TodoList.vue';
import { TOGGLE_TODO } from "@/store/mutation-types";
import { VisibilityFilter } from '@/constants/visibilityFilter';

export default {
  name: 'VisibleTodoList',
  components: {
    TodoList,
  },
  computed: {
    ...mapState('todos', [
      'list',
    ]),
    ...mapState('visibilityFilter', [
      'filter',
    ]),
    getVisibleTodos() {
      switch(this.filter) {
        case VisibilityFilter.SHOW_ALL:
          return this.list;
        case VisibilityFilter.SHOW_COMPLETED:
          return this.list.filter(t => t.completed);
        case VisibilityFilter.SHOW_ACTIVE:
          return this.list.filter(t => !t.completed);
        default:
          return this.list;
      }
    },
  },
  methods: {
    ...mapMutations('todos', {
      toggleTodo: TOGGLE_TODO,
    }),
  },
};
</script>
