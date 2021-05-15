import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  pokeContainer: {
    borderWidth: 5,
    paddingBottom: 20,
    borderColor: 'red',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  pokeImage: {
    height: 200,
    width: 200,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
