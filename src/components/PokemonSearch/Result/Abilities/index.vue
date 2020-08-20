<template>
  <div>
    <h3>Abilities</h3>
    <div v-for="ability in abilities">
      <Ability :ability="ability" />
    </div>
  </div>
</template>

<script>
import Ability from './Ability'

export default {
  props: ['pokemon'],
  data() {
    return {
      abilities: this.pokemon.abilities.sort(({ slot: a }, { slot: b }) => a - b),
    }
  },
  components: {
    Ability,
  }
}
</script>
