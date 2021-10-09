import React from 'react';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: 180,
    alignSelf: 'center',
    zIndex: 1,
    borderRadius: 6,
    overflow: 'hidden',
  },
  wrapper: {
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
    color: 'white',
    fontWeight: '600',
    fontSize: 25,
    marginBottom: 10,
  },
  avb: {
    width: '80%',
    alignSelf: 'center',
    color: 'white',
    marginBottom: 10,
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
    fontSize: 14,
    letterSpacing: 3,
  },
  dot: {color: 'white', fontSize: 30, letterSpacing: 3},
  circle: {
    backgroundColor: 'white',
    width: 190,
    height: 190,
    borderRadius: 100,
    position: 'absolute',
    top: 70,
    left: 185,
    opacity: 0.09,
  },
  circletwo: {
    backgroundColor: 'white',
    width: 190,
    height: 190,
    borderRadius: 100,
    position: 'absolute',
    top: -90,
    left: 200,
    opacity: 0.09,
  },
});

export default styles;
