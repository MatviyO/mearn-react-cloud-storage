import {HIDE_LOADER, SHOW_LOADER} from "../type";

const defaultState =  {
    loader: false
}


export default function appReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_LOADER: return {...state, loader: true}
        case HIDE_LOADER: return {...state, files: false}
        default:
            return state;
    }
}
