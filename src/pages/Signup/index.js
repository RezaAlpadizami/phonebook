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

const SignUp = () => {
  const navigation = useNavigation();

  const onSignUpPressed = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={onSignUpPressed}>
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
              placeholder="Email"
              style={styles.input}
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
            />
          </View>

          <View
            style={{
              width: 306,
              height: 50,
              marginLeft: 0,
              marginTop: 27,
            }}>
            <Button style={styles.button} color="#E94560" title="LOG IN" />
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
