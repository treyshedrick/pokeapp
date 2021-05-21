import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  titleLeft: {
    textAlign: 'left',
    paddingLeft: 30,
    fontSize: 20,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    textAlign: 'center',
    color: 'white',
  },
  moveViewStyle: {
    padding: 20,
    margin: 10,
    borderColor: 'skyblue',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'navy',
    color: 'white',
  },
  modal: {
    margin: 25,
    marginTop: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    marginRight: 5,
    marginTop: 5,
    right: 0,
    top: 0,
  },
});
