import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Card from '../../../Components/Card/Card';

const MainApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSections}></View>
      <View style={styles.botSections}>
        <Card />
      </View>
    </View>
  );
};

export default MainApp;
