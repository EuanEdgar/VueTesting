<template>
  <div @click="$emit('click', pokemon.id)">
    <img :src="pokemon.sprites.front_default" />
    <span>#{{ pokemon.id }}: {{ titleize(pokemon.name) }}</span>
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
    cursor: pointer;
    user-select: none;
    min-height: 48px;
    margin-bottom: 5px;

    img {
      height: 96px;
      width: 96px;
    }
  }
</style>
