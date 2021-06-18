import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {Chip} from 'react-native-elements';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {View, Text, Modal} from 'react-native';
import styles from './styles';

import capitalize from '../../utils/capitalize';

const MovesModal = ({move, modalAction}) => {
  const [moveInfo, setMoveInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/move/${move}`)
      .then(response => {
        setTimeout(() => {
          setMoveInfo(response.data);
          console.log('Called Pokemon API for move info');
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
  }, [move]);

  const moveDescription = (description, attributes) => {
    if (description.indexOf('$effect_chance') > -1) {
      return description.replace('$effect_chance', attributes.effect_chance);
    } else {
      return description;
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.modal}>
          <View style={styles.closeButton}>
            <Chip
              icon={{
                name: 'close',
                type: 'font-awesome',
                size: 20,
                color: 'white',
              }}
              onPress={() => {
                modalAction();
              }}
            />
          </View>
          {moveInfo !== null ? (
            <>
              <Text style={styles.moveTitle}>{capitalize(move)}</Text>
              <View>
                <Text style={styles.moveDesc}>
                  {moveDescription(
                    moveInfo.effect_entries[0].short_effect,
                    moveInfo,
                  )}
                </Text>
              </View>
              <View>
                <Text style={styles.moveInfo}>
                  Type: {capitalize(moveInfo.type.name)}
                </Text>
                <Text style={styles.moveInfo}>
                  Category: {capitalize(moveInfo.meta.category.name)}
                </Text>
                <Text style={styles.moveInfo}>
                  Accuracy: {moveInfo.accuracy}%
                </Text>
                <Text style={styles.moveInfo}>
                  Targets: {capitalize(moveInfo.target.name)}
                </Text>
              </View>
              <View style={styles.moveInfoRow}>
                <Text>PP: {moveInfo.pp}</Text>
                <Text>Priority: {moveInfo.priority}</Text>
                <Text>
                  Power: {moveInfo.power === null ? 0 : moveInfo.power}
                </Text>
              </View>
            </>
          ) : (
            <SkeletonContent
              containerStyle={styles.skeletonContainer}
              isLoading={true}
              layout={[
                {
                  key: 'name',
                  width: 140,
                  height: 20,
                  marginBottom: 15,
                  alignSelf: 'center',
                },
                {
                  key: 'description',
                  width: 210,
                  height: 20,
                  marginBottom: 15,
                  alignSelf: 'center',
                },
                {
                  key: 'info',
                  width: 180,
                  height: 100,
                  marginBottom: 15,
                },
                {
                  key: 'stats',
                  width: 230,
                  height: 20,
                  marginBottom: 6,
                  alignSelf: 'center',
                },
              ]}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

MovesModal.propTypes = {
  move: PropTypes.string,
  modalAction: PropTypes.func,
};

MovesModal.defaultProps = {
  moves: '',
  modalAction: () => {
    console.log('Default Function');
  },
};

export default MovesModal;
