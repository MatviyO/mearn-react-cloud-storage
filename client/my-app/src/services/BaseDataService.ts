export class BaseDataService {
    protected credentials: RequestCredentials = 'same-origin';
    protected baseUrl = 'http://localhost:5000/api';
    protected headers: any;

    constructor() {
        this.headers = {
            'Accept': 'application/json',
        }
    }

    async request (url: string, method = 'GET', body: any = null, files?: any ) {
        const options: any = {
            method,
            headers: {
                ...this.headers,
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            credentials: this.credentials,
        };
        (method === "POST" || method === "PUT") && !files && (options.body = JSON.stringify(body)) &&  (options.headers = {
            ...options.headers,  'Content-Type': 'application/json',
        })
        files && (options.body = files) && (options.headers = {
            ...options.headers, "Contetnt-Type":"multipart/form-data"
        })

        try {
            let response = await fetch(`${this.baseUrl}/${url}`, options);
            if (!response.ok) {
                return await Promise.reject();
            } else {
                return await response.json()
            }
        } catch (error) {
            return await Promise.reject();
        }
    }
}
