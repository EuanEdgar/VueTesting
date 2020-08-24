<template>
  <div>
    <ul v-for="item in items" :key="item.id">
      <li>
        <PokemonCard
          :pokemon="item"
          @click="$emit('click', $event)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import PokemonCard from './PokemonCard'

export default {
  props: ['items'],
  components: {
    PokemonCard,
  },
}
</script>

<style lang="scss" scoped>
</style>
