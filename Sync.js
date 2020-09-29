import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

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
                        marginTop: 50,
                        marginLeft: 124
                    }}>Sync.</Text>
                </View>

                <View style={styles.box1}>
                    <TextInput style= {{
                        width: 250,
                        height: 40,
                        marginTop: 15,
                        marginLeft: 25,
                        fontSize: 18,
                        color: '#2E4058',
                        paddingHorizontal: 5,
                        borderColor: '#2E4058',
                        borderBottomWidth: 1,
                    }}
                    placeholder="Enter Your Email" >
                    </TextInput>
                    <View style={{
                        backgroundColor: '#2E4058',
                        width: 90,
                        height: 50,
                        marginLeft: 110,
                        marginTop: 20,
                        justifyContent: 'center',
                        borderRadius: 15,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: "200",
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => {Alert.alert("Connection to server lost")}}>Sync</Text>
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