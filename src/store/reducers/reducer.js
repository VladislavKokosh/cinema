import { combineReducers } from 'redux'
import { filmsReducer } from './filmsReducer'
import { sessionsReducer } from './sessionsReducer'
import { hallsReducer } from './hallsReducer'

export const reducer = combineReducers({
    films: filmsReducer,
    sessions: sessionsReducer,
    halls: hallsReducer
})