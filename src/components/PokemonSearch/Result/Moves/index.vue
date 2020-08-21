<template>
  <div>
    <h3>Levelup Moves</h3>
    <div v-for="move in groupedMoves['level-up']" v-bind:key="move.id">
      <Move v-bind:move="move" />
    </div>
    <h3>Egg moves</h3>
    <div v-for="move in groupedMoves['egg']" v-bind:key="move.id">
      <Move v-bind:move="move" />
    </div>
    <h3>TM/HM</h3>
    <div v-for="move in groupedMoves['machine']" v-bind:key="move.id">
      <Move v-bind:move="move" />
    </div>
  </div>
</template>

<script>
import { groupBy } from 'spiceutils'
import * as api from 'api'

import Move from './Move'

export default {
  props: ['moves'],
  data() {
    return {
      groupedMoves: {}
    }
  },
  async created(){
    const moveDetails = await Promise.all(this.moves.map(({ move }) => api.getURL(move.url)))
    const movesWithDetails = moveDetails.map((details, index) => {
      const move = this.moves[index]
      const versionDetails = move.version_group_details.slice(-1)[0]

      return {
        ...details,
        level_learned_at: versionDetails.level_learned_at,
        learn_method: versionDetails.move_learn_method,
      }
    })

    this.groupedMoves = groupBy(movesWithDetails, ['learn_method', 'name'])

    this.groupedMoves['level-up'].sort(({level_learned_at: a}, {level_learned_at: b}) => a - b)
  },
  components: {
    Move
  }
}
</script>
