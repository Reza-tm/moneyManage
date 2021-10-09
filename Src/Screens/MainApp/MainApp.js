import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Animated} from 'react-native';
import styles from './styles';
import Card from '../../../Components/Card/Card';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Transactions from '../../../Components/Transactions/Transactions';
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = ['ali', 'reza', 'saamad'];

const monthRender = c => (
  <View style={{width: windowWidth / 2, flexDirection: 'row'}}>
    <View
      style={{
        width: 55,
        height: 55,
        backgroundColor: '#E4F2F0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      }}>
      <Icon name="arrow-up-outline" size={24} color="#0A9D56" />
    </View>
    <View style={{justifyContent: 'space-around'}}>
      <Text style={{color: '#A5AEBE', fontWeight: '600'}}>Income</Text>
      <Text style={{color: '#183B60', fontSize: 17, fontWeight: '700'}}>
        $ 5,000
      </Text>
    </View>
  </View>
);

const theme = [{topBG: '#181A6F'}, {topBG: 'red'}, {topBG: 'green'}];

const MainApp = () => {
  const topBgcIndex = useRef(new Animated.Value(0)).current;
  const rGradient = useRef(new Animated.Value(0)).current;
  const lGradient = useRef(new Animated.Value(0)).current;

  const interPolatedBgc = topBgcIndex.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [
      'rgba(44, 62, 80, 1)',
      'rgba(142, 158, 171, 1)',
      'rgba(255, 107, 107, 1)',
    ],
  });

  const cardColor = topBgcIndex.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [
      'rgba(52, 152, 219, 1)',
      'rgba(41, 50, 60, 1)',
      'rgba(85, 98, 112, 1)',
    ],
  });

  const changeCard = index => {
    Animated.sequence([
      Animated.spring(topBgcIndex, {
        toValue: index,
      }),
      Animated.spring(rGradient, {
        toValue: index,
      }),
    ]).start();
  };

  const renderItem = ({card}) => (
    <View style={{marginTop: 60}}>
      <Card bgc={cardColor} />
    </View>
  );
  return (
    <Animatable.View style={styles.container} delay={500} animation="fadeIn">
      <Animated.View
        style={[styles.topSections, {backgroundColor: interPolatedBgc}]}>
        <View style={{position: 'absolute', height: 338}}>
          <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={400}
            itemWidth={400}
            layout={'stack'}
            layoutCardOffset={290}
            onSnapToItem={e => changeCard(e)}
          />
        </View>
      </Animated.View>
      <View style={styles.botSections}>
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <Animatable.View animation="fadeIn" delay={1000}>
            <Text style={[styles.transText]}>This month</Text>
            <FlatList
              data={data}
              renderItem={monthRender}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Animatable.View>
          <Animatable.View animation="fadeIn" delay={1500}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              <Text style={[styles.transText]}>Transactions</Text>
            </View>
            <View>
              <FlatList data={data} renderItem={Transactions} />
            </View>
          </Animatable.View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default MainApp;
