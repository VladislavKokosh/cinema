import { GET_FILM, GET_FILM_BY_ID } from "../types/films"

const initState = {
    films: [],
    filmById: null
}

export const filmsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_FILM:
            return { ...state, films: action.payload}
        case GET_FILM_BY_ID:
            return { ...state, filmById: state.films.find(film => {
                const result = film.id == action.payload
                return result
            })}
        default: return state
    }
}