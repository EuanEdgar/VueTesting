<template>
  <div :style="wrapperStyle" class="outerWrapper">
    <div ref="labelRef" v-on:click="toggle">
      <a>
        {{ title }}
      </a>
    </div>
    <div class="container" ref="containerRef">
      <slot />
    </div>
  </div>
</template>

<script>
import { dig } from 'spiceutils'

export default {
  props: ['title', 'initialCollapse'],
  data() {
    return {
      collapsed: this.initialCollapse || true,
      labelHeight: 0,
      containerHeight: 0,
    }
  },
  computed: {
    wrapperStyle() {
      const style = {}
      if(this.collapsed){
        style.height =  `${this.labelHeight}px`
      } else {
        style.height =  `${this.containerHeight + this.labelHeight}px`
      }
      return style
    },
  },
  mounted(){
    this.computeHeights()
  },
  updated(){
    this.computeHeights()
  },
  methods: {
    toggle(){
      this.collapsed = !this.collapsed
    },
    computeHeights(){
      this.labelHeight = this.$refs.labelRef.clientHeight
      this.containerHeight = this.$refs.containerRef.clientHeight
    },
  },
}
</script>

<style lang="scss" scoped>
  div.outerWrapper {
    overflow: hidden;
    transition: height 0.1s ease-in;
  }
</style>
