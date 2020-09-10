import { GET_FILM, GET_FILM_BY_ID } from "../types/films";

export function getFilms(film) {
    return {
        type: GET_FILM,
        payload: film
    }
}

export function getFilmById(id) {
    return {
        type: GET_FILM_BY_ID,
        payload: id
    }
}