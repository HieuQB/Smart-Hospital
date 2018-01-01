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
    Alert
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Calendar} from 'react-native-calendars';
import FireBase from '../FireBase';

export default class DetailBookingScreen extends Component {
    formatMonth(number) {
        if (number < 10)
            return '0' + number;
        else
            return '' + number;
    }

    formatDay(number) {
        if (number < 10)
            return '0' + number;
        else
            return '' + number;
    }

    formatDate(date) {
        return date.getFullYear() + '-' + this.formatMonth(date.getMonth() + 1) + '-' + this.formatDay(date.getDate());
    }

    constructor() {
        super()
        this.formatMonth = this.formatMonth.bind(this);
        this.formatDay = this.formatDay.bind(this);
        this.formatDate = this.formatDate.bind(this);
        var now = new Date();
        var a1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        var a2 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2);
        var a3 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);
        var a4 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 4);
        var a5 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5);
        var a6 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6);

        this.state = {
            data: [],
            date: this.formatDate(now),
            isUpdate: [
                {
                    check: false,
                    date: this.formatDate(now)
                },
                {
                    check: false,
                    date: this.formatDate(a1)
                },
                {
                    check: false,
                    date: this.formatDate(a2)
                },
                {
                    check: false,
                    date: this.formatDate(a3)
                },
                {
                    check: false,
                    date: this.formatDate(a4)
                },
                {
                    check: false,
                    date: this.formatDate(a5)
                },
                {
                    check: false,
                    date: this.formatDate(a6)
                }
            ],
            maxDate: a6,
            list: [],
            key: {}
        }
    }

    componentWillMount() {
        var list = [];
        for (var i = 0; i < this.state.isUpdate.length; i++) {
            FireBase.updateCalendar((update) => {
                if (update.check) {
                    list.push(update);
                    this.setState({
                        list: list
                    })
                }
            }, this.props.navigation.state.params.name, this.state.isUpdate[i].date, this.state.isUpdate[i]);
        }
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
            Alert.alert(
                'Thông báo',
                'Bạn có thật sự muốn đặt lịch khám vào ' + item.time,
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => {
                            var data = this.state.data;
                            for (var i = 0; i < data.length; i++) {
                                if (data[i].time == item.time) {
                                    data[i].name = this.props.navigation.state.params.user.name;
                                }
                            }
                            this.setState({
                                data: data,
                            });
                            FireBase.updateItemCalendar(this.state.data, this.state.key);
                        }},
                ],
                { cancelable: false }
            )
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
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Image source={require('./images/menu.png')} style={styles.iconStyle}/>
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>Đặt lịch khám</Text>
                        <Image source={require('./images/search.png')} style={styles.iconStyle}/>
                    </View>
                </View>

                <Calendar style={{flex: 0.65}}
                          minDate={new Date()}
                          maxDate={this.state.maxDate}
                          // markedDates={{
                          //     '2012-05-16': {selected: true},
                          // }}
                          onDayPress={(day) => {
                              var a = true;
                              for (var i = 0; i < this.state.list.length; i++) {
                                  if (day.dateString == this.state.list[i].date) {
                                      a = false;
                                  }
                              }

                              if (a == true) {
                                  FireBase.addCalendar([{
                                      name: this.props.navigation.state.params.name,
                                      date: day.dateString,
                                      data: [
                                          {key: 'a', time: '08:00', name: ''},
                                          {key: 'b', time: '08:30', name: ''},
                                          {key: 'c', time: '09:00', name: ''},
                                          {key: 'd', time: '09:30', name: ''},
                                          {key: 'e', time: '10:00', name: ''},
                                          {key: 'f', time: '10:30', name: ''},
                                          {key: 'g', time: '11:00', name: ''},
                                          {key: 'h', time: '11:30', name: ''},
                                          {key: 'i', time: '13:30', name: ''},
                                          {key: 'j', time: '14:00', name: ''},
                                          {key: 'k', time: '14:30', name: ''},
                                          {key: 'l', time: '15:00', name: ''},
                                          {key: 'm', time: '15:30', name: ''},
                                          {key: 'n', time: '16:00', name: ''},
                                          {key: 'o', time: '16:30', name: ''},
                                          {key: 'p', time: '17:00', name: ''},]
                                  }]);
                                  var list = this.state.list;
                                  list.push([{
                                      date: day.dateString,
                                  }]);
                                  this.setState({
                                      list: list
                                  })
                              }

                              FireBase.loadCalendar((calendar) => {
                                  this.setState({
                                      data: calendar.data,
                                      key: calendar
                                  })
                              }, this.props.navigation.state.params.name, day.dateString);
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