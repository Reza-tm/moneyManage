import React from 'react';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  topSections: {
    height: '30%',
    backgroundColor: '#181A6F',
    position: 'relative',
    zIndex: 1,
  },
  botSections: {
    bottom: 0,
    height: '60%',
    backgroundColor: 'white',
    zIndex: -1,
    width: '100%',
    position: 'absolute',
  },
});

export default styles;
