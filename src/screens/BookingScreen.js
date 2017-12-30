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
import { Calendar } from 'react-native-calendars';
import FireBase from '../FireBase';

export default class BookingScreen extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            date: ''
        }

        const data = [{
            name: 'PGS TS Nguyễn Minh Hiếu',
            date: '2017-12-30',
            data:[
                {key: 'a', time: '08:00', name: 'Hoàng Kim Tuấn'},
                {key: 'b', time: '08:30', name: ''},
                {key: 'c', time: '09:00', name: 'Nguyễn Minh Hiếu'},
                {key: 'd', time: '09:30', name: ''},
                {key: 'e', time: '10:00', name: 'Nguyễn Minh Hiếu'},
                {key: 'f', time: '10:30', name: 'Nguyễn Minh Hiếu'},
                {key: 'g', time: '11:00', name: 'Nguyễn Minh Hiếu'},
                {key: 'h', time: '11:30', name: 'Nguyễn Minh Hiếu'},
                {key: 'i', time: '13:30', name: 'Nguyễn Minh Hiếu'},
                {key: 'j', time: '14:00', name: ''},
                {key: 'k', time: '14:30', name: 'Nguyễn Minh Hiếu'},
                {key: 'l', time: '15:00', name: 'Nguyễn Minh Hiếu'},
                {key: 'm', time: '15:30', name: 'Nguyễn Minh Hiếu'},
                {key: 'n', time: '16:00', name: 'Nguyễn Minh Hiếu'},
                {key: 'o', time: '16:30', name: 'Nguyễn Minh Hiếu'},
                {key: 'p', time: '17:00', name: 'Nguyễn Minh Hiếu'},]
        }];
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
        if (item.name != '') {
            alert("Đã có người đặt lịch trong thời gian này. \nVui lòng chọn thời gian khác");
        }
        else {

        }
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
                            onPress={()=> this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Image source={require('./images/menu.png')} style={styles.iconStyle} />
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>Đặt lịch khám</Text>
                        <Image source={require('./images/search.png')} style={styles.iconStyle} />
                    </View>
                </View>

                <Calendar style={{flex: 0.65}}
                    minDate={new Date()}
                    onDayPress={(day) => {
                        console.log('selected day', day.dateString);
                        FireBase.loadCalendar((calendar) => {
                            this.setState({
                                data: calendar.data
                            })
                        }, 'PGS TS Nguyễn Minh Hiếu', day.dateString);
                    }}
                />

                <View style={{flex: 0.35, backgroundColor: '#fff', marginTop: 10}}>
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

            </View>
        );
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
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#f00'}}>
                        {this.props.item.time}-
                    </Text>
                    <Text>
                        {this.props.item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}