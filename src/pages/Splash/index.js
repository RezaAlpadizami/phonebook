import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
// import { useEffect } from 'react/cjs/react.production.min';

const Splash = ({navigation}) => {
  useEffect (() => {
    setTimeout(() => {
      navigation.replace('Login')
    }, 2000);
  });
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
