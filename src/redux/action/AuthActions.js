import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import Axios from 'axios';
import URL_API from '../../API/URL_API';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = (dispatch, navigation, loginReducer) => {
  Axios.post(`${URL_API}/signin `, {
    email: loginReducer.login.email,
    password: loginReducer.login.password,
  }).then(response => {
    const responseAPI = response.data.data;

    // console.log('respon', responseAPI);
    dispatch({type: 'LOGIN_TOKEN_ACCESS', payload: responseAPI});

    Axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer${responseAPI.token}`;

    AsyncStorage.setItem('token', responseAPI.token);
    Alert.alert('Succesfully login');
    navigation
      .navigate('Router')

      .catch(error => {
        Alert.alert('Password or Email not valid', error + message);
      });
  });
};

export const setFormLogin = (inputType, value) => {
  return {type: 'SET_FORM_LOGIN', inputType: inputType, inputValue: value};
};

export const setFormRegister = (inputType, value) => {
  return {type: 'SET_FORM_REGISTER', inputType: inputType, inputValue: value};
};
// export const setForm = (dispatch, navigation) => {
//   const response = Axios.post(`${URL_API}/signup`, {

//   });
// }
