import
    {
        GET_FILM,
        GET_FILM_FAILURE,
        GET_FILM_BY_ID
    }
from "../types/films"

const initState = {
    films: [],
    filmById: null,
    error: ''
}

export const filmsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_FILM:
            return { ...state, films: action.payload}
        case GET_FILM_BY_ID:
            return { ...state, filmById: action.payload}
        case GET_FILM_FAILURE:
            return { ...state, error: action.payload}
        default: return state
    }
}
