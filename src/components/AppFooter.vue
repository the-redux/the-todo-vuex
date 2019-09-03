<template>
  <div>
    Show:
    <FilterLink :filter="VisibilityFilter.SHOW_ALL" label="All">All</FilterLink>
    <FilterLink :filter="VisibilityFilter.SHOW_ACTIVE" label="Active">Active</FilterLink>
    <FilterLink :filter="VisibilityFilter.SHOW_COMPLETED" label="Complted">Completed</FilterLink>
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
