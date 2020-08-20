<template>
  <div v-if="!blank(moveDetails)">
    <b-card>
      <p>ID: {{ moveDetails.id }}</p>
      <p>Name: {{ moveDetails.names.find(({ language }) => language.name === 'en').name }}</p>
      <p>Type: {{ titleize(moveDetails.type.name) }}</p>
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
    titleize
  }
}
</script>
