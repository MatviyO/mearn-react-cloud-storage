import {ADD_FILE, SET_CURRENT_DIR, SET_FILES, SET_POPUP} from "../type";

const defaultState =  {
    files: [],
    currenDir: null,
    popupDisplay: false
}

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES: return  {...state, files: action.payload}
        case SET_CURRENT_DIR: return  {...state, currenDir: action.payload}
        case ADD_FILE: return  {...state, files: [...state.files, action.payload]}
        case SET_POPUP: return {...state, popupDisplay: !state.popupDisplay}
        default:
            return state;
    }
}
