export class BaseDataService {
    protected credentials: RequestCredentials = 'same-origin';
    protected baseUrl = 'http://localhost:5000/api';
    protected headers: any;

    constructor() {
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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
        (method === "POST" || method === "PUT") && !files && (options.body = JSON.stringify(body))
        files && (options.body = files)

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
