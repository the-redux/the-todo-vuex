<template>
  <div
    class="alert"
    :class="[completed ? 'alert-success' : 'alert-primary']"
    role="alert"
    @click="$emit('toggle-todo')"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    text: [String],
    completed: [Boolean],
  },
};
</script>
