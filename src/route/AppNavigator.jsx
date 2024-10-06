import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='SplashScreen'>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
