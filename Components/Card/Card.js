//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

// create a component
const Card = () => {
  return (
    <View style={{zIndex: 22}}>
      <View style={styles.wrapper}>
        <Text style={styles.avb}>Available Money</Text>
        <Text style={styles.money}>$ 18,981.50</Text>
        <LinearGradient
          colors={['#0255B1', '#AD13D2']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.card, {elevation: 12}]}>
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
          <View style={styles.circle} />
          <View style={styles.circletwo} />
        </LinearGradient>
      </View>
    </View>
  );
};

export default Card;
