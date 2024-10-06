import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Cart from '../screens/Cart';
import SaveLater from '../screens/SaveLater';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import MyAccount from '../screens/MyAccount';
import Favourites from '../screens/Favourites';
import CartIconCount from '../components/CartIconCount';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {height: 65, paddingVertical: 4, justifyContent: 'center'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="home" size={35} color="#4a78c2" />
            ) : (
              <Icon name="home-outline" size={35} color="#414142" />
            );
          },
          tabBarLabelStyle: {fontSize: 13, fontWeight: '800', paddingBottom: 7},
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <CartIconCount focused={focused} />
            ) : (
              <CartIconCount />
            );
          },
          tabBarLabelStyle: {fontSize: 13, fontWeight: '800', paddingBottom: 7},
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="cards-heart" size={35} color="#4a78c2" />
            ) : (
              <Icon name="cards-heart-outline" size={35} color="#414142" />
            );
          },
          tabBarLabelStyle: {fontSize: 13, fontWeight: '800', paddingBottom: 7},
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'MyAccount',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Icon name="account-circle" size={35} color="#4a78c2" />
            ) : (
              <Icon name="account-circle-outline" size={35} color="#414142" />
            );
          },
          tabBarLabelStyle: {fontSize: 13, fontWeight: '800', paddingBottom: 7},
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
