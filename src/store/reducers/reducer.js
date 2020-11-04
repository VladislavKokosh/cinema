import { combineReducers } from 'redux'
import { filmsReducer } from './filmsReducer'
import { sessionsReducer } from './sessionsReducer'
import { hallsReducer } from './hallsReducer'
import { loaderReducer } from './loaderReducer'
import { placesReducer } from './placesReducer'
import { usersReducer } from './usersReducer'
import { modalReducer } from './modalReducer'

export const reducer = combineReducers({
    films: filmsReducer,
    sessions: sessionsReducer,
    halls: hallsReducer,
    places: placesReducer,
    loading: loaderReducer,
    users: usersReducer,
    modal: modalReducer
})
