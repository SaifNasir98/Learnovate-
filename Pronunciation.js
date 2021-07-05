import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Pronunciation extends Component {

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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>A</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>B</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>C</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>D</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>E</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>F</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>G</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>H</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>I</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>J</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>K</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>L</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>M</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>N</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>O</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>P</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>Q</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>R</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>S</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>T</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>U</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>V</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>W</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>X</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>Y</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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
                        width: 300,
                        height: 300,
                        borderRadius: "300/2",
                        backgroundColor: 'lightgrey',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 200,
                            fontWeight: "100",
                            color: '#3A8498'
                        }}>Z</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "300",
                        marginTop: 40,
                        color: 'white'
                    }}>Touch The Alphabets For Sound</Text>
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