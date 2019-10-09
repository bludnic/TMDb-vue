<template>
  <v-container grid-list-md>
    <h1>{{ movie.title }}</h1>

    <v-layout row wrap>
      <v-flex md4>
        <v-img
          :src="`${TMDbURL}/${movie.poster_path}`"
          aspect-ratio="0.66"
        />

      </v-flex>

      <v-flex md8>
        <movie-meta
          :title="movie.title"
          :overview="movie.overview"
          :releaseDate="movie.release_date"
          :productionCountries="movie.production_countries"
          :tagline="movie.tagline"
          :budget="movie.budget"
          :revenue="movie.revenue"
          :backdropPath="movie.backdrop_path"
          :posterPath="movie.poster_path"
          :runtime="movie.runtime"
          :adult="movie.adult"
        />

        <v-list class="transparent">
          <v-list-tile>year: {{ movie.release_date }}</v-list-tile>
          <v-list-tile>countries {{ movie.production_countries }}</v-list-tile>
          <v-list-tile>slogan {{ movie.tagline }}</v-list-tile>
          <v-list-tile>budget {{ movie.budget }}</v-list-tile>
          <v-list-tile>revenue {{ movie.revenue }}</v-list-tile>

          <v-list-tile>movie.backdrop_path</v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>

    <v-layout>

      <v-flex xs12>
        <div class="subheading">{{ movie.overview }}</div>
      </v-flex>

    </v-layout>

  </v-container>
</template>

<script type="ts">
import Vue from 'vue'

import apiClient from '@/services/apiClient'
import MovieMeta from '@/components/MovieMeta'

export default Vue.extend({
  name: 'movie',
  mounted () {
    return this.fetchMovie()
  },
  data: () => ({
    movie: {},
    TMDbURL: process.env.VUE_APP_TMDB_CDN
  }),
  methods: {
    async fetchMovie () {
      this.movie = await apiClient.get(`movie/${this.id}`)
        .then(res => res.data)
    }
  },
  components: {
    MovieMeta
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
})
</script>
