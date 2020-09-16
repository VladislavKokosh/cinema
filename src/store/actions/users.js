import { GET_USERS, SET_USERS, GET_USERS_FAILURE } from "../types/users";
import usersjson from '../../db/users.json'

export const getUsers = (users) => (
    {
        type: GET_USERS,
        payload: users
    }
)

export const setUser = (user) => (
    {
        type: SET_USERS,
        payload: user
    }
)

export const getUsersFailure = (error) => (
    {
        type: GET_USERS_FAILURE,
        payload: error
    }
)


export const getUsersAsync = () => {
    return async (dispatch) => {
        try {
            setTimeout(() => {
                dispatch(getUsers(usersjson))
            }, 10)
        }
        catch (error) {
            dispatch(getUsersFailure(error))
        }
    }
}

export const setUserAsync = (user) => {
    return async(dispatch) => {
        try {
            setTimeout(()=>{
                dispatch(setUser(user))
            }, 10)
        }
        catch(error) {

        }
    }
}