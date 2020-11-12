import
    { GET_USERS, GET_USERS_FAILURE, GET_USER_BY_ID, LOGIN_USER, LOGIN_USER_FAILURE, LOGOUT_USER, LOGOUT_USER_FAILURE, SIGN_UP_USER, SIGN_UP_USER_FAILURE }
from "../types/users"

const initState = {
    users: [],
    user: null,
    userById: '',
    error: ''
}

export const usersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USERS:
            return { ...state, users: action.payload}
        case GET_USER_BY_ID:
            return { ...state, userById: action.payload}
        case GET_USERS_FAILURE:
            return { ...state, error: action.payload}
        case SIGN_UP_USER:
            return { ...state, user: action.payload}
        case SIGN_UP_USER_FAILURE:
            return { ...state, error: action.payload}
        case LOGIN_USER:
            return { ...state, user: action.payload}
        case LOGIN_USER_FAILURE:
            return { ...state, error: action.payload}
        case LOGOUT_USER:
            return { ...state, user: null}
        case LOGOUT_USER_FAILURE:
            return { ...state, error: action.payload}
        default: return state
    }
}
