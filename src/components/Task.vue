<template>
  <div
    @dblclick="toggleReminder(task)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }} <i @click="deleteTask(task._id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Task',
  props: {
    task: Object,
  },
  methods: mapActions(['deleteTask', 'toggleReminder']),
};
</script>

<style scoped>
.task {
  background-color: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fas {
  color: #ff0000;
}
</style>
