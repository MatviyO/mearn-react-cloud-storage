import axios from "axios";


export const registration = async (email: string, password: string) => {
    try {
        let user = {
            email,
            password
        };
        const response = await fetch('http://localhost:5000/api/auth/registration',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: "same-origin",
            method: 'POST',
            body: JSON.stringify(user)
        } )
        let result = await response.json();
        alert(JSON.stringify(result))
    } catch (e) {
        alert(console.log(e))
    }
}
