<template>
  <div>
    <b-row>
      <b-col>
        <SearchBar v-model="searchTerm" />
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="history.length" cols="4">
        <History
          :items="history"
          @click="historySelect"
        />
      </b-col>
      <b-col>
        <Result
          v-for="pokemon in pokemon"
          v-bind:key="pokemon.id"
          v-bind:pokemon="pokemon"
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
      history: [],
    }
  },
  methods: {
    historySelect(pokemonID){
      const index = this.history.findIndex(({ id }) => id === pokemonID)
      if(index >= 0){
        const pokemon = this.history[index]
        this.history.splice(index, 1)
        this.history.push(pokemon)
        this.pokemon = [pokemon]
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

      const existingIndex = this.history.findIndex(({ id }) => id === item.id)
      if(existingIndex >= 0){
        this.history.splice(existingIndex, 1)
      }
      this.history.push(item)
      this.pokemon = [item]
    }
  },
  components: {
    History,
    SearchBar,
    Result,
  }
}
</script>
