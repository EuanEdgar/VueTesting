<template>
  <div>
    <b-card>
      <p>ID: {{ pokemon.id }}</p>
      <p>Name: {{titleize(pokemon.name)}}</p>
      <p>Type: {{ pokemon.types.map(({ type: {name} }) => titleize(name)).join(', ') }}</p>
    </b-card>
    <Moves v-bind:moves="pokemon.moves.map(({ move }) => move)" />
  </div>
</template>

<script>
import { blank, titleize } from 'utils'
import Moves from './Moves'

export default {
  props: ['pokemon'],
  methods: {
    blank,
    titleize,
  },
  components: {
    Moves,
  }
}
</script>
