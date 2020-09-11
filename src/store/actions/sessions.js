import {
    GET_SESSION_BY_ID_FILM,
    GET_SESSION_FAILURE,
    GET_SESSION_HALL_ID
} from "../types/sessions";
import sessionsjson from '../../db/session.json'

export const getSessionByIdFilm = sessionByFilmId => (
    {
        type: GET_SESSION_BY_ID_FILM,
        payload: sessionByFilmId
    }
)

export const getHallIdByIdSession = hallBySessionId => (
    {
        type: GET_SESSION_HALL_ID,
        payload: hallBySessionId
    }
)

export const getSessionFailure = error => (
    {
        type: GET_SESSION_FAILURE,
        payload: error
    }
)

export const getSessionsByIdFilmAsync = (id) => {
    return async(dispatch) => {
        try {
            const sessionByIdFilm = sessionsjson.filter(session => session.id_film === id)
            setTimeout(() => dispatch(getSessionByIdFilm(sessionByIdFilm)), 1000)
        }
        catch(error) {
            dispatch(getSessionFailure(error))
        }
    }
}

export const getHallIdByIdSessionAsync = (id) => {
    return async(dispatch) => {
        try {
            const hallByIdFilm = sessionsjson.find(session => session.id === id)
            setTimeout(() => dispatch(getHallIdByIdSession(+hallByIdFilm.hall)), 1000)
        }
        catch(error) {
            dispatch(getSessionFailure(error))
        }
    }
}
