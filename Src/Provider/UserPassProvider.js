//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component, useContext, useEffect, useState} from 'react';
import {createContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppUserPasses = createContext();
const UserPassProvider = ({children}) => {
  useEffect(() => {
    getPrevUserPassess();
  }, []);
  const getPrevUserPassess = async () => {
    const getData = await AsyncStorage.getItem('signUpedUsers');
    const parsed = JSON.parse(getData);
    setUserPass(parsed);
  };

  const [userPass, setUserPass] = useState([]);
  return (
    <AppUserPasses.Provider value={[userPass, setUserPass]}>
      {children}
    </AppUserPasses.Provider>
  );
};

export default UserPassProvider;
export const useUserPass = () => useContext(AppUserPasses);
