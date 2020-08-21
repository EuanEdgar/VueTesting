<template>
<div v-if="abilityDetails">
  <b-card
    :title="abilityDetails.names.find(({ language }) => language.name === 'en').name"
  >
    <p>Slot: {{ abilityDetails.is_hidden ? 'Hidden' : abilityDetails.slot }}</p>
    <p>{{ abilityDetails.effect_entries.find(({ language }) => language.name === 'en').effect }}</p>
  </b-card>
</div>
</template>

<script>
import * as api from 'api'

export default {
  props: ['ability'],
  data() {
    return {
      abilityDetails: null,
    }
  },
  created() {
    const { ability } = this

    api.getURL(ability.ability.url).then((abilityDetails) => {
      this.abilityDetails = {
        ...abilityDetails,
        is_hidden: ability.is_hidden,
        slot: ability.slot,
      }
    })
  }
}
</script>
