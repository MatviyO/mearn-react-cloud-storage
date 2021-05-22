import {ADD_FILE, SET_CURRENT_DIR, SET_FILES} from "../type";

const defaultState =  {
    files: [],
    currenDir: null
}

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES: return  {...state, files: action.payload}
        case SET_CURRENT_DIR: return  {...state, currenDir: action.payload}
        case ADD_FILE: return  {...state, files: [...state.files, action.payload]}
        default:
            return state;
    }
}
