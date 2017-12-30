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
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import FireBase from '../FireBase';
import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            data: []
        }
    }

    componentWillMount() {
        var flatListData = [];
        FireBase.loadDoctors((doctor) => {
            flatListData.push(doctor);
            this.setState({
                data: flatListData
            })
        });
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
                        <Text style={styles.textStyle}>Chat với bác sĩ</Text>
                        <Image source={require('./images/search.png')} style={styles.iconStyle}/>
                    </View>
                </View>

                {/*<GiftedChat*/}
                {/*messages={this.state.messages}*/}
                {/*onSend={(messages) => {*/}
                {/*FireBase.sendMessage(messages);*/}
                {/*}}*/}
                {/*user={{*/}
                {/*_id: this.props.navigation.state.params.user.id,*/}
                {/*name: this.props.navigation.state.params.user.email,*/}
                {/*avatar: this.props.navigation.state.params.user.photo*/}
                {/*}}/>*/}

                <FlatList
                    data={this.state.data}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem onPressItem={this._onPressItem} item={item} index={index}>

                            </FlatListItem>);
                    }}
                >
                </FlatList>

            </View>
        );
    }

    _onPressItem = (item) => {
        alert("sdfdsf");
        this.props.navigation.navigate('DetailChat');
    };

    componentDidMount() {
        FireBase.loadMessages((message) => {
            if (message.user.name == 'PGS TS Nguyễn Minh Hiếu' || message.user.name == this.props.navigation.state.params.user.email)
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

class FlatListItem extends Component {
    _onPress = () => {
        this.props.onPressItem(this.props.item);
    };

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.containerItem}>
                    <Image
                        source={{uri: this.props.item.imageUrl}}
                        style={styles.imageItem}
                    />
                    <Text style={styles.textItem}>{this.props.item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}