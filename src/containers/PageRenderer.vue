<template>
  <div v-if="data">
    <PageRenderer :data="data" />
  </div>
</template>

<script>
import PageRenderer from 'components/PageRenderer'

export default {
  data() {
    return {
      data: null,
    }
  },
  async mounted() {
    const response = await fetch('/page_renderer.json')
    const json = await response.json()

    this.data = json
  },
  components: {
    PageRenderer,
  },
}
</script>
