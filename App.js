//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserPassProvider from './Src/Provider/UserPassProvider';
import Routers from './Src/Routers/Routers';

// create a component
const MyComponent = () => {
  return (
    <UserPassProvider>
      <Routers />
    </UserPassProvider>
  );
};

// define your styles
const styles = StyleSheet.create({});

export default MyComponent;
