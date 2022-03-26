import {View, Image, TextInput, StyleSheet} from 'react-native';
import React from 'react';
// import iconInput from '../../Assets/image/email1.png';

const CustomInputGray = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  source,
  style,
}) => {
  return (
    <View style={styles.sectionStyle}>
      <Image style={styles.imageInput} source={source} />
      <TextInput
        placeholderTextColor="#353434"
        placeholder={placeholder}
        style={style}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    height: 40,
    margin: 10,
    width: 307,
  },

  imageInput: {
    margin: 10,
  },
});

export default CustomInputGray;
