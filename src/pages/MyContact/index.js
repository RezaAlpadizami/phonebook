/* eslint-disable react-native/no-inline-styles */
// import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  SectionList,
  ScrollView,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import InputSearching from '../../component/InputSearching';
import iconUser from '../../Assets/image/logoUser.png';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllContact} from '../../redux/action';

const MyContact = () => {
  const homeReducer = useSelector(state => state.homeReducer);
  const loginReducer = useSelector(state => state.loginReducer);
  const addReducer = useSelector(state => state.addReducer)
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const data = homeReducer.data;

  // const getAllContact = async () => {
  //   await fetchAllContact(dispatch, loginReducer);
  // };

  useEffect(() => {
    fetchAllContact(dispatch, loginReducer);
    // getAllContact();
  }, []);

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const sortingData = data.sort(compare).map(item => {
    return {
      ...item,
      key: item.name[0],
    };
  });

  const groupBy = (items, key) =>
    items.reduce(
      (result, item) => ({
        ...result,
        [item[key]]: [...(result[item[key]] || []), item],
      }),
      {},
    );

  const dataList = [];
  Object?.entries(groupBy(sortingData, 'key')).forEach(([keys, value]) =>
    dataList.push({
      title: keys,
      data: value,
    }),
  );

  const deleteProduct = async id => {
    await axios.delete(
      `https://phone-book-api.herokuapp.com/api/v1/contacts/${id}`,
    );
    fetchAllContact();
  };

  const myKeyExtractor = (itemDataKey, index) => {
    return itemDataKey + index;
  };

  const renderItem = ({item}) => {
    return (
      <View style={{margin: 20}}>
        <View style={styles.wrapperList}>
          <View style={styles.wrapperImageList}>
            <Image style={styles.imageList} source={iconUser} />
          </View>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
          </View>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={{position: 'relative', top: 250, bottom: 250}}>
              <View style={styles.modalView}>
                <Pressable>
                  <Text style={styles.modalText}>Favorite</Text>
                </Pressable>
                <Pressable onPress={id => deleteProduct(id)}>
                  <Text style={styles.modalText}>Delete</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyleOptios}>. . .</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <InputSearching style={{color: 'white'}} />
      <SectionList
        sections={dataList}
        renderItem={renderItem}
        keyExtractor={myKeyExtractor}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        style={{margin: 10}}
      />
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

  wrapperImageList: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#C4C4C4',
    marginRight: 10,
  },

  imageInput: {
    margin: 12,
  },

  imageList: {
    backgroundColor: '#C4C4C4',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },

  wrapperList: {
    flexDirection: 'row',
  },

  wrapperOptionsList: {
    // marginStart: 140,
    alignSelf: 'flex-end',
  },

  centeredView: {
    flex: 1,
    marginTop: 22,
    position: 'absolute',
    right: 0,
    top: -25,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    // borderRadius: 20,
    padding: 10,
    // elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: '#F194F',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textStyleOptios: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default MyContact;
