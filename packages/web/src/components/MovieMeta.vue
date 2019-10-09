<template>
  <table class="movie-meta">
    <tbody>

      <tr class="movie-meta__item">
        <td class="movie-meta__attr">year</td>
        <td>{{ year }}</td>
      </tr>

      <tr class="movie-meta__item">
        <td class="movie-meta__attr">country</td>
        <td>{{ countries }}</td>
      </tr>

      <tr class="movie-meta__item">
        <td class="movie-meta__attr">tagline</td>
        <td>{{ tagline }}</td>
      </tr>

      <tr class="movie-meta__item">
        <td class="movie-meta__attr">budget</td>
        <td>{{ budget | currency }}</td>
      </tr>

      <tr class="movie-meta__item">
        <td class="movie-meta__attr">revenue</td>
        <td>{{ revenue | currency }}</td>
      </tr>

      <tr class="movie-meta__item">
        <td class="movie-meta__attr">age</td>
        <td>{{ age }}</td>
      </tr>

      <tr v-if="runtime" class="movie-meta__item">
        <td class="movie-meta__attr">runtime</td>
        <td>{{ runtime | time }}</td>
      </tr>

    </tbody>
  </table>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

import currency from '@/filters/currency'
import time from '@/filters/time'
import { TMDbProductionCountry } from '../../../api/src/models'

export default Vue.extend({
  name: 'movie-meta',
  computed: {
    year (): number {
      return (new Date(this.releaseDate))
        .getFullYear()
    },
    countries (): string {
      return this.productionCountries
        .map((country: TMDbProductionCountry) => country.name)
        .join(', ')
    },
    age (): string {
      return this.adult ? '18+' : '6+'
    }
  },
  filters: {
    currency,
    time
  },
  props: {
    title: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    releaseDate: {
      type: String,
      required: true
    },
    productionCountries: {
      type: Array,
      required: true
    } as PropOptions<TMDbProductionCountry[]>,
    tagline: {
      type: String,
      required: true
    },
    budget: {
      type: Number,
      required: true
    },
    adult: {
      type: Boolean,
      required: true
    },
    revenue: {
      type: Number
    },
    backdropPath: {
      type: String
    },
    posterPath: {
      type: String
    },
    runtime: {
      type: Number,
      default: 0
    }
  }
})
</script>

<style lang="sass">
  .movie-meta
    width: 100%

    &__item
      font-size: 18px
      border-bottom: 3px dotted red

      > td
        padding: 4px 8px

    &__attr
      width: 10%
      color: royalblue
</style>
