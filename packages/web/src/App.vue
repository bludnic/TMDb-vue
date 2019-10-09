<template>
  <v-app id="app">
    <app-navigation-drawer :items="genres"/>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigationDrawer from '@/components/AppNavigationDrawer'

import apiClient from '@/services/apiClient'

export default {
  mounted () {
    return this.fetchGenres()
  },
  data: () => ({
    genres: []
  }),
  methods: {
    async fetchGenres () {
      this.genres = await apiClient.get('genre')
        .then(res => res.data)
    }
  },
  components: {
    AppNavigationDrawer
  }
}
</script>

<style lang="scss">
</style>
