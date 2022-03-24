/* eslint-disable react-native/no-inline-styles */
// import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, SectionList} from 'react-native';
import InputSearching from '../../component/InputSearching';
import iconUser from '../../Assets/image/logoUser.png';

const [filterContact, setFilterContact] = useState([]);
const [search, setSearch] = useState('');

const data = [
  {name: 'Canda Meong', phone: '+ 62 112 0984 3455'},
  {name: 'Lalita', phone: '+ 62 345 0984 5567'},
  {name: 'Dena Fanisa', phone: '+ 62 445 7786 1223'},
  {name: 'Beni Siahaan', phone: '+ 62 112 4562 9086'},
  {name: 'Anisa Clova', phone: '+ 62 5678 0989 4456'},
  {name: 'Deri Koswaranda', phone: '+ 62 5678 0989 4456'},
  {name: 'Enita Maria', phone: '+ 62 5678 0989 4456'},
];

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
Object.entries(groupBy(sortingData, 'key')).forEach(([key, value]) =>
  dataList.push({
    title: key,
    data: value,
  }),
);

const filteredContact = text => {
  if (text) {
    const newDataFilter = dataList.filter(contact => {
      const itemData = contact.title
        ? contact.title.toLowerCase()
        : ''.toLowerCase();
      const textData = text.toLowerCase()
      return itemData.indexOf(textData) > -1;
    });
    setFilterContact(newDataFilter);
    setSearch(text);
  } else {
    setFilterContact(dataList);
    setSearch(text);
  }
};

const myKeyExtractor = (itemDataKey, index) => {
  return itemDataKey + index;
};

const renderItem = ({itemsRender}) => {
  return (
    <View style={{margin: 20}}>
      {/* <View>
       
      </View> */}
      <View style={styles.wrapperList}>
        <Image style={styles.imageList} source={iconUser} />
        <View>
          <Text>{itemsRender.name}</Text>
          <Text>{itemsRender.phone}</Text>
        </View>
        <View style={styles.wrapperOptionsList}>
          <Text style={styles.optionsList}>...</Text>
        </View>
      </View>
    </View>
  );
};

const MyContact = () => {
  return (
    <View style={styles.container}>
      <InputSearching
        onChangeText={text => filteredContact(text)}
        value={search}
      />

      <SectionList
        sections={filterContact}
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
    marginRight: 20,
  },
});

export default MyContact;
