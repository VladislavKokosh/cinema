import { GET_HALLS, GET_HALL_BY_ID } from "../types/halls"

const initState = {
    halls: [],
    hallById: null
}

export const hallsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_HALLS:
            return { ...state, halls: action.payload}
        case GET_HALL_BY_ID:
            const hall = state.halls.find(hall=> hall.id == action.id)
            return { ...state, hallById: hall}
        default: return state
    }
}