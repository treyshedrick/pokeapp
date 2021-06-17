import React from 'react';
import {View, Text} from 'react-native';

const Stats = ({stats, experience}) => {
  return (
    <View>
      <View>
        <Text>Base Experience: {experience}</Text>
      </View>
      <View>
        <Text>Hp: {stats[0].base_stat}</Text>
        <Text>Attack: {stats[1].base_stat}:</Text>
        <Text>Defense: {stats[2].base_stat}</Text>
      </View>
      <View>
        <Text>Sp Attack: {stats[3].base_stat}</Text>
        <Text>Sp Defense: {stats[4].base_stat}</Text>
        <Text>Speed: {stats[5].base_stat}</Text>
      </View>
    </View>
  );
};

export default Stats;
