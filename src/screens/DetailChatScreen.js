import React, {Component} from 'react';
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
    FlatList
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FireBase from '../FireBase';
import {GiftedChat} from 'react-native-gifted-chat';

export default class DetailChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

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
        drawerIcon: ({tintColor}) => {
            return (
                <MaterialIcons
                    name="pets"
                    size={24}
                    style={{color: tintColor}}>

                </MaterialIcons>
            );
        }
    }

    render() {
        return (
            <View style={{flex: 1,}}>
                <StatusBar
                    backgroundColor="#3369c3"
                    barStyle="light-content"
                />
                <View style={styles.wrapper}>
                    <View style={styles.row1}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Image source={require('./images/menu.png')} style={styles.iconStyle}/>
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>{this.props.navigation.state.params.name}</Text>
                        <Image source={require('./images/search.png')} style={styles.iconStyle}/>
                    </View>
                </View>

                <GiftedChat
                    messages={this.state.messages}
                    onSend={(messages) => {
                        FireBase.sendMessage(messages, this.props.navigation.state.params.name);
                    }}
                    user={{
                        _id: this.props.navigation.state.params.user.id,
                        name: this.props.navigation.state.params.user.email,
                        avatar: this.props.navigation.state.params.user.photo
                    }}/>

            </View>
        );
    }

    componentDidMount() {
        FireBase.loadMessages((message) => {
            if (message.key == this.props.navigation.state.params.user.email + '-' + this.props.navigation.state.params.name)
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
    containerItem: {
        marginBottom: 3,
        backgroundColor: '#f5f5f0',
        borderWidth: 2,
        borderColor: '#e0e0d1',
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row'
    },
    textItem: {
        fontSize: 20
    },
    imageItem: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    navBar: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    wrapper: {
        height: 50,
        backgroundColor: '#4185f2',
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