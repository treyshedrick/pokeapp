import React from 'react';
import Header from './Header/index';
import Search from './Search';
import Footer from './Footer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Header />
      <Search />
      <Footer />
    </SafeAreaProvider>
  );
};

export default App;
