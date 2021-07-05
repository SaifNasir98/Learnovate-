import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

export default class Settings extends Component {

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
                        marginLeft: 104
                    }}>Settings.</Text>
                </View>

                <View style={styles.box1}>
                    <Image style={{
                        width: 30,
                        height: 30,
                        position: 'absolute',
                        marginTop: 25,
                        marginLeft: 12
                    }}
                    source= {require('F:/React Codes/ExpoCheckApp/assets/sync.png')} />
                    <Image style={{
                        width: 20,
                        height: 20,
                        position: 'absolute',
                        marginTop: 28,
                        marginLeft: 280
                    }}
                    source= {require('F:/React Codes/ExpoCheckApp/assets/next.png')} />
                    <TouchableOpacity>
                        <Text style={styles.settxt} onPress={() => navigate("Sync", {})}>Sync Your Progress</Text>
                    </TouchableOpacity>
                    <Image style={{
                        width: 30,
                        height: 30,
                        position: 'absolute',
                        marginTop: 94,
                        marginLeft: 12
                    }}
                    source= {require('F:/React Codes/ExpoCheckApp/assets/notification.png')} />
                    <Image style={{
                        width: 20,
                        height: 20,
                        position: 'absolute',
                        marginTop: 98,
                        marginLeft: 280
                    }}
                    source= {require('F:/React Codes/ExpoCheckApp/assets/next.png')} />
                    <TouchableOpacity>
                        <Text style={styles.settxt} onPress={() => navigate("Notifications", {})}>Notifications</Text>
                    </TouchableOpacity>
                    <Image style={{
                        width: 28,
                        height: 28,
                        position: 'absolute',
                        marginTop: 166,
                        marginLeft: 13
                    }}
                    source= {require('F:/React Codes/ExpoCheckApp/assets/screentime.png')} />
                    <Image style={{
                        width: 20,
                        height: 20,
                        position: 'absolute',
                        marginTop: 168,
                        marginLeft: 280
                    }}
                    source= {require('F:/React Codes/ExpoCheckApp/assets/next.png')} />
                    <TouchableOpacity>
                        <Text style={styles.settxt} onPress={() => navigate("ScreenTime", {})}>Screen Time</Text>
                    </TouchableOpacity>
                    <Image style={{
                        width: 30,
                        height: 30,
                        position: 'absolute',
                        marginTop: 239,
                        marginLeft: 13
                    }}
                    source= {require('F:/React Codes/ExpoCheckApp/assets/language.png')} />
                    <Image style={{
                        width: 20,
                        height: 20,
                        position: 'absolute',
                        marginTop: 238,
                        marginLeft: 280
                    }}
                    source= {require('F:/React Codes/ExpoCheckApp/assets/next.png')} />
                    <TouchableOpacity>
                        <Text style={styles.settxt} onPress={() => navigate("Language", {})}>Language</Text>
                    </TouchableOpacity>
                    <Image style={{
                        width: 30,
                        height: 30,
                        position: 'absolute',
                        marginTop: 310,
                        marginLeft: 13
                    }}
                    source= {require('F:/React Codes/ExpoCheckApp/assets/feedback.png')} />
                    <Image style={{
                        width: 20,
                        height: 20,
                        position: 'absolute',
                        marginTop: 310,
                        marginLeft: 280
                    }}
                    source= {require('F:/React Codes/ExpoCheckApp/assets/next.png')} />
                    <TouchableOpacity>
                        <Text style={styles.settxt} onPress={() => navigate("Feedback", {})}>Rate Us / Feedback</Text>
                    </TouchableOpacity>
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
        height: 370,
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