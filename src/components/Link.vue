<template>
  <button
    class="btn btn-primary mr-2"
    :disabled="active"
    @click="$emit('click-link')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Link',
  props: {
    label: [String],
    active: [Boolean],
  },
};
</script>
