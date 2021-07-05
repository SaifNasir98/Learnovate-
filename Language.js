import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Language extends Component {

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
                        marginLeft: 87
                    }}>Language.</Text>
                </View>

                <View style={styles.box1}>
                    <Text style={styles.txt}>English</Text>
                    <View style={{
                        backgroundColor: 'orange',
                        width: 80,
                        height: 45,
                        borderRadius: 10,
                        marginLeft: 210,
                        marginTop: -57,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: "500",
                            color: 'white'
                        }}>EN</Text>
                    </View>

                    <Text style={styles.txt}>French</Text>
                    <View style={{
                        backgroundColor: 'white',
                        borderWidth: 1,
                        width: 80,
                        height: 45,
                        borderRadius: 10,
                        marginLeft: 210,
                        marginTop: -57,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: "300",
                            color: '#2E4058'
                        }}>FR</Text>
                    </View>

                    <Text style={styles.txt}>German</Text>
                    <View style={{
                        backgroundColor: 'white',
                        borderWidth: 1,
                        width: 80,
                        height: 45,
                        borderRadius: 10,
                        marginLeft: 210,
                        marginTop: -57,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: "300",
                            color: '#2E4058'
                        }}>GM</Text>
                    </View>

                    <Text style={styles.txt}>Turkish</Text>
                    <View style={{
                        backgroundColor: 'white',
                        borderWidth: 1,
                        width: 80,
                        height: 45,
                        borderRadius: 10,
                        marginLeft: 210,
                        marginTop: -57,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: "300",
                            color: '#2E4058'
                        }}>TK</Text>
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
        height: 300,
        borderRadius: 20,
        flexDirection: "column"
    },
    txt: {
        fontSize: 22,
        fontWeight: "300",
        paddingHorizontal: 25,
        paddingVertical: 25,
        color: '#2E4058'
    },
    settxt: {
        fontSize: 22,
        fontWeight: "300",
        paddingHorizontal: 55,
        paddingVertical: 25,
        color: '#2E4058'
    }
});