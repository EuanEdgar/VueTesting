<template>
  <b-list-group-item
    draggable
    @dragstart="$emit('dragstart', item)"
    @dragend="$emit('dragend')"
    @dragover="dragover"
    @drop="drop"
    :data-item-id="item.id"
    :data-draggable-name="name"
  >
    <b-list-group-item
      v-if="hovered && !dragging"
      class="text-center"
      data-target="before"
    >
      Drop here
    </b-list-group-item>
    {{ item.text }}
    <b-list-group-item
      v-if="hovered && !dragging && showFinalDropzone"
      class="text-center"
      data-target="after"
    >
      Drop here
    </b-list-group-item>
  </b-list-group-item>
</template>

<script>
import { dig } from 'spiceutils'

export default {
  props: [
    'item',
    'name',
    'dragging',
    'hovered',
    'showFinalDropzone'
  ],
  methods: {
    drop(event) {
      const target = event.target.closest(`[data-draggable-name="${this.name}"]`)

      const position = dig(event.target, 'dataset', 'target') || 'before'

      if(target) {
        this.$emit('drop', parseInt(target.dataset.itemId), position)
      }

      this.$emit('hover', null)
    },
    dragover(event) {
      const target = event.target.closest(`[data-draggable-name="${this.name}"]`)
      const name = dig(target, 'dataset', 'draggableName')

      if(name === this.name){
        event.preventDefault()
        this.$emit('hover', parseInt(target.dataset.itemId))
      } else {
        this.$emit('hover', null)
      }
    },
  }
}
</script>
