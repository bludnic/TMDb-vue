<template>
  <div clas="movie-trailer">
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${id}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'movie-trailer',
  props: {
    id: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="sass">
</style>
