// NOTE: TEST DATA!!!

import { Email, Password } from '@mui/icons-material';
import axios from 'axios';
import { SERVER_URL } from '../config';
// import jwt_decode from 'jwt-decode';

export const login = (email: string, password: string) => {
  return axios.post(`${SERVER_URL}/login`, {
    email: email,
    password: password,
  });
};

export const logout = () => {
  const token = sessionStorage.getItem('token');
  return axios.post(
    `${SERVER_URL}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const recovery = (email: string) => {
  return axios.post(`${SERVER_URL}/recovery`, {
    email: email,
  });
  // .then((value) => {
  //   const token = value.data.access_token;

  //   sessionStorage.setItem('token', token);
  //   // const payload = jwt_decode<object>(token);
  //   // console.log(payload);
  // })
  // .catch((error) => {
  //   alert(error);
  // });
};

export const profile = () => {
  const token = sessionStorage.getItem('token');
  axios
    .get(`${SERVER_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
};

export const resetPassword = () => {
  const token = sessionStorage.getItem('token');
  axios
    .post(
      `${SERVER_URL}/resetPassword`,
      {
        password: Password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
};

export const recoveryPassword = () => {
  const token = sessionStorage.getItem('token');
  axios
    .post(`${SERVER_URL}/resetPassword`, {
      email: Email,
    })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
};

export const getUserCourses = () => {
  const token = sessionStorage.getItem('token');
  return axios.get(`${SERVER_URL}/getUserCourses`, { headers: {
        Authorization: `Bearer ${token}`,
      }});
};

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

export function getProgressUser(id: number){
  console.log("getProgressUser")
  console.log(id)
  const token = sessionStorage.getItem('token');
  return axios.get(`${SERVER_URL}/getProgressUser/${id}`,{ headers: {
    'Authorization': `Bearer ${token}` 
}});
}