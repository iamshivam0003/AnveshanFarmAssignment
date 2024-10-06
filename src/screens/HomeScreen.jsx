import {View, Text} from 'react-native';
import React from 'react';
import ItemCard from '../components/ItemCard';
import {FlatList} from 'react-native-gesture-handler';
import {dummyData} from '../utils/dummyData';

const HomeScreen = () => {
  return (
    <FlatList
      data={dummyData}
      renderItem={({item}) => <ItemCard item={item} />}
      numColumns={2}
      keyExtractor={item => item.id}
    />
  );
};

export default HomeScreen;
