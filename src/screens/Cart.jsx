import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ItemCard from '../components/ItemCard';
import CartCard from '../components/CartCard';
import SaveForLaterCard from '../components/SaveForLaterCard';
import EmptyCartCard from '../components/EmptyCartCard';
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = () => {
  const cartItems = useSelector(state => {
    return state;
  });

  const totalCartPrice = cartItems?.cart?.reduce((total, item) => {
    return total + item?.price;
  }, 0);
  return (
    <ScrollView style={styles.cartScreenContainer}>
      <View style={styles.cartContainer}>
        {cartItems?.cart?.length > 0 ? (
          cartItems?.cart?.map((item, ind) => {
            return <CartCard item={item} key={item?.id} />;
          })
        ) : (
          <EmptyCartCard />
        )}
        {cartItems?.cart?.length > 0 ? (
          <View style={styles.cartTotalContainer}>
            <Text style={styles.totalCartPriceText}>
              ₹ {totalCartPrice.toFixed(2)}
            </Text>
            <TouchableOpacity
              style={styles.orderPlaceBtn}
              onPress={() => {
                Alert.alert('Order Placed');
              }}>
              <Text style={styles.orderPlaceBtnTxt}>Place Order</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      {/* {cartItems?.saveForLater?.length > 0 ? ( */}
        <View style={styles.saveForLaterContainer}>
          <View style={styles.saveForLaterHeadSect}>
            <Icon name="archive-outline" size={25} color="#9c9ea1" />
            <Text style={styles.saveHeadingTxt}>
              Saved For Later ({cartItems?.saveForLater?.length})
            </Text>
          </View>
          <View style={styles.saveLaterItemContainer}>
            {cartItems?.saveForLater?.map((item, ind) => {
              return <SaveForLaterCard item={item} key={item?.id} />;
            })}
          </View>
        </View>
      {/* ) : null} */}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartScreenContainer: {
    flex: 1,
  },
  cartContainer: {flex: 1},
  saveForLaterContainer: {
    marginTop: 60,
    borderTopWidth: 10,
    borderColor: '#8b8c8f',
  },
  saveForLaterHeadSect: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  saveHeadingTxt: {
    color: '#000',
    fontWeight: '800',
    fontSize: 20,
    marginLeft: 10,
  },
  saveLaterItemContainer: {},
  cartTotalContainer: {
    marginTop:20,
    width: '100%',
    backgroundColor: '#ded9d1',
    height: 90,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalCartPriceText: {
    fontSize: 30,
    fontWeight: '800',
    color: '#000',
  },
  orderPlaceBtn: {
    height: 40,
    width: 150,
    backgroundColor: '#f2a407',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderPlaceBtnTxt: {
    color: '#000',
    fontWeight: '700',
    fontSize: 17,
  },
});
