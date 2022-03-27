import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import Axios from 'axios';
import URL_API from '../../API/URL_API';

export const setToken = (dispatch, navigation, loginReducer) => {
  Axios.post(`${URL_API}/signin `, {
    email: loginReducer.login.email,
    password: loginReducer.login.password,
    headers: {
    },
  }).then(response => {
    const responseAPI = response.data.data;
    console.log(responseAPI)
    AsyncStorage.setItem('token', responseAPI.token);
    dispatch({type: 'LOGIN_TOKEN_ACCESS', payload: responseAPI});

    Alert.alert('Succesfully login');
    navigation
      .navigate('Router')

      .catch(error => {
        Alert.alert('Password or Email not valid', error + message);
      });
  });
};

export const fetchAllContact = (dispatch, loginReducer) => {
  Axios.get(`${URL_API}/contacts`, {
    headers: {Authorization: `Bearer ${loginReducer.data.token}`},
  })
    .then(res => {
      const allDataContact = res.data.data;
      // console.log('get all data api terbaru', allDataContact);

      dispatch({type: 'GET_DATA_CONTACT', payload: allDataContact});
    })
    .catch(error => {
      console.log('error get data', error);
    });
};

export const setFormLogin = (inputType, value) => {
  return {type: 'SET_FORM_LOGIN', inputType: inputType, inputValue: value};
};

export const setFormRegister = (inputType, value) => {
  return {type: 'SET_FORM_REGISTER', inputType: inputType, inputValue: value};
};
