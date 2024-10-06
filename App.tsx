import React from 'react';
import {Text, View} from 'react-native';
import AppNavigator from './src/route/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
