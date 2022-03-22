import {View, Image, TextInput, StyleSheet} from 'react-native';
import React from 'react';
// import iconInput from '../../Assets/image/email1.png';

const CustomInput = ({
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
        placeholderTextColor="#B6AFAF"
        placeholder={placeholder}
        style={style}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default CustomInput;
