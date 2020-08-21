<template>
  <div>
    <SearchBar v-model="searchTerm" />
    <Result
      v-for="pokemon in pokemon"
      v-bind:key="pokemon.id"
      v-bind:pokemon="pokemon"
    />
  </div>
</template>

<script>
import * as api from 'api'

import SearchBar from './SearchBar'
import Result from './Result'

export default {
  data() {
    return {
      searchTerm: '',
      pokemon: [],
    }
  },
  watch: {
    async searchTerm() {
      const pokemon = await api.getPokemon(this.searchTerm)
      const species = await api.getURL(pokemon.species.url)
      this.pokemon = [{
        ...pokemon,
        species,
      }]
    }
  },
  components: {
    SearchBar,
    Result,
  }
}
</script>
