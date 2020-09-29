import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Switch } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Notifications extends Component {

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
                        marginLeft: 75
                    }}>Notifications.</Text>
                </View>

                <View style={styles.box1}>
                    <Text style={styles.txt}>Show Notifications</Text>
                    <Switch value={true} style={styles.switchbtn}/>
                    <Text style={styles.txt}>Show Previews</Text>
                    <Switch value={true} style={styles.switchbtn}/>
                    <Text style={styles.txt}>Play Sound</Text>
                    <Switch value={true} style={styles.switchbtn}/>
                    <Text style={styles.txt}>Allow Notification Dots</Text>
                    <Switch value={true} style={styles.switchbtn}/>
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
        height: 240,
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
    switchbtn: {
        marginLeft: 250,
        marginTop: -50
    }
});