//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainApp from '../Screens/MainApp/MainApp';
import Improve from '../Screens/Improve/Improve';
import Badge from '../Screens/Badge/Badge';
import Account from '../Screens/Account/Account';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const TapRouters = () => {
  return (
    <Animatable.View style={{flex: 1}} animation="fadeIn">
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              let IconSize;
              if (route.name === 'page') {
                iconName = focused ? 'home' : 'home-outline';
                IconSize = focused ? 26 : 22;
              } else if (route.name === 'improve') {
                IconSize = focused ? 26 : 22;
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              } else if (route.name === 'badge') {
                IconSize = focused ? 26 : 22;
                iconName = focused ? 'briefcase' : 'briefcase-outline';
              } else if (route.name === 'account') {
                IconSize = focused ? 26 : 22;
                iconName = focused ? 'person' : 'person-outline';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={IconSize} color="black" />;
            },

            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
          })}>
          <Tab.Screen
            name="page"
            component={MainApp}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="improve"
            component={Improve}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="badge"
            component={Badge}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="account"
            component={Account}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Animatable.View>
  );
};

//make this component available to the app
export default TapRouters;
