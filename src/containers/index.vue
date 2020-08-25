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
import { routes } from 'router'

export default {
  data() {
    return {
      items: routes,
    }
  }
}
</script>
