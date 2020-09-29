import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, TouchableWithoutFeedback, Animated } from 'react-native';
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

const numStars = 5

export default class Feedback extends Component {

    state = {
        rating: 0
    };

    rate = star => {
        this.setState({ rating: star });
    };

    render() {
        var {navigate} = this.props.navigation;
        
        let stars = [];
        for (let x=1; x<=numStars; x++) {
            stars.push(
                <TouchableWithoutFeedback key={x} onPress={() => {
                    this.rate(x);
                }}>
                    <Animated.View>
                        <Star filled={x <= this.state.rating ? true : false} />
                    </Animated.View>
                </TouchableWithoutFeedback>
            );
        }

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
                    }}>Rate Us.</Text>
                </View>

                <View style={styles.box1}>
                    <View style={{flexDirection: "row", justifyContent: 'center'}}>
                        {stars}
                    </View>
                    <TextInput style={{
                        borderBottomWidth: 2,
                        height: 40,
                        width: 280,
                        marginTop: 80,
                        marginLeft: 18,
                        paddingHorizontal: 8,
                        fontWeight: "300",
                        fontSize: 20,
                        color: 'black'
                    }} 
                    placeholder="Provide Your Feedback"/>
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
                        }} onPress={() => {Alert.alert("Feedback Sent")}}>Send</Text>
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

class Star extends React.Component {
    render() {
        return(
            <FontAwesome name={this.props.filled === true ? "star" : "star-o"}
             color="#2E4058" 
             size={32} 
             style={{marginHorizontal: 8, marginTop: 50}} />
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