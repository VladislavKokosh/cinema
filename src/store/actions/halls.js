import axios from "axios";
import
    {
        GET_HALLS,
        GET_HALL_BY_ID,
        GET_HALLS_FAILURE
    }
from "../types/halls";
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
            const { data } = await axios.get(`http://localhost:8080/halls`)
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
            const { data } = await axios.get(`http://localhost:8080/halls/${hallId}`)
            dispatch(getHallById(data))
            dispatch(hideLoader())
        }
        catch(error) {
            dispatch(getHallFailure(error))
        }
    }
}
