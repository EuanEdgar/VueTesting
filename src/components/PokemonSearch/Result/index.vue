<template>
  <b-container>
    <b-row>
      <b-col cols="10">
        <h1>{{ titleize(pokemon.name) }}</h1>
      </b-col>
      <b-col>
        <h2 class="text-right">#{{ pokemon.id }}</h2>
        <div class="text-right">
          <TypeDisplay
            v-for="type in pokemon.types.map(({ type: {name} }) => name)"
            :type="type"
            :key="type"
          />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <p>{{ pokemon.species.flavor_text_entries.filter(({ language }) => language.name === 'en').map(({ flavor_text }) => flavor_text.replace(/\n/g, ' '))[0] }}</p>
      </b-col>
      <b-col cols="4">
        <img
          :src="dig(pokemon.sprites, 'other', 'official-artwork', 'front_default') || pokemon.sprites.front_default"
          :style="{maxWidth: '100%'}"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Abilities :pokemon="pokemon" />
        <Moves :moves="pokemon.moves" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { blank, dig, titleize } from 'spiceutils'
import TypeDisplay from '../TypeDisplay'
import Abilities from './Abilities'
import Moves from './Moves'

export default {
  props: ['pokemon'],
  methods: {
    blank,
    dig,
    titleize,
  },
  components: {
    Abilities,
    Moves,
    TypeDisplay
  }
}
</script>
