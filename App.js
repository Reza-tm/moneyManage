//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Splash from './Src/Screens/Splash/Splash';

// create a component
const MyComponent = () => {
  const [splash, setSplash] = useState(true);
  return splash ? (
    <View style={{flex: 1}}>
      <Splash setSplash={setSplash} />
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hi</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

export default MyComponent;
