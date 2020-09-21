import React from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SplashScreen from './components/SplashScreen.js';
import Home from './components/Home.js';

const Navigation = createStackNavigator ({
  SplashScreen: {screen: SplashScreen, navigationOptions:{header:null,} },
  Home: {screen: Home, navigationOptions:{header:null,} } 
});

export default createAppContainer(Navigation);