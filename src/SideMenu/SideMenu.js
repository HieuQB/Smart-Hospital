/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const colorBorderMenu = 'rgba(255,255,255,0.3)';
const noneBorderMenu = 'rgba(255,255,255,0)';

class SideMenu extends Component {

    navigateToScreen = (route) => () => {
                const navigateAction = NavigationActions.navigate({
                    routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.setState({
            colorHome: noneBorderMenu,
            colorChat: noneBorderMenu,
            colorBooking: noneBorderMenu,
            colorAuthor: noneBorderMenu,
            colorLogin : noneBorderMenu,
        });
        if (route === 'Home' || route === 'EditProfile') {
            this.setState({
                colorHome: colorBorderMenu,
            });
        } else if (route === 'Chat') {
            this.setState({
                colorChat: colorBorderMenu,
            });
        } else if (route === 'Booking') {
            this.setState({
                colorBooking: colorBorderMenu,
            });
        } else if (route === 'Author') {
            this.setState({
                colorAuthor: colorBorderMenu,
            });
        } else if (route === 'Login') {
            this.setState({
                colorLogin: colorBorderMenu,
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            colorHome: colorBorderMenu,
            colorChat: noneBorderMenu,
            colorBooking: noneBorderMenu,
            colorAuthor: noneBorderMenu,
            colorLogin: noneBorderMenu
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.sideMenu, this.props.style || {}]}>

                    <View style={{paddingHorizontal: 30}}>
                        {this._renderHeader()}

                        <TouchableOpacity
                            onPress={this.navigateToScreen('Home')}
                            style={[
                                styles.menu,
                                {backgroundColor: this.state.colorHome, borderRadius: 5}]}>
                            {/*<Icon name='home' color={colors.txtWhite} size={24}/>*/}
                            <Image
                                source={require('../screens/images/menu_home.png')}
                                style={[{ width: 25, height: 25 }]}
                            />
                            <Text style={styles.menuText}>Trang Chủ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.menu, {backgroundColor: this.state.colorChat, borderRadius: 5}]}
                            onPress={this.navigateToScreen('Chat')}>
                            <Image
                                source={require('../screens/images/menu_chat.png')}
                                style={[{ width: 27, height: 27 }]}
                            />
                            <Text style={styles.menuText}>Chat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.navigateToScreen('Booking')}
                                          style={[styles.menu, {
                                              backgroundColor: this.state.colorBooking,
                                              borderRadius: 5
                                          }]}>
                            <Image
                                source={require('../screens/images/menu_booking.png')}
                                style={[{ width: 27, height: 27 }]}
                            />
                            <Text style={styles.menuText}>Đặt lịch khám</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.navigateToScreen('Author')}
                                          style={[styles.menu, {
                                              backgroundColor: this.state.colorAuthor,
                                              borderRadius: 5
                                          }]}>
                            <Image
                                source={require('../screens/images/menu_about.png')}
                                style={[{ width: 27, height: 27 }]}
                            />
                            <Text style={styles.menuText}>About Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.navigateToScreen('Login')}
                                          style={[styles.menu, {
                                              backgroundColor: this.state.colorLogin,
                                              borderRadius: 5
                                          }]}>
                            <Image
                                source={require('../screens/images/menu_about.png')}
                                style={[{ width: 27, height: 27 }]}
                            />
                            <Text style={styles.menuText}>Đăng Nhập</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }

    _renderHeader() {
        return (
            <View style={styles.header}>
                <View style={styles.userInfosHolder}>
                    <Image style={styles.avatar}
                           source={require('../screens/images/1.jpg')}/>
                    <View style={styles.userInfos}>
                        <Text onPress={this.navigateToScreen('EditProfile')} style={styles.username}>Hiếu Minh</Text>
                        <Text onPress={this.navigateToScreen('EditProfile')} style={{color: colors.txtWhite}}>View and edit profile</Text>
                    </View>

                </View>
            </View>
        )
    }

}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

const colors = {
    txtMain: '#214559',
    txtMainRed: '#FE6165',
    txtDescription: '#757575',
    txtDark: '#214559',
    txtWhite: '#ffffff',

    bgMain: '#214559',
    bgMainDark: '#214559', // For screens > auth
    bgMainRed: '#FE6165',
    bgWhite: '#ffffff',
    bgError: '#fb642d',
    bgChat: '#f1f1f1',
    bgSuccess: '#25ce66',

    bdMain: '#214559',
    bdMainRed: '#FE6165',
    bdWhite: '#ffffff',
    bdLine: '#dddddd',
    bdInput: '#cbcbcb'
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: colors.bgMain,
    },
    sideMenu: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 300,
        backgroundColor: 'transparent'
    },
    sideMenuTitle: {
        marginLeft: 20,
        marginBottom: 30
    },
    menu: {
        marginBottom:7,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    menuText: {
        marginLeft: 20,
        color: colors.txtWhite
    },
    header: {
        marginTop: 20,
        marginBottom: 20
    },
    userInfosHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    userInfos: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.txtWhite
    }
})

export default SideMenu;
