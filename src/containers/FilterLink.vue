<template>
  <Link
    :label="label"
    :active="active"
    @click-link="setVisibiliyFilter(filter)"
  />
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Link from '@/components/Link.vue';
import { SET_VISIBILITY_FILTEER } from '@/store/mutation-types';

export default {
  name: 'FilterLink',
  components: {
    Link,
  },
  props: {
    filter: [String],
    label: [String],
  },
  computed: {
    ...mapState('visibilityFilter', {
      'currentFilter': 'filter',
    }),
    active() {
      return this.currentFilter === this.filter;
    },
  },
  methods: {
    ...mapMutations('visibilityFilter', {
      setVisibiliyFilter: SET_VISIBILITY_FILTEER,
    }),
  },
};
</script>
