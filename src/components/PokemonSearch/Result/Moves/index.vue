<template>
  <div>
    <FadeIn>
      <div v-if="!blank(groupedMoves['level-up'])">
        <h3>Levelup Moves</h3>
        <div v-for="move in groupedMoves['level-up']" v-bind:key="move.id">
          <Move v-bind:move="move" />
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div v-if="!blank(groupedMoves['egg'])">
        <h3>Egg moves</h3>
        <div v-for="move in groupedMoves['egg']" v-bind:key="move.id">
          <Move v-bind:move="move" />
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div v-if="!blank(groupedMoves['machine'])">
        <h3>TM/HM</h3>
        <div v-for="move in groupedMoves['machine']" v-bind:key="move.id">
          <Move v-bind:move="move" />
        </div>
      </div>
    </FadeIn>
  </div>
</template>

<script>
import { blank, groupBy } from 'spiceutils'

import FadeIn from 'components/transitions/FadeIn'

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

    this.groupedMoves['level-up'].sort(({version_group_details: { move_learn_level: a }}, {version_group_details: { move_learn_level: b }}) => a - b)
  },
  methods: {
    blank,
  },
  components: {
    FadeIn,
    Move,
  },
}
</script>
