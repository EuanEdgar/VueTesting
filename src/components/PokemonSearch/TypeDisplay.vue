<template>
  <span :style="{backgroundColor: color, color: '#ffffff'}">
    {{ name }}
  </span>
</template>

<script>
const types = {
  normal: {
    name: 'Normal',
    color: '#A8A878',
  },
  fire: {
    name: 'Fire',
    color: '#F08030',
  },
  fighting: {
    name: 'Fighting',
    color: '#C03028',
  },
  water: {
    name: 'Water',
    color: '#6890F0',
  },
  flying: {
    name: 'Flying',
    color: '#A890F0',
  },
  grass: {
    name: 'Grass',
    color: '#78C850',
  },
  poison: {
    name: 'Poison',
    color: '#A040A0',
  },
  electric: {
    name: 'Electric',
    color: '#F8D030',
  },
  ground: {
    "name": "Ground",
    "color": "#e0c068",
  },
  psychic: {
    "name": "Psychic",
    "color": "#f85888",
  },
  rock: {
    "name": "Rock",
    "color": "#b8a038",
  },
  ice: {
    "name": "Ice",
    "color": "#98d8d8",
  },
  bug: {
    "name": "Bug",
    "color": "#a8b820",
  },
  dragon: {
    "name": "Dragon",
    "color": "#7038f8",
  },
  ghost: {
    "name": "Ghost",
    "color": "#705898",
  },
  dark: {
    "name": "Dark",
    "color": "#705848",
  },
  steel: {
    "name": "Steel",
    "color": "#b8b8d0",
  },
  fairy: {
    "name": "Fairy",
    "color": "#ee99ac",
  },
  '???': {
    "name": "???",
    "color": "#68a090",
  },
}

export default {
  props: ['type'],
  data() {
    const type = types[this.type.toLowerCase()] || types['???']

    return {
      ...type,
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  padding: 3px 5px;
  border: 1px solid transparent;
  border-radius: 5px;

  &:not(:last-child){
    margin-right: 5px;
  }
}
</style>
