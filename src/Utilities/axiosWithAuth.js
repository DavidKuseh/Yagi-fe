import axios from 'axios';

export const Axios = () => {
    return axios.create({
        headers: {
            "Content-type": "application/json"
        },
        baseURL: process.env.REACT_APP_API_BASE_URL
    });
};

export function axiosWithAuth() {
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token') || ""
        }, 
        baseURL: process.env.REACT_APP_API_BASE_URL
    });
};