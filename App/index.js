/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Header from './Header/index';
import Search from './Search';
import {View} from 'react-native';

const App = () => {
  return (
    <View>
      <Header />
      <Search />
    </View>
  );
};

export default App;
