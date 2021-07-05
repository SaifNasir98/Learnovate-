import React , { Component, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Button, Linking, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

export default class SplashScreen extends Component {

  constructor() {
    super()
    this.state = {
      showME: true
    }
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME:false
      })
    },
    3000)
  }

  render() {
      var {navigate} = this.props.navigation;
    return(
      <View style={styles.wrapper}>
        <Image style={styles.logo} source= {require('F:/React Codes/ExpoCheckApp/assets/logo.png')} /> 
        <Text style={styles.name}> LEARNOVATE.</Text>
          {
            this.state.showME ?
           <ActivityIndicator size="small" color="white" /> 
           :
          <View>
            <Text style={styles.txt1} onPress= {() => navigate("Home", {})}>Lets Start</Text>
          </View>
          }
          <View style={{ flexDirection: 'row', margin: 20 }}>
          <View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#1565c0', marginLeft: 8, marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: "500", color: '#fff' }}>f</Text>
          </View>
          <View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#f44336', marginHorizontal: 5, marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: "400", color: '#fff' }}>G</Text>
          </View>
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
        backgroundColor: 'orange'
    },
    name: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        fontWeight: "100",
        color: 'white'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 111,
        marginTop: 100
    },
    txt1: {
        marginTop: 50,
        fontSize: 22,
        color: 'white',
    }
});