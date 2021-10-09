//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {usePagination} from '../Provider/PaginationProvider';
import MainApp from '../Screens/MainApp/MainApp';
import Splash from '../Screens/Splash/Splash';
import IntroRouter from './IntroRouter';
import SignRouter from './SignRouter';
import TapRouters from './TapRouters';

// create a component
const MainRouter = () => {
  const [page, sePage] = usePagination();
  const [splash, setSplash] = useState(false); // make it true

  if (splash) {
    return <Splash setSplash={setSplash} />;
  } else {
    if (page == 0) {
      return <SignRouter />;
    } else if (page == 2) {
      return <TapRouters />;
    }
  }
};

export default MainRouter;
