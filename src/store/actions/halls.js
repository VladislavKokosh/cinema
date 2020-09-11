import { GET_HALLS, GET_HALL_BY_ID, GET_HALLS_FAILURE } from "../types/halls";
import hallsjson from '../../db/halls.json'

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
            setTimeout(() => dispatch(getHalls(hallsjson)), 1000)
        }
        catch(error) {
            dispatch(getHallFailure(error))
        }
    }
}

export const getHallByIdAsync = (hallId) => {
    return async(dispatch) => {
        try {
            const hallById = hallsjson.find(hall => +hall.id === +hallId)
            setTimeout(() => dispatch(getHallById(hallById)))
        }
        catch(error) {
            dispatch(getHallFailure(error))
        }
    }
}
