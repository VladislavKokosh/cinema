import {
    GET_SESSION_BY_ID_FILM,
    GET_SESSION_FAILURE,
    GET_SESSION_HALL_ID
} from "../types/sessions"

const initState = {
    sessions: [],
    sessionByIdFilm: [],
    sessionHallId: '',
    error: ''
}

export const sessionsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_SESSION_BY_ID_FILM:
            return { ...state, sessionByIdFilm: action.payload }
        case GET_SESSION_FAILURE:
            return { ...state, error: action.payload }
        case GET_SESSION_HALL_ID:
            return { ...state, sessionHallId: action.payload}
        default: return state
    }
}