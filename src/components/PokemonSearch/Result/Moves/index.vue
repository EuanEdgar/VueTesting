<template>
  <div>
    <div v-if="!blank(groupedMoves['level-up'])">
      <h3>Levelup Moves</h3>
      <div v-for="(move, index) in groupedMoves['level-up'].slice(-1)" v-bind:key="move.move.url">
        <Move v-bind:move="move" :index="index" />
      </div>
    </div>
    <div v-if="!blank(groupedMoves['egg'])">
      <h3>Egg moves</h3>
      <div v-for="(move, index) in groupedMoves['egg']" v-bind:key="move.move.url">
        <Move v-bind:move="move" :index="index" />
      </div>
    </div>
    <div v-if="!blank(groupedMoves['machine'])">
      <h3>TM/HM</h3>
      <div v-for="(move, index) in groupedMoves['machine']" v-bind:key="move.move.url">
        <Move v-bind:move="move" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { blank, groupBy } from 'spiceutils'

import Move from './Move'

export default {
  props: ['moves'],
  data() {
    return {
      groupedMoves: {}
    }
  },
  created(){
    const { moves } = this

    this.groupedMoves = groupBy(moves, ({ version_group_details: versionDetails }) => {
      const details = versionDetails.slice(-1)[0]
      return details.move_learn_method.name
    })

    this.groupedMoves['level-up'].sort(({version_group_details: a}, {version_group_details: b}) => a.slice(-1)[0].level_learned_at - b.slice(-1)[0].level_learned_at)
  },
  methods: {
    blank,
  },
  components: {
    Move,
  },
}
</script>
