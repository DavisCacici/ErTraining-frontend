import { Email, Password } from '@mui/icons-material';
import axios from 'axios';
import { transform } from 'typescript';
import { SERVER_URL } from '../config';
import { User } from '../models/models'

//users
export const usersList = () => {
    const token = sessionStorage.getItem('token');
    axios.get(`${SERVER_URL}/users/usersList`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }, transformResponse : [function(value){
        return value;
    }]}, )
    .then((value) => console.log(value))
    .catch((error)=>console.log(error));
}

export const tutorsList = () => {
    const token = sessionStorage.getItem('token');
    return axios.get(`${SERVER_URL}/users/tutorsList`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const teachersList = () => {
    const token = sessionStorage.getItem('token');
    return axios.get(`${SERVER_URL}/users/teachersList`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const studentsList = () => {
    const token = sessionStorage.getItem('token');
    return axios.get(`${SERVER_URL}/users/studentsList`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const getUser = (id: number) => {
    const token = sessionStorage.getItem('token');
    return axios.get(`${SERVER_URL}/users/getUser/${id}`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const addUser = (username: string, email: string, passsword: string, role_id: number) => {
    const token = sessionStorage.getItem('token');
    return axios.post(`${SERVER_URL}/users/addUser`, {
        user_name: username,
        email: email,
        password: passsword,
        role_id: role_id
    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const editUser = (id: number, email: string, username: string) => {
    const token = sessionStorage.getItem('token');
    return axios.put(`${SERVER_URL}/users/editUser/${id}`, {
        email: email,
        user_name: username
    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const editPassword = (id: number, password: string) => {
    const token = sessionStorage.getItem('token');
    return axios.put(`${SERVER_URL}/users/editPassword/${id}`, {
        password: password
    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const deleteUser = (id: number) => {
    const token = sessionStorage.getItem('token');
    return axios.delete(`${SERVER_URL}/users/deleteUser/${id}`, { headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

//courses

export const coursesList = () => {
    const token = sessionStorage.getItem('token');
    return axios.get(`${SERVER_URL}/courses/coursesList`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const getCourse = (id: number) => {
    const token = sessionStorage.getItem('token');
    return axios.get(`${SERVER_URL}/courses/getCourse/${id}`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const addCourse = () => {
    const token = sessionStorage.getItem('token');
    return axios.post(`${SERVER_URL}/courses/addCourse`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const editCourse = (id: number) => {
    const token = sessionStorage.getItem('token');
    return axios.put(`${SERVER_URL}/courses/editCourse/${id}`, {

    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const deleteCourse = (id: number) => {
    const token = sessionStorage.getItem('token');
    return axios.delete(`${SERVER_URL}/courses/deleteCourse/${id}`, { headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

//progress

export const getUsersCourse = (id: number) => {
    const token = sessionStorage.getItem('token');
    return axios.get(`${SERVER_URL}/courses/getUsersCourse/${id}`,{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const addUsersCourse = (id: number, users: Array<User>) => {
    const token = sessionStorage.getItem('token');
    return axios.put(`${SERVER_URL}/courses/addUsersCourse/${id}`, {
        users: users
    },{ headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

export const removeUsersCourse = (id: number,) => {
    const token = sessionStorage.getItem('token');
    return axios.delete(`${SERVER_URL}/courses/removeUsersCourse/${id}`, { headers: {
        'Authorization': `Bearer ${token}` 
    }});
}

