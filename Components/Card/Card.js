//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRef} from 'react/cjs/react.development';
import styles from './style';

// create a component
const Card = ({bgc}) => {
  const topCircle = useRef(new Animated.ValueXY(0)).current;
  const botCircle = useRef(new Animated.ValueXY(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(botCircle, {
            duration: 7000,
            toValue: {x: 0, y: 50},
            useNativeDriver: true,
            easing: Easing.bounce,
          }),
          Animated.timing(topCircle, {
            duration: 7000,
            toValue: {x: 50, y: 0},
            useNativeDriver: true,
            easing: Easing.bounce,
          }),
        ]),
        Animated.delay(500),
        Animated.timing(topCircle, {
          duration: 5000,
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }),
        Animated.timing(botCircle, {
          duration: 5000,
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }),
      ]),
      {iterations: 10000},
    ).start();
  }, []);

  return (
    <View style={{zIndex: 22}}>
      <View style={styles.wrapper}>
        <Text style={styles.avb}>Available Money</Text>
        <Text style={styles.money}>$ 18,981.50</Text>
        <Animated.View
          style={[styles.card, {elevation: 12, backgroundColor: bgc}]}>
          <View style={styles.inCard}>
            <Icon name="cash-outline" size={35} color="white" />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}>
              <Text style={styles.carNumber}>1234</Text>
              <Text style={styles.dot}>....</Text>
              <Text style={styles.dot}>....</Text>
              <Text style={styles.carNumber}>5689</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <Text style={{color: 'white'}}>Reza Sobhgol</Text>
              <Text style={{color: 'white'}}>08/22</Text>
            </View>
          </View>
          <Animated.View
            style={[styles.circle, {transform: [{translateX: topCircle.x}]}]}
          />
          <Animated.View
            style={[styles.circletwo, {transform: [{translateY: botCircle.y}]}]}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default Card;
