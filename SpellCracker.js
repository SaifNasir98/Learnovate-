import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, TextInput, ScrollView, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ConfettiCannon from 'react-native-confetti-cannon';

export default class SpellCracker extends Component {

    constructor() {
        super();
        this.state = {
            shoot: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ shoot: true });
        }, 2000);
    }

    _handlePress() {
        this.setState({ shoot: false });
        setTimeout(() => {
            this.setState({ shoot: true });
        }, 2000);
    }

    render() {

        var {navigate} = this.props.navigation;
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;

        return(
            <ScrollView horizontal={true} pagingEnabled={true}>
            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>A</Text>
                </View>
                <Image style={styles.img1} onPress={() => this._handlePress()} source={require('F:/React Codes/ExpoCheckApp/assets/apple.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="A">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="P">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="E">
                    </TextInput>
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

                {this.state.shoot ? (
                    <ConfettiCannon count={200} explosionSpeed={350} origin={{ x: -10, y: 10 }} />
                ) : null}
            </View>

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>B</Text>
                </View>
                <Image style={styles.img1} onPress={() => this._handlePress()} source={require('F:/React Codes/ExpoCheckApp/assets/banana.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="B">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="N">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="A">
                    </TextInput>
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

                {this.state.shoot ? (
                    <ConfettiCannon count={200} explosionSpeed={350} origin={{ x: -10, y: 10 }} />
                ) : null}
            </View>

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>C</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/cat.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="A">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>D</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/dog.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="G">
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>E</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/egg.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="E">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>F</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/fan.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="A">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>G</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/grass.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="G">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="S">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>H</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/hockey.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="O">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="E">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>I</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/icecream.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="I">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="C">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="E">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>J</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/jungle.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="J">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="N">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>K</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/kite.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="I">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>L</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/lemonade.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="E">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="O">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="D">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>M</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/money.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="O">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="Y">
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>N</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/notebook.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="N">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="E">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="O">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>O</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/owl.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="L">
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>P</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/paint.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="A">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="T">
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>Q</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/quilt.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="Q">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="I">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>R</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/robot.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="O">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="T">
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>S</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/stamp.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="T">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="M">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>T</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/television.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="T">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="E">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="S">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="O">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>U</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/ultrasound.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="L">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="A">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="O">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="D">
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>V</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/van.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="A">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>X</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/xylophone.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="X">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="L">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="P">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="O">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>Y</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/yam.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="Y">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
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

            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3A8498',
                    width: screenWidth
            }}>
                <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -150
                    }}>
                        <Text style={{
                            fontSize: 70,
                            fontWeight: "200",
                            color: '#3A8498'
                        }}>Z</Text>
                </View>
                <Image style={styles.img1} source={require('F:/React Codes/ExpoCheckApp/assets/zebra.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="E">
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }}>
                    </TextInput>
                    <TextInput style= {{
                            width: 34,
                            height: 40,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderColor: 'white',
                            borderBottomWidth: 1,
                            fontWeight: "100",
                            fontSize: 35,
                            marginRight: 7,
                            color: 'white'
                        }} value="A">
                    </TextInput>
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

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    img1: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginBottom: -300,
        marginTop: 150
    }
});