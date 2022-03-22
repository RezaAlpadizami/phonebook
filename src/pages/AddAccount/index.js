/* eslint-disable react-native/no-inline-styles */
// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, Button} from 'react-native';

const AddAccount = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{margin: 50}}>
          <Image source={require('../../Assets/image/picture.png')} />
        </View>
        <View style={{margin: 10}}>
          <Image source={require('../../Assets/image/Group_form_name.png')} />
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image
            style={{marginRight: 10, marginBottom: 10}}
            source={require('../../Assets/image/Group_form_phone.png')}
          />
          <Image source={require('../../Assets/image/Group_form_email.png')} />
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image
            style={{marginRight: 10, marginBottom: 10}}
            source={require('../../Assets/image/Group_form_company.png')}
          />
          <Image source={require('../../Assets/image/Group_form_Job.png')} />
        </View>
        <View
          style={{
            width: 306,
            height: 100,
            marginLeft: 0,
            marginTop: 27,
          }}>
          <Button
            style={styles.button}
            color="#E94560"
            title="CREATE ACCOUNT"
          />
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
  button: {
    height: 100,
    margin: 12,
    padding: 10,
  },
});

export default AddAccount;
