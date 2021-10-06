//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// create a component
const SingIn = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={styles.container}>
      <Text>Sing In please</Text>
      <TextInput
        value={mail}
        onChangeText={setMail}
        placeholder="mail place"
        style={styles.textInput}
      />
      <TextInput
        value={pass}
        onChangeText={setPass}
        placeholder="pass place"
        style={styles.textInput}
      />
      <TouchableOpacity>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
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

//make this component available to the app
export default SingIn;
