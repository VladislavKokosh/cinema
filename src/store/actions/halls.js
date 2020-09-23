import axios from "axios";
import
    {
        GET_HALLS,
        GET_HALL_BY_ID,
        GET_HALLS_FAILURE
    }
from "../types/halls";
import hallsjson from '../../db/halls.json'
import { showLoader, hideLoader } from '../../store/actions/loader'

export const getHalls = hall => (
    {
        type: GET_HALLS,
        payload: hall
    }
)

export const getHallById = hallById => (
    {
        type: GET_HALL_BY_ID,
        payload: hallById
    }
)

export const getHallFailure = error => (
    {
        type: GET_HALLS_FAILURE,
        payload: error
    }
)

export const getHallsAsync = () => {
    return async(dispatch) => {
        try {
            const { data } = axios.get(`http://localhost:8080/films`)
            dispatch(getHalls(data))
        }
        catch(error) {
            dispatch(getHallFailure(error))
        }
    }
}

export const getHallByIdAsync = (hallId) => {
    return async(dispatch) => {
        try {
            dispatch(showLoader())
            setTimeout(() => {
                const hallById = hallsjson.find(hall => +hall.id === +hallId)
                dispatch(getHallById(hallById))
                dispatch(hideLoader())
            }, 1000)
        }
        catch(error) {
            dispatch(getHallFailure(error))
        }
    }
}
