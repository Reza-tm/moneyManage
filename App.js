import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PaginationProvider, {
  usePagination,
} from './Src/Provider/PaginationProvider';
import UserPassProvider from './Src/Provider/UserPassProvider';
import MainRouter from './Src/Routers/MainRouter';
import TapRouters from './Src/Routers/TapRouters';

const MyComponent = () => {
  return (
    <UserPassProvider>
      <PaginationProvider>
        <MainRouter />
      </PaginationProvider>
    </UserPassProvider>
  );
};

export default MyComponent;
