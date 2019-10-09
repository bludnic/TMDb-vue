<template>
  <v-container grid-list-md>
    <h1>{{ movie.title }}</h1>

    <template v-if="isFulfilled">
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

          <movie-trailer
            v-if="trailer"
            :id="trailer.key"
          />
        </v-flex>
      </v-layout>

      <v-layout>

        <v-flex xs12>
          <div class="subheading">{{ movie.overview }}</div>
        </v-flex>

      </v-layout>
    </template>
  </v-container>
</template>

<script type="ts">
import Vue from 'vue'

import apiClient from '@/services/apiClient'
import MovieMeta from '@/components/MovieMeta'
import MovieTrailer from '@/components/MovieTrailer'

export default Vue.extend({
  name: 'movie',
  mounted () {
    this.fetchMovie()
    this.fetchVideos()
  },
  computed: {
    trailer () {
      return this.videos.find(
        video => video.type === 'Trailer' && video.site === 'YouTube'
      )
    }
  },
  data: () => ({
    movie: {},
    videos: [],
    TMDbURL: process.env.VUE_APP_TMDB_CDN,
    isFulfilled: false
  }),
  methods: {
    async fetchMovie () {
      this.movie = await apiClient.get(`movie/${this.id}`)
        .then(res => res.data)
      this.isFulfilled = true
    },
    async fetchVideos () {
      this.videos = await apiClient.get(`movie/${this.id}/videos`)
        .then(res => res.data)
    }
  },
  components: {
    MovieMeta,
    MovieTrailer
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  }
})
</script>
