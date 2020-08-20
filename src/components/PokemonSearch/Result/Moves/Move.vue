<template>
  <div v-if="!blank(moveDetails)">
    <b-card
      :title="`${moveDetails.names.find(({ language }) => language.name === 'en').name} #${moveDetails.id}`"
    >
      <p>Type: {{ titleize(moveDetails.type.name) }}</p>
      <p>Power: {{ moveDetails.power }}</p>
      <p>Accuracy: {{ moveDetails.accuracy }}%</p>
      <p>{{ parseMoveEffect(moveDetails.effect_entries.slice(-1)[0].effect) }}</p>
    </b-card>
  </div>
</template>

<script>
import * as api from 'api'
import { blank, titleize } from 'utils'

export default {
  props: ['move'],
  data() {
    return {
      moveDetails: {},
    }
  },
  created() {
    const { move } = this

    api.getURL(move.url).then((move) => {
      this.moveDetails = move
    })
  },
  methods: {
    blank,
    titleize,
    parseMoveEffect(effectText){
      let text = effectText
      ;['effect_chance'].forEach((property) => {
        text = text.replace(`$${property}`, this.moveDetails[property])
      })
      return text
    }
  }
}
</script>
