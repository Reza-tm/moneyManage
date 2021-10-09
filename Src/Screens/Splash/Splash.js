import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import LottieView from 'lottie-react-native';

// create a component
const Splash = ({setSplash}) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const splashEnd = async () => {
    Animated.spring(opacity, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
    setTimeout(() => setSplash(false), 300);
  };

  return (
    <Animated.View style={[styles.container, {opacity: opacity}]}>
      <LottieView
        autoPlay
        loop={false}
        onAnimationFinish={() => splashEnd()}
        source={require('../../../assets/lottie/13398-money-stack.json')}
      />
    </Animated.View>
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
