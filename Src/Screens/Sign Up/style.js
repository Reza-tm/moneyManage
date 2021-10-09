import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  textInput: {
    backgroundColor: '#aeaeae',
    width: 200,
    height: 50,
    marginTop: 20,
    paddingHorizontal: 7,
  },
  submit: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
  },
});
export default Styles;
