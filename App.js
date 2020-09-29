import React from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SplashScreen from './components/SplashScreen.js';
import Home from './components/Home.js';
import Alphabets from './components/Alphabets.js';
import Pronunciation from './components/Pronunciation.js';
import Settings from './components/Settings.js';
import Sync from './components/Sync.js';
import Notifications from './components/Notifications.js';
import ScreenTime from './components/ScreenTime.js';
import Language from './components/Language.js';
import Feedback from './components/Feedback.js';

const Navigation = createStackNavigator ({
  SplashScreen: {screen: SplashScreen, navigationOptions:{header:null,} },
  Home: {screen: Home, navigationOptions:{header:null,} },
  Alphabets: {screen: Alphabets, navigationOptions:{header:null,} },
  Pronunciation: {screen: Pronunciation, navigationOptions:{header:null,} },
  Settings: {screen: Settings, navigationOptions:{header:null,} },
  Sync: {screen: Sync, navigationOptions:{header:null,} },
  Notifications: {screen: Notifications, navigationOptions:{header:null,} },
  ScreenTime: {screen: ScreenTime, navigationOptions:{header:null,} },
  Language: {screen: Language, navigationOptions:{header:null,} },
  Feedback: {screen: Feedback, navigationOptions:{header:null,} },
});

export default createAppContainer(Navigation);