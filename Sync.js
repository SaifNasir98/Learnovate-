import React , { Component, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, TextInput, Button, Linking } from 'react-native';
import { StackNavigator } from 'react-navigation';

const supportedURL = "https://accounts.google.com";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async() => {
    const supported = await Linking.canOpenURL(url);
    if(supported) {
      await Linking.openURL(url);
    }
    else{
      Alert.alert('Dont know how to open this URL: ${url}');
    } 
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export default class Sync extends Component {

    render() {
        var {navigate} = this.props.navigation;
        return(
            <View style={styles.wrapper}>
                <View style={{
                    position: 'absolute',
                    backgroundColor: '#2E4058',
                    border: 2,
                    radius: 3,
                    width: '100%',
                    height: 250,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25,
                    top: 0
                }}>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: "100",
                        color: 'white',
                        marginTop: 100,
                        marginLeft: 127
                    }}>Sync.</Text>
                </View>

                <View style={styles.box1}>
                    <View style={{
                        backgroundColor: 'lightgrey',
                        width: 100,
                        height: 50,
                        marginLeft: 110,
                        marginTop: 50,
                        justifyContent: 'center',
                        borderRadius: 15,
                        alignItems: 'center'
                    }}>
                        <OpenURLButton url={supportedURL}>Sign In</OpenURLButton>
                    </View>
                </View>

                <View style={{
                    position: 'absolute',
                    backgroundColor: 'orange',
                    border: 2,
                    radius: 3,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25,
                    bottom: 0
                }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress= {() => navigate("Home", {})}>
                        <Image style={{
                            width: 40,
                            height: 40,
                            marginLeft: 30
                        }}
                        source= {require('F:/React Codes/ExpoCheckApp/assets/home.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress= {() => navigate("Settings", {})}>
                        <Image style={{
                            width: 40,
                            height: 40,
                            marginLeft: 180
                        }}
                        source= {require('F:/React Codes/ExpoCheckApp/assets/settings.png')}>
                        </Image>
                    </TouchableOpacity>
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
        backgroundColor: 'lightgrey' 
    },
    box1: {
        backgroundColor: 'white',
        width: 320,
        position: 'absolute',
        height: 150,
        borderRadius: 20,
        flexDirection: "column"
    },
    settxt: {
        fontSize: 22,
        fontWeight: "300",
        paddingHorizontal: 55,
        paddingVertical: 25,
        color: '#2E4058'
    }
});