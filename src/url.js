import { API_KEY } from './constants/constants'

export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const adventure = `/discover/movie?api_key=${API_KEY}&with_genres=12`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const drama = `/discover/movie?api_key=${API_KEY}&with_genres=18`
export const searchUrl = `/search/movie?api_key=${API_KEY}`
