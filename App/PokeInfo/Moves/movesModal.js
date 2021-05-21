import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {Chip} from 'react-native-elements';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, ScrollView, Modal} from 'react-native';
import styles from './styles';

const MovesModal = ({move, modalAction}) => {
  const [moveInfo, setMoveInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/move/${move}`)
      .then(response => {
        setMoveInfo(response.data);
        console.log('Called Pokemon API for move info');
      })
      .catch(err => {
        console.log(err);
      });
  }, [move]);

  console.log(moveInfo);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          console.log('Closed!');
        }}>
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
          <Text>{move}</Text>
          {moveInfo !== null ? (
            <>
              <View>
                <Text>Type: {moveInfo.type.name}</Text>
              </View>
              <View>
                <Text>Type: {moveInfo.meta.category.name}</Text>
              </View>
            </>
          ) : null}
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
