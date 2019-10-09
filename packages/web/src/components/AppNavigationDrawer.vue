<template>
  <v-navigation-drawer
    permanent
    app
  >
    <app-logo/>

    <v-divider></v-divider>

    <v-list>

      <v-list-tile
        v-for="item in items"
        :key="item.id"
        active-class="primary--text"
        :class="item.id === $route.params.id ? 'primary--text' : ''"
        @click="goToCategory(item.id)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLogo from './AppLogo'

export default Vue.extend({
  data: () => ({
  }),
  methods: {
    goToCategory (id: number) {
      this.$router.replace({
        name: 'genre',
        params: {
          id
        }
      })
    }
  },
  components: {
    AppLogo
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
})
</script>
