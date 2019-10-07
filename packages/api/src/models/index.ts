export interface TMDbMovie {
  popularity: number
  vote_count: number
  video: boolean
  poster_path: string
  id: number
  adult: boolean
  backdrop_path: string
  original_language: string
  original_title: string
  genre_ids: number[]
  title: string
  vote_average: number
  overview: string
  release_date: string
}

export interface TMDbMoviesResponse {
  page: number
  total_results: number
  total_pages: number
  results: TMDbMovie[]
}

export interface TMDbGenre {
  id: number
  name: string
}

export interface KeyValue {
  [key: string]: any
}
