<template>
  <div>
    Hello, {{ target || 'world' }}!
  </div>
</template>

<script>
export default {
  props: ['target']
}
</script>
