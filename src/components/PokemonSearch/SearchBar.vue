<template>
  <div>
    <input
      v-model="internalValue"
      v-on:keypress.enter.prevent="submit"
    />
    <button
      type="button"
      v-on:click="submit"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      internalValue: this.value,
    }
  },
  methods: {
    submit() {
      this.$emit('input', this.internalValue)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
