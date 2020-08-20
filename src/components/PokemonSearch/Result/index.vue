<template>
  <div>
    <b-card
      :title="`${titleize(pokemon.name)} #${pokemon.id}`"
    >
      <p>Type: {{ pokemon.types.map(({ type: {name} }) => titleize(name)).join(', ') }}</p>
      <Abilities :pokemon="pokemon" />
      <Moves :moves="pokemon.moves.map(({ move }) => move)" />
    </b-card>
  </div>
</template>

<script>
import { blank, titleize } from 'utils'
import Abilities from './Abilities'
import Moves from './Moves'

export default {
  props: ['pokemon'],
  methods: {
    blank,
    titleize,
  },
  components: {
    Abilities,
    Moves,
  }
}
</script>
