//import liraries
import React, {Component, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useUserPass} from '../../Provider/UserPassProvider';
import styles from './styles';

const SingIn = ({navigation}) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [prevUserPasses, setPrevUserPasses] = useUserPass();
  const checkAuth = (prev, m, p) => {
    const mailIndex = prev.findIndex(e => e.mail == m);
    if (mailIndex > -1) {
      if (prev[mailIndex].pass == p) {
        alert('welcome to app');
      }
    }
  };

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
      <TouchableOpacity onPress={() => checkAuth(prevUserPasses, mail, pass)}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingIn;
