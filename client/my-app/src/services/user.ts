
import { setUser } from "../redux/reducers/userReducer";


const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
}
export const registration = async (email: string, password: string) => {
    try {
        let user = {
            email,
            password
        };
        const response = await fetch('http://localhost:5000/api/auth/registration',{
            headers,
            method: 'POST',
            body: JSON.stringify(user)
        } )
        let result = await response.json();
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
           const response = await fetch('http://localhost:5000/api/auth/login',{
               headers,
               method: 'POST',
               body: JSON.stringify(user)
           } )
           let result = await response.json();
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
            const response = await fetch('http://localhost:5000/api/auth/auth', {
                headers: {
                    ...headers,
                    Authorization: `Bearer ${localStorage.getItem('token')}`},
                method: 'GET',
            })
            let result = await response.json();
            dispatch(setUser(result.user))
            localStorage.setItem('token', result.token)
            console.log(result)
        } catch (e) {
            alert(console.log(e))
            localStorage.removeItem('token')
        }
    }
}
