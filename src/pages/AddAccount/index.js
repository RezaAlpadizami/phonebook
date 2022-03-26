/* eslint-disable react-native/no-inline-styles */
// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, Button} from 'react-native';
import CustomInputAdd from '../../component/CustomButtonAdd';
import CustomInput from '../../component/CustomInput';
import LogoUser from '../../Assets/image/icon-user-name.png';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import {TextInput} from 'react-native-gesture-handler';
import CustomInputGray from '../../component/CustomInputGray';
import LogoEmail from '../../Assets/image/email2.png';
import LogoCompany from '../../Assets/image/icon_company.png';
import LogoJob from '../../Assets/image/icon_job.png';

const AddAccount = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{margin: 50}}>
          <Image source={require('../../Assets/image/picture.png')} />
        </View>
        <CustomInputGray source={LogoUser} placeholder="Name"/>
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row'}}>
            <CustomInputAdd placeholder= "+62  Phone"/>
            <CustomInputAdd source={LogoEmail} placeholder="Email"/>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomInputAdd placeholder= "Company" source={LogoCompany} />
          <CustomInputAdd placeholder= "Job" source={LogoJob} />
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
    flex: 1,
  },

  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#C4C4C4',
    height: 50,
    margin: 10,
    justifyContent: 'center',
    width: 110,
    marginRight: 54
  },

  imageInput: {
    margin: 10,
  },

  button: {
    height: 100,
    margin: 12,
    padding: 10,
  },
});

export default AddAccount;
