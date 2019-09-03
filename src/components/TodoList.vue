<template>
  <div>
    <Todo
      v-for="(todo, index) in todos"
      :key="index"
      v-bind="todo"
      @toggle-todo="$emit('toggle-todo', todo.id)"
    />
  </div>
</template>

<script>
import Todo from './Todo.vue';

export default {
  name: 'TodoList',
  components: {
    Todo,
  },
  props: {
    todos: [Array],
  }
};
</script>
