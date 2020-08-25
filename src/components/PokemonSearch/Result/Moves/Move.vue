<template>
  <Expand :delay="index / 20">
    <div v-if="!blank(moveDetails)">
      <b-card>
        <b-container>
          <b-row>
            <b-col cols="8">
              <h2>{{ moveDetails.names.find(({ language }) => language.name === 'en').name }}</h2>
            </b-col>
            <b-col class="text-right">
              <h3>#{{ moveDetails.id }}</h3>
              <TypeDisplay :type="moveDetails.type.name" />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p v-if="moveDetails.move_learn_method.name === 'level-up'">Learned at level {{moveDetails.level_learned_at}}</p>
              <p v-if="!blank(moveDetails.power)">Power: {{ moveDetails.power }}</p>
              <p v-if="!blank(moveDetails.accuracy)">Accuracy: {{ moveDetails.accuracy }}%</p>
              <p v-if="!blank(moveDetails.pp)">PP: {{ moveDetails.pp }}</p>
              <VueMarkdown>{{ parseMoveEffect(moveDetails.effect_entries.find(({ language }) => language.name === 'en').effect) }}</VueMarkdown>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </div>
  </Expand>
</template>

<script>
import { blank, titleize } from 'spiceutils'
import VueMarkdown from 'vue-markdown'
import * as api from 'api'

import Expand from 'components/transitions/Expand'
import TypeDisplay from '../../TypeDisplay'

export default {
  props: ['move', 'index'],
  data() {
    return {
      moveDetails: null,
    }
  },
  async created() {
    const { move } = this

    const details = await api.getURL(move.move.url)

    const versionDetails = move.version_group_details.slice(-1)[0]

    this.moveDetails = {
      ...details,
      ...versionDetails,
    }
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
    },
  },
  components: {
    Expand,
    TypeDisplay,
    VueMarkdown,
  },
}
</script>
