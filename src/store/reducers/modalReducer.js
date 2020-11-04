import
    {
        SHOW_LOGIN_MODAL,
        HIDE_LOGIN_MODAL,
        SHOW_REGISTR_MODAL,
        HIDE_REGISTR_MODAL
    }
from "../types/modal"

const initState = {
    visibleLoginModal: false,
    visibleRegistrModal: false
}

export const modalReducer = (state = initState, action) => {
    switch(action.type) {
        case SHOW_LOGIN_MODAL:
            return { ...state, visibleLoginModal: true}
        case HIDE_LOGIN_MODAL:
            return { ...state, visibleLoginModal: false}
        case SHOW_REGISTR_MODAL:
            return { ...state, visibleRegistrModal: true}
        case HIDE_REGISTR_MODAL:
            return { ...state, visibleRegistrModal: false}
        default:
            return state
    }
}
