import axios from "axios";
import
    {
        GET_FILM,
        GET_FILM_BY_ID,
        GET_FILM_FAILURE
    }
from "../types/films";
import { showLoader, hideLoader } from '../../store/actions/loader'
import filmsjson from '../../db/films.json'

export const getFilms = films => (
    {
        type: GET_FILM,
        payload: films
    }
)

export const getFilmById = filmById => (
    {
        type: GET_FILM_BY_ID,
        payload: filmById
    }
)

export const getFilmsFailure = error => (
    {
        type: GET_FILM_FAILURE,
        payload: error
    }
)

export const getFilmsAsync = () => {
    return async (dispatch) => {
        try {
           const { data } = await axios.get(`http://localhost:8080/films`)
           dispatch(getFilms(data))
        }
        catch (error) {
            dispatch(getFilmsFailure(error))
        }
    }
}

export const getFilmByIdAsync = (filmId) => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())
            setTimeout(() => {
                const filmById = filmsjson.find(film => film.id === filmId);
                dispatch(getFilmById(filmById))
                dispatch(hideLoader())
            }, 1500)
        }
        catch (error) {
            dispatch(getFilmsFailure(error))
        }
    }
}
