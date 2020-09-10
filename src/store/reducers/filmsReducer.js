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
            const film = state.films.find(film => film.id == action.payload)
            return { ...state, filmById: film}
        default: return state
    }
}