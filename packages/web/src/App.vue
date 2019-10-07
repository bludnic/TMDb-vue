<template>
  <v-app id="app">
    <app-navigation-drawer :items="genresMock"/>

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

export default {
  data: () => ({
    genresMock: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' }
    ]
  }),
  components: {
    AppNavigationDrawer
  }
}
</script>

<style lang="scss">
</style>
