import React from 'react';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F8F9FD',
  },
  topSections: {
    height: '30%',
    backgroundColor: '#181A6F',
    position: 'relative',
    zIndex: 1,
  },
  botSections: {
    bottom: 0,
    height: '55%',
    backgroundColor: '#F8F9FD',
    zIndex: -1,
    width: '100%',
    position: 'absolute',
  },
  transText: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 15,
    color: '#042C5C',
  },
});

export default styles;
