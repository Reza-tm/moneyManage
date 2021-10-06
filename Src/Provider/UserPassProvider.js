//import liraries
import React, {Component, useContext, useState} from 'react';
import {createContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppUserPasses = createContext();

const UserPassProvider = ({children}) => {
  const [userPass, setUserPass] = useState('');
  return (
    <AppUserPasses.Provider value={[userPass, setUserPass]}>
      {children}
    </AppUserPasses.Provider>
  );
};

export default UserPassProvider;
export const useUserPass = () => useContext(AppUserPasses);
