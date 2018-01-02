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
            data: []
        }
        GoogleSignin.currentUserAsync().then((user) => {
            this.setState({user: user});
        }).done();
    }

    componentWillMount() {
        var flatListData = [];
        FireBase.loadDoctors((doctor) => {
            flatListData.push(doctor);
            this.setState({
                data: flatListData
            })
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
                        <Text style={styles.textStyle}>Danh sách bác sĩ</Text>
                        <Image source={require('./images/search.png')} style={styles.iconHidden}/>
                    </View>
                </View>

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
        this.props.navigation.navigate('DetailChat', {user: this.state.user, name: item.name});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    containerItem: {
        marginBottom: 6,
        backgroundColor: '#f5f5f0',
        borderWidth: 1,
        borderColor: '#1db5e2',
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row',
        elevation: 5
    },
    textItem: {
        fontSize: 20,
        color: '#000'
    },
    imageItem: {
        width: 50,
        height: 50,
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
    iconHidden: {
        width: 0,
        height: 0,
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
                    <View>
                        <Text style={styles.textItem}>{this.props.item.khoa}</Text>
                        <Text style={styles.textItem}>{this.props.item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}