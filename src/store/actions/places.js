import axios from "axios";
import { GET_PLACES, GET_PLACES_FAILURE, SET_CHOISE_PLACES, SET_CHOISE_PLACES_FAILURE, SET_PLACES, SET_PLACES_FAILURE } from '../types/places'

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

export const setChoisePlacesFailure = error => (
    {
        type: SET_CHOISE_PLACES_FAILURE,
        payload: error
    }
)

export const setPlaces = placeObj => (
    {
        type: SET_PLACES,
        payload: placeObj
    }
)

export const setPlacesFailure = error => (
    {
        type: SET_PLACES_FAILURE,
        payload: error
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
            const { data } = await axios.post(`http://localhost:8080/selectedPlaces`, choisePlaces)
            console.log(data)
            dispatch(setChoisePlaces(data))
        }
        catch (error) {
            dispatch(setChoisePlacesFailure(error))
        }
    }
}


export const setPlacesAsync = (places) => {
    return async(dispatch) => {
        try {
           const { data } = await axios.post(`http://localhost:8080/places`, places)
           console.log(data);
           dispatch(setPlaces(data))
        }
        catch (error) {
            dispatch(setPlacesFailure(error))
        }
    }
}
