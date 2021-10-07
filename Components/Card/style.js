import React from 'react';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: 180,
    alignSelf: 'center',
    zIndex: 1,
    borderRadius: 6,
    position: 'absolute',
  },
  wrapper: {
    top: -110,
    shadowColor: '#181A6F',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.37,
    shadowRadius: 10.49,
    elevation: 12,
  },
  money: {
    width: '80%',
    alignSelf: 'center',
    position: 'absolute',
    top: -55,
    color: 'white',
    fontWeight: '600',
    fontSize: 25,
  },
  avb: {
    width: '80%',
    alignSelf: 'center',
    position: 'absolute',
    top: -79,
    color: 'white',
  },
  inCard: {
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 30,
    justifyContent: 'center',
    height: '100%',
  },
  carNumber: {
    color: 'white',
    width: '100%',
    fontSize: 16,
  },
});

export default styles;
