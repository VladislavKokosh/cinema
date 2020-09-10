import { GET_HALLS, GET_HALL_BY_ID } from "../types/halls";

export function getHalls(hall) {
    return {
        type: GET_HALLS,
        payload: hall
    }
}

export function getHallById(id) {
    return {
        type: GET_HALL_BY_ID,
        payload: id
    }
}