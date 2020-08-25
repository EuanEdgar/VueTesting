<template>
  <div>
    <b-row>
      <b-col>
        <SearchBar v-model="searchTerm" />
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="pokemon.length" cols="4">
        <History
          :items="pokemon"
          @click="historySelect"
        />
      </b-col>
      <b-col>
        <Result
          v-if="pokemon.length"
          :pokemon="pokemon.slice(-1)[0]"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import * as api from 'api'

import History from './History'
import SearchBar from './SearchBar'
import Result from './Result'

export default {
  data() {
    return {
      searchTerm: '',
      pokemon: [],
    }
  },
  methods: {
    historySelect(pokemonID){
      const index = this.pokemon.findIndex(({ id }) => id === pokemonID)
      if(index >= 0){
        const pokemon = this.pokemon[index]
        this.pokemon.splice(index, 1)
        this.pokemon.push(pokemon)
      }
    },
  },
  watch: {
    async searchTerm() {
      const pokemon = await api.getPokemon(this.searchTerm)
      const species = await api.getURL(pokemon.species.url)

      const item = {
        ...pokemon,
        species,
      }

      const existingIndex = this.pokemon.findIndex(({ id }) => id === item.id)
      if(existingIndex >= 0){
        this.pokemon.splice(existingIndex, 1)
      }
      this.pokemon.push(item)
    }
  },
  components: {
    History,
    SearchBar,
    Result,
  }
}
</script>
