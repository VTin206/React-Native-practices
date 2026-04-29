import axios from 'axios';

export function fetchPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Error fetching data', err);
        })
}

