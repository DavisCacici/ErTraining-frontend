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