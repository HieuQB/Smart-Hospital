import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    TextInput,
    StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import FireBase from '../FireBase';
import {
    GiftedChat
} from 'react-native-gifted-chat';

export default class ChatScreen extends Component {
    state = {
        messages: []
    };
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://lh5.googleusercontent.com/-moc10QUwUec/AAAAAAAAAAI/AAAAAAAAAN8/At-yv83KVJY/photo.jpg',
                    },
                },
            ],
        });
    }
    static navigationOptions = {
        tabBarLabel: 'Chat',
        drawerIcon: ({ tintColor }) => {
            return (
                <MaterialIcons
                    name="pets"
                    size={24}
                    style={{ color: tintColor }}>

                </MaterialIcons>
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <StatusBar
                    backgroundColor="#337f9d"
                    barStyle="light-content"
                />
                <View style={styles.wrapper}>
                    <View style={styles.row1}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Image source={require('./images/menu.png')} style={styles.iconStyle} />
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>Chat với bác sĩ</Text>
                        <Image source={require('./images/search.png')} style={styles.iconStyle} />
                    </View>
                </View>

                <GiftedChat
                    messages={this.state.messages}
                    onSend={(messages) => {
                        FireBase.sendMessage(messages);
                    }}
                    user={{
                        _id: FireBase.getUid(),
                        name: this.props.name,
                        avatar: this.props.avatar,
                    }} />

            </View>
        );
    }
    componentDidMount() {
        FireBase.loadMessages((message) => {
            this.setState((previousState) => {
                return {
                    messages: GiftedChat.append(previousState.messages, message),
                };
            });
        });
    }

    componentWillUnmount() {
        FireBase.closeChat();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    navBar: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    wrapper: {
        height: 50,
        backgroundColor: '#337f9d',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 18,
        fontWeight: 'bold',
        // fontStyle: 'italic',
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
})