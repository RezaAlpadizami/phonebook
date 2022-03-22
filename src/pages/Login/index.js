/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {setToken} from '../../redux/action';


import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import iconInput from '../../Assets/image/email1.png';
import iconPassword from '../../Assets/image/Vector1.png';

const LoginPage = () => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();


  const {isLoading, email, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const onLogInPressed = () => {
    const onLoginAction = useSelector(state => state.onLoginAction);
    console.log(onLoginAction);

    useEffect(() => {
      dispatch(setToken());
    }, [dispatch])

    Axios.defaults.headers.common['Authorization'] = `Bearer${token}`;
    AsyncStorage.setItem('token', token)
      .then(value => {
        navigation.navigate('Router');
        console.log(value);
      })
      .catch(error => {
        console.log(error);
      });

    if (email == '' || password == '') {
      Alert.alert('Please enter your email and password');
      return;
    }
  };

  const onSignUpPressed = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={onSignUpPressed}>
        Sign Up
      </Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../../Assets/image/logo_contact1.png')} />
      </View>
      <View style={{flex: 1}}>
        <View style={styles.containerSectionStyle}>
          <CustomInput
            placeholder="Username"
            value={email}
            onChangeText={email => updateState({email})}
            source={iconInput}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            onChangeText={password => updateState({password})}
            secureTextEntry={true}
            source={iconPassword}
            style={{padding: 13}}
          />
          <View
            style={{
              width: 306,
              height: 50,
              marginLeft: 0,
              marginTop: 27,
            }}>
            <CustomButton text="LOG IN" onPress={onLogInPressed} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05466A',
    height: '100%',
  },

  text: {
    textAlign: 'right',
    padding: 15,
    color: 'white',
  },

  button: {
    height: 44,
    margin: 12,
    padding: 10,
  },

  containerSectionStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageInput1: {
    margin: 10,
    paddingRight: 20,
  },

  imageInput: {
    margin: 10,
  },
});

export default LoginPage;
