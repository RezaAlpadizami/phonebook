/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setFormRegister} from '../../redux/action';
import Axios from 'axios';
import URL_API from '../../API/URL_API';

const SignUp = () => {
  const data = useSelector(state => state.registerReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const buttonSignUpPressed =  () => {
  
    Axios.post(`${URL_API}/signup `, {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPasword: data.confirmPasword,
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const onLoginPressed = () => {
    navigation.navigate('Login');
  };

  const onChangeText = (value, inputType) => {
    dispatch(setFormRegister(inputType, value));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={onLoginPressed}>
        Log In
      </Text>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 93}}>
        <Image
          source={require('../../Assets/image/logo_contact1.png')}
          style={{width: 252, height: 200}}
        />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.containerSectionStyle}>
          <View style={styles.sectionStyle}>
            <Image
              style={styles.imageInput}
              source={require('../../Assets/image/user1.png')}
            />
            <TextInput
              placeholderTextColor="#B6AFAF"
              placeholder="Name"
              style={styles.input}
              onChangeText={value => onChangeText(value, 'name')}
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image
              style={styles.imageInput}
              source={require('../../Assets/image/email1.png')}
            />
            <TextInput
              placeholderTextColor="#B6AFAF"
              placeholder="Email"
              style={styles.input}
              onChangeText={value => onChangeText(value, 'email')}
            />
          </View>

          <View style={styles.sectionStyle}>
            <Image
              source={require('../../Assets/image/pin-code1.png')}
              style={styles.imageInput1}
            />
            <TextInput
              placeholderTextColor="#B6AFAF"
              placeholder="Password"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={value => onChangeText(value, 'password')}
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image
              source={require('../../Assets/image/pin-code1.png')}
              style={styles.imageInput1}
            />
            <TextInput
              placeholderTextColor="#B6AFAF"
              placeholder="Confirm Password"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={value => onChangeText(value, 'confrimPassword')}
            />
          </View>

          <View
            style={{
              width: 306,
              height: 50,
              marginLeft: 0,
              marginTop: 27,
            }}>
            <Button
              style={styles.button}
              color="#E94560"
              title="SIGN UP"
              onPress={buttonSignUpPressed}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05466A',
    height: '100%',
  },

  text: {
    textAlign: 'left',
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

  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#1D3E53',
    height: 40,
    margin: 10,
    width: 307,
  },

  imageInput: {
    margin: 10,
  },

  imageInput1: {
    margin: 10,
    paddingRight: 20,
  },
});

export default SignUp;
