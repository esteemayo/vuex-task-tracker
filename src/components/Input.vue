<template>
  <div class="form-control">
    <label :for="name">{{ label }}</label>
    <input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      v-model="inputValue"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['id', 'for', 'label', 'name', 'type', 'placeholder', 'modelValue'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style></style>
