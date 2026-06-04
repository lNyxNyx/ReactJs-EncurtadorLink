import axios from 'axios';

const key = process.env.REACT_APP_TOKEN;

console.log(key);

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;
