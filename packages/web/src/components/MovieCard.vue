<template>
  <v-card
    @click="goToMovie"
    class="movie-card"
  >
    <v-img
      v-if="poster"
      :src="`${TMDbURL}/${poster}`"
      aspect-ratio="0.66"
    />
    <v-card-text>
      <h2 class="movie-card__title">{{ title }}</h2>
      <div class="movie-card__year">{{ year }}</div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    date () {
      return new Date(this.releaseDate)
    },
    year () {
      return this.date.getFullYear()
    }
  },

  data: () => ({
    TMDbURL: process.env.VUE_APP_TMDB_CDN
  }),

  methods: {
    goToMovie () {
      this.$router.push({
        name: 'movie',
        params: {
          id: this.id
        }
      })
    }
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    releaseDate: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="sass">
  .movie-card
    height: 100%
    cursor: pointer

    &__title
      font-size: 16px
      font-weight: normal
      color: #000
    &__year
      font-size: 18px
      color: #757575
</style>
