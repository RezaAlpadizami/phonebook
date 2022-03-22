import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

// import IconBack from '../pages/Assets/image/buttonBack.png'
import { Signup, AddAccount} from '../pages';
import Router from '../router';
import buttonBack from '../Assets/image/buttonBack.png';
import LoginPage from '../pages/Login';
// import iconButton from '../Assets/image/buttonBack.png';

const Stack = createNativeStackNavigator();

const ButtonBack = () => {
  const navigation = useNavigation();

  const onButtonBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={onButtonBack}>
      <Image source={buttonBack} style={{margin: 7}} />
    </TouchableOpacity>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Router" component={Router} />
        <Stack.Screen
          name="Back"
          component={AddAccount}
          options={{
            headerLeft: props => <ButtonBack {...props} />,
            headerShown: true,
            headerStyle: {
              backgroundColor: '#DCDCDC',
            },
            colors: {
              border: 'transparant',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
