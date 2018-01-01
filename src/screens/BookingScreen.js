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
    FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Calendar} from 'react-native-calendars';
import FireBase from '../FireBase';
import {GoogleSignin} from "react-native-google-signin";

export default class BookingScreen extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
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
        tabBarLabel: 'Booking',
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

    _onPressItem = (item) => {
        this.props.navigation.navigate('DetailBooking', {user: this.state.user, name: item.name});
    };

    render() {
        return (
            <View style={{flex: 1}}>
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
                        <Text style={styles.textStyle}>Danh sách bác sĩ khám</Text>
                        <Image source={require('./images/search.png')} style={styles.iconStyle}/>
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
    }
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