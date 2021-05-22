import {setUser} from "../redux/action/userAction";
import {BaseDataService} from "./BaseDataService";
const svc = new BaseDataService()

export const registration = async (email: string, password: string) => {
    try {
        let user = {
            email,
            password
        };
        const result = await svc.request(`auth/registration`, 'POST', user)
        alert(JSON.stringify(result))
    } catch (e) {
        alert(console.log(e))
    }
}

export const login = (email: string, password: string) => {
   return async (dispatch: any) => {
       try {
           let user = {
               email,
               password
           };
           const result = await svc.request(`auth/login`, 'POST', user)
           dispatch(setUser(result.user))
           localStorage.setItem('token', result.token)
           console.log(result)
       } catch (e) {
           alert(console.log(e))
       }
   }
}

export const auth = () => {
    return async (dispatch: any) => {
        try {
            const result = await svc.request(`auth/login`, 'GET')
            dispatch(setUser(result.user))
            localStorage.setItem('token', result.token)
            console.log(result)
        } catch (e) {
            alert(console.log(e))
            localStorage.removeItem('token')
        }
    }
}
