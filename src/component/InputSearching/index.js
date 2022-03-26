import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';
import iconSearching from '../../Assets/image/iconSearching.png';

const InputSearching = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.sectionStyle}>
        <Image style={styles.imageInput} source={iconSearching} />
        <TextInput
          placeholderTextColor="#000000"
          placeholder="Search contact"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default InputSearching;
