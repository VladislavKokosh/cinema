import
    { GET_USERS, GET_USERS_FAILURE, GET_USER_BY_ID }
from "../types/users"

const initState = {
    users: [],
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
        default: return state
    }
}
