<template>
  <form className="add-form" @submit.prevent="handleSubmit">
    <Input
      v-for="(input, index) in inputs"
      :key="index"
      :id="input.name"
      :for="input.name"
      :name="input.name"
      :type="input.text"
      :label="input.label"
      v-model="input.value"
      :placeholder="input.placeholder"
    />

    <div class="form-control form-control-check">
      <label for="reminder">Set Reminder</label>
      <input id="reminder" type="checkbox" name="reminder" v-model="reminder" />
    </div>

    <input type="submit" value="Save Task" className="btn btn-block" />
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import Input from './Input.vue';

export default {
  name: 'AddTask',
  components: { Input },
  data() {
    return {
      reminder: false,
      inputs: [
        {
          label: 'Text',
          value: '',
          name: 'text',
          type: 'text',
          placeholder: 'Add Task',
        },
        {
          label: 'Day & Time',
          value: '',
          name: 'day',
          type: 'text',
          placeholder: 'Add Day & Time',
        },
      ],
    };
  },
  methods: {
    ...mapActions(['addTask']),
    handleSubmit() {
      if (this.inputs[0].value && this.inputs[1].value) {
        const newTask = {
          text: this.inputs[0].value,
          day: this.inputs[1].value,
          reminder: this.reminder,
        };

        this.addTask(newTask);

        this.inputs[0].value = '';
        this.inputs[1].value = '';
        this.reminder = false;
      }
    },
  },
};
</script>

<style>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
