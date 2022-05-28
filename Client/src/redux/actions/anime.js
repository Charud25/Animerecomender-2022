import * as anime from '../api/anime'
import { FETCH_ANIME_LIST } from '../constants/actionTypes'

export const fetchAnimeList = () => async(dispatch) =>
{
    try {
        const{ data } = await anime.fetchAnimeList()

        const action  = {
            type : FETCH_ANIME_LIST,
            payload : data
        }
        dispatch(action)
    } catch (error) {
        console.error(error)
    }
}