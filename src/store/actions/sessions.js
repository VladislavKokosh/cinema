import {
    GET_SESSIONS,
    GET_SESSION_BY_ID_FILM,
    GET_SESSION_BY_ID
} from "../types/sessions";

export function getSessions(session) {
    return {
        type: GET_SESSIONS,
        payload: session
    }
}

export function getSessionByIdFilm(id_film) {
    return {
        type: GET_SESSION_BY_ID_FILM,
        payload: id_film
    }
}

export function getSessionById(id) {
    return {
        type: GET_SESSION_BY_ID,
        payload: id
    }
}
