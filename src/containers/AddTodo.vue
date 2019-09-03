<template>
  <div>
    <form
      @submit.prevent="onSubmit"
      class="form-inline"
    >
      <input type="text" class="form-control" v-model="text" />
      <button type="submit" class="btn btn-primary ml-2">Add Todo</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { ADD_TODO } from "@/store/mutation-types";

export default {
  name: 'AddTodo',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    onSubmit() {
      if (!this.text.trim()) {
        return;
      }
      this.addTodo({ text: this.text });
      this.text = '';
    },
    ...mapMutations('todos', {
      addTodo: ADD_TODO,
    }),
  },
};
</script>
