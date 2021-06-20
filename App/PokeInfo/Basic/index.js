import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, Image} from 'react-native';
import capitalize from '../../utils/capitalize';
import styles from './styles';

const Basic = ({type, name, imageUrl}) => {
  return (
    <>
      <View style={styles.row}>
        <Image style={styles.pokeImage} source={{uri: imageUrl}} />
      </View>
      <View>
        <Text style={styles.pokeName}>{capitalize(name)}</Text>
        <Text style={styles.sectionTitle}>
          Type:
          {type.length > 1
            ? type.map((typeOf, i) => {
                if (i > 0) {
                  return ` / ${capitalize(typeOf)}`;
                }
                return ` ${capitalize(typeOf)}`;
              })
            : `  ${capitalize(type.toString())}`}
        </Text>
      </View>
    </>
  );
};

Basic.propTypes = {
  type: PropTypes.array,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
};

Basic.defaultProps = {
  type: [],
  name: '',
  imageUrl: '',
};

export default Basic;
