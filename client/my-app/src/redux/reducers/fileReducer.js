import {
    ADD_FILE,
    DELETE_FILE,
    POP_FROM_STACK,
    PUSH_TO_STACK,
    SET_CURRENT_DIR,
    SET_FILES,
    SET_POPUP,
    SET_VIEW
} from "../type";

const defaultState =  {
    files: [],
    currenDir: null,
    popupDisplay: 'none',
    dirStack: [],
    view: 'list'
}


export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES: return  {...state, files: action.payload}
        case SET_CURRENT_DIR: return  {...state, currentDir: action.payload}
        case ADD_FILE: return  {...state, files: [...state.files, action.payload]}
        case SET_POPUP: return {...state, popupDisplay: action.payload}
        case PUSH_TO_STACK: return {...state, dirStack: [...state.dirStack, action.payload]}
        case POP_FROM_STACK: return {...state, popupDisplay: action.payload}
        case DELETE_FILE: return {...state, files: [...state.files.filter(file => file._id != action.payload)]}
        case SET_VIEW: return {...state, view: action.payload}
        default:
            return state;
    }
}
