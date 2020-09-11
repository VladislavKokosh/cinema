import { combineReducers } from 'redux'
import { filmsReducer } from './filmsReducer'
import { sessionsReducer } from './sessionsReducer'
import { hallsReducer } from './hallsReducer'
import { loaderReducer } from './loaderReducer'

export const reducer = combineReducers({
    films: filmsReducer,
    sessions: sessionsReducer,
    halls: hallsReducer,
    loading: loaderReducer
})
