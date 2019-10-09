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

export interface TMDbMovieFull extends TMDbMovie {
  belongs_to_collection: boolean
  budget: number
  genres: TMDbGenre[]
  homepage: string
  imdb_id: number
  production_companies: TMDbProductionCompany[]
  production_countries: TMDbProductionCountry[]
  revenue: number
  runtime: number
  spoken_languages: TMDbSpokenLanguage[]
  status: string
  tagline: string
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

export interface TMDbProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface TMDbProductionCountry {
  iso_3166_1: string
  name: string
}

export interface TMDbSpokenLanguage {
  iso_639_1: string
  name: string
}

export type TMDbVideoProvider = 'YouTube' | 'Vimeo'
export type TMDbVideoSize = 360 | 480 | 720 | 1080
export type TMDbVideoType = 'Trailer' | 'Teaser' | 'Clip' | 'Featurette' | 'Behind the Scenes' | 'Bloopers'

export interface TMDbVideo {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  site: TMDbVideoProvider
  size: TMDbVideoSize
  type: TMDbVideoType
}

export interface KeyValue {
  [key: string]: any
}
