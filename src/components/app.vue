<template>
  <div>
    <HelloWorld :target="target" />
    <input v-model="target" />
  </div>
</template>

<script>
import HelloWorld from 'components/hello_world'

export default {
  data() {
    return {
      target: 'world',
    }
  },
  components: {
    HelloWorld,
  }
}
</script>
