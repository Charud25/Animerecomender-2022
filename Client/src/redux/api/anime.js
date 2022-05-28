import axios from 'axios'

const url = 'https://kitsu.io/api/edge/anime?page%5Blimit%5D=20'

export const fetchAnimeList = () => axios.get(url)
export const getAnime = (id) => axios.get(`${url}/${id}`)


