import PropTypes from 'prop-types';
import React from 'react';
import {ScrollView} from 'react-native';
import Basic from './Basic';
import styles from './styles';

const PokeInfo = ({info}) => {
  const type = info.types.map(i => {
    return i.type.name;
  });

  return (
    <ScrollView style={styles.pokeContainer}>
      <Basic
        name={info.name}
        type={type}
        imageUrl={info.sprites.front_default}
      />
    </ScrollView>
  );
};

PokeInfo.propTypes = {
  info: PropTypes.object,
};

PokeInfo.defaultProps = {
  info: '',
};
export default PokeInfo;
