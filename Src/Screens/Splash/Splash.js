import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

// create a component
const Splash = ({setSplash}) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        onAnimationFinish={() => setSplash(false)}
        source={require('../../../assets/lottie/13398-money-stack.json')}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Splash;
