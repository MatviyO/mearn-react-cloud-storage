import {LOGOUT, SET_USER} from "../type";

export const setUser = (user: any) => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})
