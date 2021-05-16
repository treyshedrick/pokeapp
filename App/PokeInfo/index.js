import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, Image} from 'react-native';
import capitalize from '../utils/capitalize';
import styles from './styles';

const PokeInfo = ({info}) => {
  const type = info.types.map(i => {
    return i.type.name;
  });

  return (
    <View style={styles.pokeContainer}>
      <View style={styles.row}>
        <Image
          style={styles.pokeImage}
          source={{uri: info.sprites.front_default}}
        />
      </View>
      <View>
        <Text style={styles.sectionTitle}>{capitalize(info.name)}</Text>
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
    </View>
  );
};

PokeInfo.propTypes = {
  info: PropTypes.object,
};

PokeInfo.defaultProps = {
  info: '',
};
export default PokeInfo;
