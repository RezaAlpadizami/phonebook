import React, { useEffect} from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

import {Favorite, MyContact, Recent} from '../pages';

const BottomTab = createBottomTabNavigator();

function ButtonAdd() {
  const navigation = useNavigation()

  const onButtonPressed = () => {
    navigation.navigate('Back');
  };

  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
        margin: 10,
        padding: 5,
        borderRadius: 50,
        backgroundColor: 'black',
      }}
      onPress={onButtonPressed}>
      <Text style={{color: 'white', paddingLeft: 5}}>+</Text>
    </TouchableOpacity>
  );
}

const Router = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        screenOptions={{headerShown: false}}
        name="Recent"
        component={Recent}
        options={{
          headerStyle: {
            backgroundColor: '#DCDCDC',
          },
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../Assets/image/icons-time.png')
                  : require('../Assets/image/icons-time-white.png')
              }
              style={{
                width: 35,
                height: 35,
                marginTop: 5,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyContact"
        component={MyContact}
        options={{
          headerRight: props => <ButtonAdd {...props} />,
          headerStyle: {
            backgroundColor: '#DCDCDC',
          },
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../Assets/image/iconContact.png')
                  : require('../Assets/image/contact.png')
              }
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerStyle: {
            backgroundColor: '#DCDCDC',
          },
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('../Assets/image/favorite.png')
                  : require('../Assets/image/Vector12.png')
              }
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Router;
