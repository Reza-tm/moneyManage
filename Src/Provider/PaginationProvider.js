//import liraries
import React, {createContext, useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PaginationContext = createContext();

const PaginationProvider = ({children}) => {
  const [page, setPage] = useState(2);
  return (
    <PaginationContext.Provider value={[page, setPage]}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
//custom Hooks
export const usePagination = () => useContext(PaginationContext);
