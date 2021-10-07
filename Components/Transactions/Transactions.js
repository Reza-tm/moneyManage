//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const Transactions = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Icon name="fast-food-outline" size={29} style={{marginRight: 8}} />
        <View style={{justifyContent: 'space-between'}}>
          <Text style={{fontSize: 15, fontWeight: '600', color: '#042C5C'}}>
            Pay for food
          </Text>
          <Text style={{fontSize: 12, opacity: 0.4}}>Sun, 5 Jan</Text>
        </View>
      </View>
      <Text style={{color: '#EA7E79', fontSize: 15, fontWeight: '700'}}>
        - $200.0
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 60,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 9,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.41,
    elevation: 2,
  },
});

//make this component available to the app
export default Transactions;
