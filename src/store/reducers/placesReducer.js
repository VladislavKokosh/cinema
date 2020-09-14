import { GET_PLACES, GET_PLACES_FAILURE } from "../types/places"

const initState = {
    places: [],
    error: ''
}

export const placesReducer = (state = initState, action) => {
    switch(action.type){
        case GET_PLACES:
            return { ...state, places: action.payload }
        case GET_PLACES_FAILURE:
            return { ...state, error: action.payload }
        default: return state
    }
}
