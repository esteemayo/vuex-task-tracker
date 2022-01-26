<template>
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Task from './Task.vue';

export default {
  name: 'Tasks',
  components: {
    Task,
  },
  computed: mapGetters(['tasks']),
  methods: mapActions(['fetchTasks']),
  mounted() {
    this.fetchTasks();
  },
};
</script>

<style></style>
