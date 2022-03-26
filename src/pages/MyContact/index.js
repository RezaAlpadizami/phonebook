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
} from 'react-native';
import InputSearching from '../../component/InputSearching';
import iconUser from '../../Assets/image/logoUser.png';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllContact} from '../../redux/action';

const MyContact = () => {
  const homeReducer = useSelector(state => state.homeReducer);
  const loginReducer = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();
  // const [dataShow, setDataShow] = useState('');
  // const [search, setSearch] = useState('');

  // let userInput = ''

  useEffect(() => {
    fetchAllContact(dispatch, loginReducer);
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

  const data = homeReducer.data.data;
  console.log('datas', data)

  const sortingData = data?.sort(compare).map(item => {
    return {
      ...item,
      key: item.name[0],
    }
  });

  const groupBy = (items, key) =>
    items?.reduce(
      (result, item) => ({
        ...result,
        [item[key]]: [...(result[item[key]] || []), item],
      }),
      {},
    );

  const dataList = [];
  Object !== null?.entries(groupBy(sortingData, 'key')).forEach(([keys, value]) =>
    dataList.push({
      title: keys,
      data: value,
    }),
  );

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
        <View style={styles.wrapperOptionsList}>
          <Text style={styles.optionsList}>...</Text>
        </View>
      </View>
    );
  };

  // searchUpdated = (input) => {
  //   if(input === ''){
  //     search(false)
  //     userInput = ''
  //   }else{
  //     search(true)
  //   }
  // }

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
    marginStart: 140,
    alignSelf: 'flex-end',
  },

  optionsList: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 20,
    position: 'absolute',
    top: -40,
  },
});

export default MyContact;
