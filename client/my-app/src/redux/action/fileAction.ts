import {SET_CURRENT_DIR, SET_FILES} from "../type";

export const setFiles = (files: any) => ({type: SET_FILES, payload: files })
export const setCurrent = (dir: any) => ({type: SET_CURRENT_DIR, payload: dir })
