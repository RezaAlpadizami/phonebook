/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, TextInput, Text} from 'react-native';
import InputSearching from '../../component/InputSearching';
import iconUser from '../../Assets/image/logoUser.png';
// import {useSelector} from 'react-redux';

const Favorites = () => {
  // const globalState = useSelector(state => state);
  return (
    <View style={styles.container}>
      <InputSearching />
      <View style={{margin: 20}}>
        <View>
          <Text>A</Text>
        </View>
        <View style={styles.wrapperList}>
          <View style={styles.wrapperImageList}>
            <Image style={styles.imageList} source={iconUser} />
          </View>
          <View>
            <Text>Alisson</Text>
            <Text>+ 62 821 2113 3111</Text>
          </View>
          <View style={styles.wrapperOptionsList}>
            <Text style={styles.optionsList}>...</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC',
    height: '100%',
  },

  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#BEBEBE',
    height: 40,
    margin: 10,
    width: 307,
    borderRadius: 6,
  },

  imageInput: {
    margin: 12,
  },

  imageList: {
    backgroundColor: '#C4C4C4',
    margin: 12,
    padding: 10,
    borderRadius: 10,
  },

  wrapperList: {
    flexDirection: 'row',
  },

  wrapperOptionsList: {
    marginStart: 160,
  },

  optionsList: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Favorites;
