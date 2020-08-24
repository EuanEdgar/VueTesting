<template>
  <div>
    <h1
      v-on:click="toggle"
    >
      {{ title }}
    </h1>
    <FadeIn>
      <slot v-if="!collapsed" />
    </FadeIn>
  </div>
</template>

<script>
import FadeIn from 'components/transitions/FadeIn'

export default {
  props: ['title'],
  data(){
    return {
      collapsed: this.initialCollapsed || true,
    }
  },
  methods: {
    toggle(){
      this.collapsed = !this.collapsed
    },
  },
  components: {
    FadeIn,
  },
}
</script>
