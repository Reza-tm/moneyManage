import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserPassProvider from './Src/Provider/UserPassProvider';
import Routers from './Src/Routers/Routers';

const MyComponent = () => {
  return (
    <UserPassProvider>
      <Routers />
    </UserPassProvider>
  );
};

export default MyComponent;
