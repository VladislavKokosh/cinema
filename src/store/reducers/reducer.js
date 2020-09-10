import { combineReducers } from 'redux'
import { filmsReducer } from './filmsReducer'
import { sessionsReducer } from './sessionsReducer'

export const reducer = combineReducers({
    films: filmsReducer,
    sessions: sessionsReducer
})