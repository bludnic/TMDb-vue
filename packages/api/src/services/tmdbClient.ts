import axios from 'axios'

import { KeyValue} from '../models'

import { TMDbGenre, TMDbMoviesResponse, TMDbMovieFull, TMDbVideo } from '../models'

const client = axios.create({
  baseURL: process.env.TMDbURL
})

client.defaults.params = {
  api_key: process.env.TMDbKey
}

export default {
  getMovies (page?: number, genre?: string): Promise<TMDbMoviesResponse> {
    const params: KeyValue = {
      api_key: process.env.TMDbKey
    }
    page ? params.page = page : null
    genre ? params.with_genres = genre : null

    return client.get(`${process.env.TMDbURL}/discover/movie`, { params })
      .then(res => res.data)
  },

  getGenres (): Promise<TMDbGenre[]> {
    return client.get(`${process.env.TMDbURL}/genre/movie/list`, {
      params: {
        api_key: process.env.TMDbKey
      }
    }).then(res => res.data.genres)
  },

  getPopular (page?: number): Promise<TMDbMoviesResponse> {
    const params: KeyValue = {
      api_key: process.env.TMDbKey
    }
    page ? params.page = page : null

    return client.get(`${process.env.TMDbURL}/movie/popular`, { params })
      .then(res => res.data)
  },

  getById (id: number): Promise<TMDbMovieFull> {
    return client.get(`${process.env.TMDbURL}/movie/${id}`)
      .then(res => res.data)
  },

  getVideos (id: number): Promise<TMDbVideo[]> {
    return client.get(`${process.env.TMDbURL}/movie/${id}/videos`)
      .then(res => res.data.results)
  }
}
