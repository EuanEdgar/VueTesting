<template>
  <div>
    <p>Hello, {{ target || 'world' }}!</p>
    <input v-model="target" />
  </div>
</template>

<script>
export default {
  data() {
    return { target: '' }
  }
}
</script>
