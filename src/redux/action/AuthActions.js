import Axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';


export const setToken = () => {
  const URL_API = 'https://phone-book-api.herokuapp.com/api/v1';
  

  return (dispatch) => {
    Axios.post(`${URL_API}/signin `, {
      email: 'l200140004@gmail.com',
      password: 'l200140004',
    }).then(response => {
      // console.log(response.data.data.token);
      const responseAPI = response.data.data;

      // console.log('data', token);
      dispatch({type: 'LOGIN_TOKEN_ACCESS', payload: responseAPI.token});
    })
  };
};
