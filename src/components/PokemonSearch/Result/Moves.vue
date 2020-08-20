<template>
  <div>
    <div v-for="move in moves" v-bind:key="move.id">
      <Move v-bind:move="move" />
    </div>
  </div>
</template>

<script>
import Move from './Move'

export default {
  props: ['moves'],
  components: {
    Move
  }
}
</script>
