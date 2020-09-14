import { GET_PLACES, GET_PLACES_FAILURE, GET_CHOISE_PLACES } from '../types/places'
import placesjson from '../../db/places.json'

export const getPlaces = places => (
    {
        type: GET_PLACES,
        payload: places
    }
)

export const getChoisePlaces = places => (
    {
        type: GET_CHOISE_PLACES,
        payload: places
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
            setTimeout(() => {
                const places = placesjson?.find(place => +place.session === +sessionId);
                dispatch(getPlaces(places))
            }, 1500)
        }
        catch (error) {
            dispatch(getPlacesFailure(error))
        }
    }
}

export const getChoisePlacesAsync = (choisePlaces) => {
    return async(dispatch) => {
        try {
            setTimeout(()=> {
                dispatch(getChoisePlaces(choisePlaces))
            }, 10)
        }
        catch (error) {
            dispatch(getPlacesFailure(error))
        }
    }
}
