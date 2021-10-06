//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const submit = (first, second) => {};

const SignUp = () => {
  const [newMail, setNewMail] = useState('');
  const [newPass, setNewPass] = useState('');
  return (
    <View style={styles.container}>
      <Text>Sing In please</Text>
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
export default SignUp;
