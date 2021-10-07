//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Splash from '../Screens/Splash/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingIn from '../Screens/Sign In/SignIn';
import SignUp from '../Screens/Sign Up/SignUp';

// create a component
const Stack = createNativeStackNavigator();
const Routers = () => {
  const [splash, setSplash] = useState(true);
  return (
    <View style={styles.container}>
      {splash ? (
        <Splash setSplash={setSplash} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Sign In" component={SingIn} />
            <Stack.Screen name="Sign Up" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

//make this component available to the app
export default Routers;
