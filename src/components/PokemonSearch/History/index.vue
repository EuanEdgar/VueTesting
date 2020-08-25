<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="item in historyItems" :key="item.id">
        <PokemonCard
          :pokemon="item"
          @click="$emit('click', $event)"
        />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import PokemonCard from './PokemonCard'

export default {
  props: ['items'],
  computed: {
    historyItems(){
      return [...this.items].reverse()
    },
  },
  components: {
    PokemonCard,
  },
}
</script>

<style lang="scss" scoped>
// ul {
//   list-style-type: none;
//   padding: 0 5px;
// }
</style>
