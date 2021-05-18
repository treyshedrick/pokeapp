import React, {useState} from 'react';
import {View, Text} from 'react-native';

const Moves = ({moves}) => {
  // filters through moves array for only gen 4 and moves aquired from leveling up
  const versionGroups = moves.map(i => {
    return i.version_group_details.filter(vg => {
      return (
        vg.version_group.name === 'diamond-pearl' &&
        vg.move_learn_method.name === 'level-up'
      );
    });
  });
  const gen4MovesIdx = versionGroups
    .map((i, index) => {
      return i.length !== 0 ? index : null;
    })
    .filter(notNull => {
      return notNull !== null;
    });

  // places filted array into its own array of objects
  let pokeMoves = [];
  gen4MovesIdx.map(i => {
    pokeMoves.push({
      name: moves[i].move.name,
      levelLearnedAt: versionGroups[i][0].level_learned_at,
    });
  });

  // sort pokeMoves by when learned
  pokeMoves = pokeMoves.sort((a, b) => {
    return a.levelLearnedAt - b.levelLearnedAt;
  });

  return (
    <View>
      {pokeMoves.map((move, index) => {
        return (
          <View key={`pokeMove_${index}`}>
            <Text>{`${move.name} level ${move.levelLearnedAt}`}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Moves;
