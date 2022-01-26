<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-if="homePage"
      @click="toggleAddTask"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Button from './Button.vue';

export default {
  name: 'Header',
  props: {
    title: String,
  },
  components: {
    Button,
  },
  computed: {
    ...mapGetters(['showAddTask']),
    homePage() {
      if (this.$route.path === '/') return true;
      return false;
    },
  },
  methods: mapMutations(['toggleAddTask']),
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
