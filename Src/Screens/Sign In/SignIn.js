//import liraries
import React, {Component, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

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

export default SingIn;
