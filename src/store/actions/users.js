import { GET_USERS, SET_USERS, GET_USERS_FAILURE, GET_USER_BY_ID } from "../types/users";
import usersjson from '../../db/users.json'
import axios from "axios";

export const getUsers = (users) => (
    {
        type: GET_USERS,
        payload: users
    }
)

export const getUserById = (userById) => (
    {
        type: GET_USERS,
        payload: userById
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

export const getUserByIdAsync = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:8080/sessions/${id}`)
            dispatch(getUserById(data))
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