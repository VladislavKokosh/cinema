import {
    SHOW_LOGIN_MODAL,
    HIDE_LOGIN_MODAL,
    SHOW_REGISTR_MODAL,
    HIDE_REGISTR_MODAL
} from '../types/modal';

export const showLoginModal = () => (
    {
        type: SHOW_LOGIN_MODAL
    }
)

export const hideLoginModal = () => (
    {
        type: HIDE_LOGIN_MODAL
    }
)

export const showRegistrModal = () => (
    {
        type: SHOW_REGISTR_MODAL
    }
)

export const hideRegistrModal = () => (
    {
        type: HIDE_REGISTR_MODAL
    }
)
