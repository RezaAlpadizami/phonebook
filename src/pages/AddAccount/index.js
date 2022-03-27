/* eslint-disable react-native/no-inline-styles */
// import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
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
import {setAddContact} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import URL_API from '../../API/URL_API';
import axios from 'axios';

const AddAccount = () => {
  const dispatch = useDispatch();
  const loginReducer = useSelector(state => state.loginReducer);
  const navigation = useNavigation();

  const handleGoTo = screen => {
    navigation.goBack(screen);
  };

  const [addForm, setAddForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    job: '',
  });

  const onInputChange = (inputValue, inputType) => {
    setAddForm({
      ...addForm,
      [inputType]: inputValue,
    });
  };

  // useEffect(() => {
  //   buttonAddContact();
  // }, []);

  const buttonAddContact = async () => {
    try {
      const res = await axios.post(
        `${URL_API}/contacts`,
        {
          name: addForm?.name,
          phone: addForm?.phone,
          email: addForm?.email,
          company: addForm?.company,
          job: addForm?.job,
        },
        {
          headers: {
            Authorization: `Bearer ${loginReducer.data.token}`,
          },
        },
      );
      console.log('value res', res);
      dispatch({type: 'ADD_CONTACT', createcontact: res});
      setAddForm({
        name: '',
        phone: '',
        email: '',
        company: '',
        job: '',
      });
      handleGoTo('MyContact');
    } catch (error) {
      console.log(error);
    }
    // console.log ('data yang ditambahkan', addForm)
    // await Axios.post(
    //   `${URL_API}/contacts`,
    //   {
    //     name: addForm?.name,
    //     phone: addForm?.phone,
    //     email: addForm?.email,
    //     company: addForm?.company,
    //     job: addForm?.job,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${loginReducer.data.token}`,
    //     },
    //   },
    // )
    //   .then(res => {
    //     console.log('value res', res);
    //     dispatch({type: 'ADD_CONTACT', createcontact: res});
    //     setAddForm({
    //       name: '',
    //       phone: '',
    //       email: '',
    //       company: '',
    //       job: '',
    //     });
    //     // handleGoTo('MyContact');
    //   })
    //   .catch(error => {
    //     console.log('error', error);
    //   }).finally(() => {
    //     handleGoTo('MyContact');
    //   })
  };

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
        <CustomInputGray
          source={LogoUser}
          placeholder="Name"
          value={addForm.name}
          onChangeText={value => onInputChange(value, 'name')}
        />
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row'}}>
            <CustomInputAdd
              placeholder="+62  Phone"
              value={addForm.phone}
              onChangeText={value => onInputChange(value, 'phone')}
            />
            <CustomInputAdd
              source={LogoEmail}
              placeholder="Email"
              onChangeText={value => onInputChange(value, 'email')}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CustomInputAdd
            placeholder="Company"
            value={addForm.company}
            source={LogoCompany}
            onChangeText={value => onInputChange(value, 'company')}
          />
          <CustomInputAdd
            placeholder="Job"
            value={addForm.job}
            source={LogoJob}
            onChangeText={value => onInputChange(value, 'job')}
          />
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
            onPress={buttonAddContact}
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
    marginRight: 54,
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
