// NOTE: TEST DATA!!!

import axios from 'axios';
import { SERVER_URL } from '../config';
// import jwt_decode from 'jwt-decode';

export const login = (email: string, password: string) => {
  return axios.post(`${SERVER_URL}/login`, {
    email: email,
    password: password,
  });
  // .then((value) => {
  //   // const token = value.data.access_token;
  //   // sessionStorage.setItem('token', token);
  //   // const payload = jwt_decode<object>(token);
  //   // console.log(payload);
  // })
  // .catch((error) => {
  //   alert(error);
  // });
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
  // .then((value) => console.log(value))
  // .catch((error) => console.log(error));
  // sessionStorage.removeItem('token');
  // sessionStorage.clear();
};
