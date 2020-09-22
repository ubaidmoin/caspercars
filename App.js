/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Navigator from './src/navigations/Navigator';
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </>
  );
};

export default App;
