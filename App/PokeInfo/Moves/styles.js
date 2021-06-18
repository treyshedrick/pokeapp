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
  moveText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  moveDesc: {
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 10,
  },
  moveTitle: {
    textAlign: 'center',
    fontSize: 26,
  },
  moveInfo: {
    fontSize: 17,
    paddingTop: 10,
  },
  moveInfoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingTop: 15,
  },
  moveViewStyle: {
    padding: 20,
    margin: 10,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'red',
    color: 'white',
  },
  modal: {
    margin: 25,
    marginTop: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  skeletonContainer: {
    height: 210,
  },
});
