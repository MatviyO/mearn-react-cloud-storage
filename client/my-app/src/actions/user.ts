import axios from "axios";


export const registration = async (email: string, password: string) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {email, password})
        alert(response.data.message)
    } catch (e) {
        alert(console.log(e.response.data.message))
    }
}
