import { Email, Password } from '@mui/icons-material';
import axios from 'axios';
import { SERVER_URL } from '../config';
import { User } from '../models/models'

//users
export const usersList = () => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/users/usersList`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const tutorsList = () => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/users/tutorsList`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const teachersList = () => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/users/teachersList`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const studentsList = () => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/users/studentsList`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const getUser = (id: number) => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/users/getUser/${id}`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const addUser = (username: string, email: string, passsword: string, role_id: number) => {
    const token = sessionStorage.getItem('token');
    axios.post(`${SERVER_URL}/users/addUser`, {
        user_name: username,
        email: email,
        password: passsword,
        role_id: role_id
    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const editUser = (id: number, email: string, username: string) => {
    const token = sessionStorage.getItem('token');
    axios.put(`${SERVER_URL}/users/editUser/${id}`, {
        email: email,
        user_name: username
    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const editPassword = (id: number, password: string) => {
    const token = sessionStorage.getItem('token');
    axios.put(`${SERVER_URL}/users/editUser/password/${id}`, {
        password: password
    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const deleteUser = (id: number,) => {
    const token = sessionStorage.getItem('token');
    axios.delete(`${SERVER_URL}/users/editUser/password/${id}`, { headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

//courses

export const coursesList = () => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/courses/coursesList`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const getCourse = (id: number) => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/courses/getCourse/${id}`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const getUsersCourse = (id: number) => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/courses/getUsersCourse/${id}`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const addCourse = () => {
    const token = sessionStorage.getItem('token');
    axios.post(`${SERVER_URL}/courses/addCourse`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const editCourse = (id: number) => {
    const token = sessionStorage.getItem('token');
    axios.put(`${SERVER_URL}/courses/editCourse/${id}`, {

    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}


export const addUsersToCourse = (id: number, users: Array<User>) => {
    const token = sessionStorage.getItem('token');
    axios.put(`${SERVER_URL}/courses/addUsersToCourse/${id}`, {
        users: users
    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }})
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}