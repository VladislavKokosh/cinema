import 
{ 
    GET_USERS, 
    SET_USERS, 
    GET_USERS_FAILURE, 
    SIGN_UP_USER, 
    SIGN_UP_USER_FAILURE,
    LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    LOGOUT_USER_FAILURE
 } from "../types/users";
import usersjson from '../../db/users.json';
import { hideLoginModal, hideRegistrModal } from '../../store/actions/modal';
import axios from "axios";
import { message } from 'antd';

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

export const signUpUser = (user) => (
    {
        type: SIGN_UP_USER,
        payload: user
    }
)

export const signUpUserFailure = (error) => (
    {
        type: SIGN_UP_USER_FAILURE,
        payload: error
    }
)

export const signUpUserAsync = (user) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:8080/users/signup`, user)
            const { id } = data;

            if (id) {
                dispatch(hideRegistrModal());
                message.success('Вы успешно зарегистрировались!')
            } 
            else {
                message.error('Введите данные!');
            };
        }
        catch (error) {
            dispatch(signUpUserFailure(error))
        }
    }
}

export const loginUser = (user) => (
    {
        type: LOGIN_USER,
        payload: user
    }
)

export const loginUserFailure = (error) => (
    {
        type: LOGIN_USER_FAILURE,
        payload: error
    }
)

export const loginUserAsync = (user) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:8080/users/login`, user)
            const { id, token, login } = data;

            if (token) {
                localStorage.setItem('token', token);
                dispatch(loginUser({id, login}))
                dispatch(hideLoginModal());
                message.success('Вы успешно авторизовались!')
            }
            else {
                message.error('Токен не найден!')
            }

        }
        catch (error) {
            dispatch(loginUserFailure(error))
            message.error('Некорректный ввод!')
        }
    }
}

export const logoutUser = () => (
    {
        type: LOGOUT_USER
    }
)

export const logoutUserFailure = (error) => (
    {
        type: LOGOUT_USER_FAILURE,
        payload: error
    }
)

export const logoutUserAsync = () => {
    return async (dispatch) => {
        try {
            localStorage.clear()
            dispatch(logoutUser())
            message.success('Вы вышли со своего аккаунта!')
        }
        catch (error) {
            dispatch(logoutUserFailure(error))
            message.error('Что-то пошло не так!')
        }
    }
}


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