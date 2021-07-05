import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component {

    render() {
        var {navigate} = this.props.navigation;
        return(
            <View style={styles.wrapper}> 
                <View style={styles.box1}>
                    <TouchableOpacity>
                        <Text style={styles.txt1} onPress= {() => navigate("Alphabets", {})}>Alphabets</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box2}>
                    <TouchableOpacity>
                        <Text style={styles.txt1} onPress= {() => navigate("Pronunciation", {})}>Pronunciation</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box3}>
                    <TouchableOpacity>
                        <Text style={styles.txt1} onPress= {() => navigate("SpellCracker", {})}>Spell Crack Game</Text>
                    </TouchableOpacity>
                </View>
                <Image style={styles.logo} source= {require('F:/React Codes/ExpoCheckApp/assets/logo.png')} />
            
                <Text style={{fontSize: 22, fontWeight: "100", color: 'white', marginTop: 5}}>LEARNOVATE.</Text>
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
                        source= {require('F:/React Codes/ExpoCheckApp/assets/home.png')}
                        onPress={() => { Alert.alert("")}}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress= {() => navigate("Settings", {})}>
                        <Image style={{
                            width: 40,
                            height: 40,
                            marginLeft: 180
                        }}
                        source= {require('F:/React Codes/ExpoCheckApp/assets/settings.png')}
                        onPress={() => { Alert.alert("")}}>
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
        backgroundColor: '#2E4058' 
    },
    box1: {
        marginTop: -250,
        width: 350,
        borderRadius: 30,
        height: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt1: {
        fontSize: 40,
        fontWeight: "100",
        color: 'white'
    },
    box2: {
        width: 350,
        borderRadius: 30,
        height: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    box3: {
        width: 350,
        borderRadius: 30,
        height: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 111,
        marginTop: -480
    }
});