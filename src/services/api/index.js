import axios from 'axios';

export const key = "d63b7f02541fdb6bd13b829627066551c4e0ad92";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
});

export default api;
