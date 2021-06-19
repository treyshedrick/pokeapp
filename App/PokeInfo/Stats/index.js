import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Stats = ({stats, experience}) => {
  return (
    <View>
      <View style={styles.xpRow}>
        <Text style={styles.statFont}>Base Experience: {experience}</Text>
      </View>
      <View style={styles.statRow}>
        <View flexDirection="column">
          <Text style={styles.statFont}>Hp: {stats[0].base_stat}</Text>
          <Text style={styles.statFont}>Speed: {stats[5].base_stat}</Text>
        </View>
        <View flexDirection="column">
          <Text style={styles.statFont}>Attack: {stats[1].base_stat}:</Text>
          <Text style={styles.statFont}>Defense: {stats[2].base_stat}</Text>
        </View>
        <View flexDirection="column">
          <Text style={styles.statFont}>Sp Attack: {stats[3].base_stat}</Text>
          <Text style={styles.statFont}>Sp Defense: {stats[4].base_stat}</Text>
        </View>
      </View>
    </View>
  );
};

export default Stats;
