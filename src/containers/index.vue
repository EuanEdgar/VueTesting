<template>
  <div>
    <b-list-group v-for="item in items" :key="item.path">
      <b-list-group-item>
        <router-link :to="item.path">{{ item.label }}</router-link>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{
        path: '/hello',
        label: 'Hello, world!',
      }, {
        path: '/pokedex',
        label: 'Pokedex',
      }]
    }
  }
}
</script>
