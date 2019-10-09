<template>
  <v-card
    @click="goToHome"
    class="logo"
    flat
  >
    <h1>TMDb Vue App</h1>
  </v-card>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'app-logo',
  methods: {
    goToHome () {
      this.$router.push('/')
    }
  }
})
</script>

<style lang="sass">
  .logo
    padding: 16px
    cursor: pointer
</style>
