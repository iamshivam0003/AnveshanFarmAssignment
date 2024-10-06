import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ItemCard from '../components/ItemCard';
import Icon from 'react-native-vector-icons/Ionicons';
const Favourites = () => {
  const favouriteItems = useSelector(state => {
    return state?.favourites;
  });
  const dispatch = useDispatch();
  const favo = true;
  return favouriteItems?.length > 0 ? (
    <FlatList
      data={favouriteItems}
      renderItem={({item}) => <ItemCard item={item} favo={favo} />}
      numColumns={2}
      keyExtractor={item => item.id}
    />
  ) : (
    <View style={styles.favouritesContainer}>
      <Icon
        name='heart'
        size={200}
        color="#878584"
      />
      <Text style={styles.emptyWishlistTxt}>Your WishList Is Empty !</Text>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  favouritesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyWishlistTxt:{
    color:'#000',
    fontSize:25,
    fontWeight:'800',
  }
});
