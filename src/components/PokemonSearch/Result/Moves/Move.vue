<template>
  <b-card v-if="!blank(move)">
    <b-container>
      <b-row>
        <b-col cols="8">
          <h2>{{ move.names.find(({ language }) => language.name === 'en').name }}</h2>
        </b-col>
        <b-col class="text-right">
          <h3>#{{ move.id }}</h3>
          <TypeDisplay :type="move.type.name" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p v-if="move.learn_method.name === 'level-up'">Learned at level {{move.level_learned_at}}</p>
          <p>Power: {{ move.power }}</p>
          <p>Accuracy: {{ move.accuracy }}%</p>
          <VueMarkdown>{{ parseMoveEffect(move.effect_entries.slice(-1)[0].effect) }}</VueMarkdown>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
import { blank, titleize } from 'spiceutils'
import VueMarkdown from 'vue-markdown'
import * as api from 'api'

import TypeDisplay from '../../TypeDisplay'

export default {
  props: ['move'],
  methods: {
    blank,
    titleize,
    parseMoveEffect(effectText){
      let text = effectText
      ;['effect_chance'].forEach((property) => {
        text = text.replace(`$${property}`, this.move[property])
      })
      return text
    },
  },
  components: {
    TypeDisplay,
    VueMarkdown,
  },
}
</script>
