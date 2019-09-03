<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <h4>The Todo</h4>
        <AddTodo />
        <VisibleTodoList />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from './containers/AddTodo.vue';
import VisibleTodoList from './containers/VisibleTodoList.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'app',
  components: {
    AddTodo,
    VisibleTodoList,
    AppFooter,
  },
};
</script>
