/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import Router from './router';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import store from './redux/store';
import {ScrollView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
   height: "100%"
  },
});

export default App;
