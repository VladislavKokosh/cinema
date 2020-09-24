import axios from "axios";
import { GET_PLACES, GET_PLACES_FAILURE, SET_CHOISE_PLACES, SET_PLACES } from '../types/places'
import placesjson from '../../db/places.json'

export const getPlaces = places => (
    {
        type: GET_PLACES,
        payload: places
    }
)

export const setChoisePlaces = places => (
    {
        type: SET_CHOISE_PLACES,
        payload: places
    }
)

export const setPlaces = placeObj => (
    {
        type: SET_PLACES,
        payload: placeObj
    }
)

export const getPlacesFailure = error => (
    {
        type: GET_PLACES_FAILURE,
        payload: error
    }
)

export const getPlacesAsync = (sessionId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:8080/places/${sessionId}`)
            dispatch(getPlaces(data))
        }
        catch (error) {
            dispatch(getPlacesFailure(error))
        }
    }
}

export const setChoisePlacesAsync = (choisePlaces) => {
    return async(dispatch) => {
        try {
            setTimeout(()=> {
                dispatch(setChoisePlaces(choisePlaces))
            }, 10)
        }
        catch (error) {
            dispatch(getPlacesFailure(error))
        }
    }
}

export const setPlacesAsync = (placeObj) => {
    return async(dispatch) => {
        try {
            setTimeout(()=> {
                dispatch(setPlaces(placeObj))
            }, 10)
        }
        catch (error) {
            dispatch(getPlacesFailure(error))
        }
    }
}
