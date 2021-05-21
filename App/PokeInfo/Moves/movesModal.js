import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Chip} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, ScrollView, Modal} from 'react-native';
import styles from './styles';

const MovesModal = ({move, modalAction}) => {
  const [hideModal, shouldHideModal] = useState(false);

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
        </View>
      </Modal>
    </View>
  );
};

export default MovesModal;
