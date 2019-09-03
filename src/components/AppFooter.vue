<template>
  <div>
    Show:
    <FilterLink :filter="VisibilityFilter.SHOW_ALL" label="All"></FilterLink>
    <FilterLink :filter="VisibilityFilter.SHOW_ACTIVE" label="Active"></FilterLink>
    <FilterLink :filter="VisibilityFilter.SHOW_COMPLETED" label="Complted"></FilterLink>
  </div>
</template>

<script>
import FilterLink from '@/containers/FilterLink.vue';
import { VisibilityFilter } from "@/constants/visibilityFilter";

export default {
  name: 'AppFooter',
  components: {
    FilterLink,
  },
  data() {
    return {
      VisibilityFilter,
    };
  },
};
</script>
