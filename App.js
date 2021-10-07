import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserPassProvider from './Src/Provider/UserPassProvider';
import Routers from './Src/Routers/Routers';
import TapRouters from './Src/Routers/TapRouters';

const MyComponent = () => {
  return (
    <UserPassProvider>
      {/* <Routers /> */}
      <TapRouters />
    </UserPassProvider>
  );
};

export default MyComponent;
