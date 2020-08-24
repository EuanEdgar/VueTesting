<template>
  <div @click="$emit('click', pokemon.id)">
    <span>#{{ pokemon.id }}: {{ titleize(pokemon.name) }}</span>
    <img class="text-right" :src="pokemon.sprites.front_default" />
  </div>
</template>

<script>
import { titleize } from 'spiceutils'

export default {
  props: ['pokemon'],
  methods: {
    titleize,
  },
}
</script>

<style scoped lang="scss">
  div {
    min-height: 48px;
    img {
      max-height: 100%;
      right: 0;
    }
  }
</style>
