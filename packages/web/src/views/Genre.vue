<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex md2 v-for="movie in movies">
        <movie-card
          :key="movie.id"
          :id="movie.id"
          :title="movie.title"
          :release-date="movie.release_date"
          :poster="movie.poster_path"
        />
      </v-flex>

      <v-flex xs12 class="text-xs-center">
        <show-more-button
          @click="fetchMovies"
          v-model="isLoading"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import apiClient from '@/services/apiClient'
import MovieCard from '@/components/MovieCard'
import ShowMoreButton from '@/components/ShowMoreButton'

export default Vue.extend({
  name: 'genre',
  async created () {
    return this.fetchMovies()
  },
  async beforeRouteUpdate (to, from, next) {
    this.resetData()
    next()
    this.fetchMovies()
  },
  data: () => ({
    movies: [],
    page: 0,
    isLoading: false
  }),
  methods: {
    async fetchMovies () {
      this.page++

      const params = {
        page: this.page,
        genre: this.id
      }

      this.isLoading = true
      const movies = await apiClient.get('movie', { params })
        .then(res => res.data.results)
        .catch(err => console.error(err))
        .finally(() => this.isLoading = false)

      this.movies = this.movies.concat(movies)
    },
    resetData () {
      this.movies = []
      this.page = 0
      this.isLoading = false
    }
  },
  components: {
    MovieCard,
    ShowMoreButton
  },
  props: {
    id: {
      type: String,
      required: true
    }
  }
})
</script>
