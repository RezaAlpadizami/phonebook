/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import InputSearching from '../../component/InputSearching';
import logoUser from '../../Assets/image/logoUser.png';
import SectionList from 'react-native/Libraries/Lists/SectionList';

const RecentList = [
  {
    title: 'A',
    data: [{name: 'Rulisa Andara', phone: '+ 62 112 0984 3455'}, {name: 'Bara Lucy', phone: '+ 62 345 0984 5567'}], 
  },

  {
    title: 'B',
    data: [{name: 'Dena Fanisa', phone: '+ 62 445 7786 1223'}, {name: 'Beni Siahaan', phone: '+ 62 112 4562 9086'} ],
  },

    {
    title: 'C',
    data: [{name: 'Anisa Clova', phone: '+ 62 5678 0989 4456'}],
  },

  {
    title: 'D',
    data: [{name: 'Deri Koswaranda', phone: '+ 62 5678 0989 4456'}],
  },

    {
    title: 'E',
    data: [{name: 'Enita Maria', phone: '+ 62 5678 0989 4456'}],
  },
  
];

const myKeyExtractor = item => {
  return item.id;
};

const renderItem = ({item}) => {
  return (
    <View style={{margin: 20}}>
      <View>
        <Text>{item.title}</Text>
      </View>
      <View style={styles.wrapperList}>
        <View style={styles.wrapperImageList}>
          <Image style={styles.imageList} source={logoUser} />
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

// functional Search({detailContact}) {
//   const [searchField, setSearchField] = useState('')

//   const filteredContacts = detailContact.filter(

//   )
// }

const Recent = () => {
  return (
    <View style={styles.container}>
      <InputSearching 
      onChangeText
      />
      <SectionList
        sections={RecentList}
        renderItem={renderItem}
        myKeyExtractor={myKeyExtractor}
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

  wrapperImageList: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#C4C4C4',
    marginRight: 10
    // margin: ,
    // padding: 5
  },

  wrapperOptionsList: {
    marginStart: 160,
  },

  optionsList: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Recent;
