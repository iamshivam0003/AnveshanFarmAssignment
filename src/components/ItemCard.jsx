import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/slices/cartSlice';
import {addToFavourites} from '../redux/slices/favouritesSlice';
import {removeFromFavourites} from '../redux/slices/favouritesSlice';

const ItemCard = ({item, favo}) => {
  const dispatch = useDispatch();
  const handleAddToCart = items => {
    dispatch(addToCart(items));
  };
  const handleAddToFavourites = ele => {
    dispatch(addToFavourites(ele));
  };
  const handleRemoveFromFavourites = ele => {
    dispatch(removeFromFavourites(ele));
  };

  return (
    <View style={styles.itemCardContainer} key={item?.id}>
      <TouchableOpacity
        style={styles.favouriteIconView}
        onPress={() => {
          favo
            ? handleRemoveFromFavourites(item?.id)
            : handleAddToFavourites(item);
        }}>
        <Icon
          name={favo ? 'close-circle-outline' : 'heart-outline'}
          size={25}
          color="#2c2d2e"
        />
      </TouchableOpacity>
      <Image
        source={{
          uri: `${item?.image}`,
        }}
        style={styles.img}
      />
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
        {item?.title}
      </Text>
      <Text style={styles.disc} ellipsizeMode="tail" numberOfLines={1}>
        {item?.description}
      </Text>
      <View style={styles.ratingContainer}>
        {Array.from({length: 5}, (_, index) => (
          <Icon
            key={index}
            name={index < item?.rating?.rate ? 'star' : 'star-outline'}
            size={20}
            color={index < item?.rating?.rate ? 'gold' : 'gray'}
          />
        ))}

        <Text style={styles.count}>({item?.rating?.count})</Text>
      </View>
      <Text style={styles.price}>₹ {item?.price}</Text>
      <TouchableOpacity
        style={styles.addToCartBtn}
        onPress={() => {
          handleAddToCart(item);
        }}>
        <Text style={styles.cartBtnTxt}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  itemCardContainer: {
    width: '50%',
    height: 430,
    backgroundColor: '#fff',
    borderColor: '#e3e2e1',
    borderWidth: 5,
    borderRadius: 10,
    padding: 8,
    position: 'relative',
  },
  favouriteIconView: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 5,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 23,
    marginTop: 8,
    color: '#000',
  },
  disc: {
    fontSize: 12,
    marginTop: 5,
    color: '#91918e',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  count: {
    marginLeft: 5,
  },
  price: {
    fontSize: 23,
    color: '#000',
    marginTop: 5,
  },
  addToCartBtn: {
    marginTop: 30,
    height: 40,
    width: '100%',
    marginHorizontal: 'auto',
    backgroundColor: '#127837',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  cartBtnTxt: {
    fontSize: 19,
  },
});
