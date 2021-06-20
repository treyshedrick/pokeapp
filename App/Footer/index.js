import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import Gen4Image from '../assets/generation4.png';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image source={Gen4Image} />
    </View>
  );
};

export default Footer;
