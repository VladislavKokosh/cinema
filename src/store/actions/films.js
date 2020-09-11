import
    {
        GET_FILM,
        GET_FILM_BY_ID,
        GET_FILM_FAILURE
    }
from "../types/films";
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
            setTimeout(() => dispatch(getFilms(filmsjson)), 1000)
        }
        catch (error) {
            dispatch(getFilmsFailure(error))
        }
    }
}

export const getFilmByIdAsync = (filmId) => {
    return async (dispatch) => {
        try {
            const filmById = filmsjson.find(film => film.id === filmId);
            setTimeout(() => dispatch(getFilmById(filmById)), 1000)
        }
        catch (error) {
            dispatch(getFilmsFailure(error))
        }
    }
}

// export function getFilmById(id) {
//     return {
//         type: GET_FILM_BY_ID,
//         payload: id
//     }
// }



