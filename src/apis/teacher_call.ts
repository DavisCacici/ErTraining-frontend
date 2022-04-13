import axios from 'axios';
import { SERVER_URL } from '../config';

export const coursesTeacher = () => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/courseTeacher`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const getProgress = (id: number) => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/getProgress/${id}`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const setStateProgress = (id: number) => {
    const token = sessionStorage.getItem('token');
    axios.put(`${SERVER_URL}/setStateProgress/${id}`, {

    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}