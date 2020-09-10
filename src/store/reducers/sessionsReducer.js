import { GET_SESSION_BY_ID, GET_SESSIONS } from "../types/sessions"

const initState = {
    sessions: [],
    sessionById: []
}

export const sessionsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_SESSIONS:
            return {...state, sessions: action.payload}
        case GET_SESSION_BY_ID:
            return { ...state, sessionById: state.sessions.filter(session => session.id_film == action.payload)}
        default: return state
    }
}