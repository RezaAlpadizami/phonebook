/* eslint-disable react-native/no-inline-styles */
// import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
  SectionList,
} from 'react-native';
import InputSearching from '../../component/InputSearching';
import iconUser from '../../Assets/image/logoUser.png';

const data = [
  {name: 'Canda Meong', phone: '+ 62 112 0984 3455'},
  {name: 'Lalita', phone: '+ 62 345 0984 5567'},
  {name: 'Dena Fanisa', phone: '+ 62 445 7786 1223'},
  {name: 'Beni Siahaan', phone: '+ 62 112 4562 9086'},
  {name: 'Anisa Clova', phone: '+ 62 5678 0989 4456'},
  {name: 'Deri Koswaranda', phone: '+ 62 5678 0989 4456'},
  {name: 'Enita Maria', phone: '+ 62 5678 0989 4456'},
];

// const filterName = text => {
//   // data.map(e => {
//   //   let nameSplit = e.name.split('');
//   //   if (nameSplit[0] === text) {
//   //     console.log(e)
//   //     return e;
//   //   }
//   // });

//   data.filter(e => {
//     let namaSplit = e.name.split("")[0]
//     if(namaSplit == text) {
//      console.log(e)
//       return e
//     }
//   })
// };

const compare = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

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
Object.entries(groupBy(sortingData, 'key')).forEach(([key, value]) =>
  dataList.push({
    title: key,
    data: value,
  }),
);

// console.log(dataList);



const myKeyExtractor = (item, index) => {
  return item + index;
};

const renderItem = ({item}) => {

  return (
    <View style={{margin: 20}}>
      {/* <View>
       
      </View> */}
      <View style={styles.wrapperList}>
        <View style={styles.wrapperImageList}>
          <Image style={styles.imageList} source={iconUser} />
        </View>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.phone}</Text>
        </View>
        <View style={styles.wrapperOptionsList}>
          <Text style={styles.optionsList}>...</Text>
        </View>
      </View>
    </View>
  );
};
// console.log('value render..', renderItem)

// return (
const MyContact = () => {
  return (
    <View style={styles.container}>
      <InputSearching />
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

// );
// return DataList.map(e => {

// });

// return <View>{list()}</View>;
// };

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

export default MyContact;
