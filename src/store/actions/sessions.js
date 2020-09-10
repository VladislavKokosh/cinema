import { GET_SESSIONS, GET_SESSION_BY_ID } from "../types/sessions";

export function getSessions(session) {
    return {
        type: GET_SESSIONS,
        payload: session
    }
}

export function getSessionById(id_film) {
    return {
        type: GET_SESSION_BY_ID,
        payload: id_film
    }
}
