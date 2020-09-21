import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

export default class SplashScreen extends Component {

  render() {
      var {navigate} = this.props.navigation;
    return(
      <View style={styles.wrapper}>
        <Image style={styles.logo} source= {require('F:/React Codes/ExpoCheckApp/assets/logo.png')} /> 
        <Text style={styles.name}> LEARNOVATE.</Text>
          <View>
          <TouchableOpacity>
            <Text style={styles.txt1} onPress= {() => navigate("Home", {})}> Lets Start </Text>
          </TouchableOpacity>
          </View>     
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    name: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        fontWeight: "100",
        color: 'grey'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 111,
        marginTop: -30
    },
    txt1: {
        marginTop: 50,
        fontSize: 22,
        color: 'grey',
    }
});