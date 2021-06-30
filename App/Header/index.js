import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import PokedexImage from '../assets/pokedex.png';
import DeviceInfo from 'react-native-device-info';

const Header = () => {
  console.log(DeviceInfo.hasNotch());
  return (
    <View style={styles.headerContainer}>
      <Image
        style={DeviceInfo.hasNotch() ? styles.sectionTitle : null}
        source={PokedexImage}
      />
    </View>
  );
};

export default Header;
