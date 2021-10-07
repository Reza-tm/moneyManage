//import liraries
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useUserPass} from '../../Provider/UserPassProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const SignUp = ({navigation}) => {
  const [prevUserPasses, setUserPass] = useUserPass();
  const [newMail, setNewMail] = useState('');
  const [newPass, setNewPass] = useState('');

  const submit = (mail, pass) => {
    prevUserPasses.push({mail, pass});
    storeData(prevUserPasses);
  };
  const storeData = async value => {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem('signUpedUsers', stringValue);
  };

  return (
    <View style={styles.container}>
      <Text>Sing up please</Text>
      <TextInput
        value={newMail}
        onChangeText={setNewMail}
        placeholder="new Mail"
        style={styles.textInput}
      />
      <TextInput
        value={newPass}
        onChangeText={setNewPass}
        placeholder="new Pass"
        style={styles.textInput}
      />

      <TouchableOpacity onPress={() => submit(newMail, newPass)}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
        <Text style={styles.submit}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
