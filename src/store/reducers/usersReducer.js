import
    { GET_USERS, GET_USERS_FAILURE }
from "../types/users"

const initState = {
    users: [],
    error: ''
}

export const usersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USERS:
            return { ...state, users: action.payload}
        case GET_USERS_FAILURE:
            return { ...state, error: action.payload}
        default: return state
    }
}
