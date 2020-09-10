import { GET_SESSION_BY_ID_FILM, GET_SESSIONS, GET_SESSION_BY_ID } from "../types/sessions"

const initState = {
    sessions: [],
    sessionById: '',
    sessionByIdFilm: null
}

export const sessionsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_SESSIONS:
            return {...state, sessions: action.payload}
        case GET_SESSION_BY_ID_FILM:
            return { ...state, sessionByIdFilm: state.sessions.filter(session => session.id_film == action.payload)}
        case GET_SESSION_BY_ID:
            const sessionByID = state.sessions.find(session => session.id == action.payload)
            return { ...state, sessionById: sessionByID }
        default: return state
    }
}