import {LOGOUT, SET_USER} from "../type";

const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload.user,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('toke')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state;
    }
}

