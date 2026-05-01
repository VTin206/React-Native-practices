import axios, { AxiosInstance } from 'axios';

export class ApiClient {
    axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create({
            baseURL :'https://jsonplaceholder.typicode.com/', //domnain mà t làm việc
            timeout: 10000
        });
    }
}


/*import axios from 'axios';

export function fetchPosts() {
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            response.data.forEach((e) => {
                console.log("====>", e);
            })
        })
        .catch(err => {
            console.log('Error fetching data', err);
        })
}
*/
