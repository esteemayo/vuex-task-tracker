<template>
  <AddTask v-if="showAddTask" />
  <Tasks />
</template>

<script>
import { mapGetters } from 'vuex';

import AddTask from '@/components/AddTask.vue';
import Tasks from '@/components/Tasks.vue';

export default {
  name: 'Home',
  components: {
    AddTask,
    Tasks,
  },
  computed: mapGetters(['showAddTask']),
};
</script>

<style></style>
