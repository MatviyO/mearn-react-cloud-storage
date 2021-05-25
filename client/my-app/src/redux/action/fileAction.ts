import {ADD_FILE, SET_CURRENT_DIR, SET_FILES, SET_POPUP} from "../type";

export const setFiles = (files: any) => ({type: SET_FILES, payload: files })
export const setCurrentDir = (dir: any) => ({type: SET_CURRENT_DIR, payload: dir })
export const addFile = (file: any) => ({type: ADD_FILE, payload: file })
export const setPopupDisplay = (display: string) => ({type: SET_POPUP, payload: display })
