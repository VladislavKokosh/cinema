import
    {
        GET_SESSION_BY_ID,
        GET_SESSION_BY_ID_FILM,
        GET_SESSION_FAILURE,
        GET_SESSION_HALL_ID
    }
from "../types/sessions";
import { showLoader, hideLoader } from '../../store/actions/loader'
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

export const getSessionById = sessionById => (
    {
        type: GET_SESSION_BY_ID,
        payload: sessionById
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
            dispatch(showLoader())
            setTimeout(() => {
                const sessionByIdFilm = sessionsjson.filter(session => session.id_film === id)
                dispatch(getSessionByIdFilm(sessionByIdFilm))
                dispatch(hideLoader())
            }, 1500)
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

export const getSessionByIdAsync = (id) => {
    return async(dispatch) => {
        try {
            dispatch(showLoader())
            setTimeout(() => {
                const sessionById = sessionsjson.find(session => session.id === id)
                dispatch(getSessionById(sessionById))
                dispatch(hideLoader())
            }, 1500)
        }
        catch(error) {
            dispatch(getSessionFailure(error))
        }
    }
}
