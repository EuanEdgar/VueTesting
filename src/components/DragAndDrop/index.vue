<template>
  <div>
    <p>Dragging: {{ dragging }}</p>
    <p>Hovering: {{ hovering }}</p>
    <b-list-group>
      <DraggableItem
        v-for="(item, index) in items"
        :key="item.id"
        :item="item"
        :dragging="dragging && dragging.id === item.id"
        :hovered="hovering && hovering.id === item.id"
        :showFinalDropzone="index === items.length - 1"
        name="testing"
        @dragstart="dragstart"
        @dragend="dragend"
        @drop="drop"
        @hover="hover"
      />
    </b-list-group>
  </div>
</template>

<script>
import DraggableItem from './DraggableItem'

export default {
  data() {
    return {
      items: [...new Array(10)].map((_, i) => ({ text: i, id: i })),
      dragging: false,
      hovering: false
    }
  },
  methods: {
    dragstart(item) {
      this.dragging = item
    },
    dragend() {
      this.dragging = false
    },
    drop(targetId, position) {
      const startIndex = this.items.findIndex(({ id }) => this.dragging.id === id)
      let finalIndex = this.items.findIndex(({ id }) => this.hovering.id === id)

      if(position === 'before'){
        finalIndex -= 1
      }

      if(startIndex !== finalIndex) {
        const items = [...this.items]

        const item = items.splice(startIndex, 1)[0]
        items.splice(finalIndex, 0, item)
        this.items = items
      }
    },
    hover(itemId) {
      const item = this.items.find(({ id }) => id === itemId)
      if(item) {
        this.hovering = item
      } else {
        this.hovering = false
      }
    }
  },
  components: {
    DraggableItem,
  }
}
</script>
