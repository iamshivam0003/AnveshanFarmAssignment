import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'BottomNavigation'}],
        }),
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <View style={styles.splashContainer}>
      <Text style={styles.splashScreenText}>Welcome </Text>
      <Text style={styles.splashScreenText}>to</Text>
      <Text style={styles.splashScreenText}>Anveshan Farm!</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00584B',
  },
  splashScreenText: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 40,
  },
});
