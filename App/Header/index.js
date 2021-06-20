import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import PokedexImage from '../assets/pokedex.png';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.sectionTitle} source={PokedexImage} />
    </View>
  );
};

export default Header;
