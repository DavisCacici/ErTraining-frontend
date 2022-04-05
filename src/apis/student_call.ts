import axios from 'axios';
import { SERVER_URL } from '../config';

export const coursesStudent = () => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/courseStudent`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}