/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import SideMenu from './src/SideMenu/SideMenu.js';
import BookingScreen from './src/screens/BookingScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import AuthorScreen from './src/screens/AuthorScreen';
import LoginScreen from './src/screens/LoginScreen';
import DetailChatScreen from './src/screens/DetailChatScreen';
import DetailBookingScreen from './src/screens/DetailBookingScreen';

const ChatStack = StackNavigator({
        ListChat: {
            screen: ChatScreen,
            navigationOptions: () => ({
                path: '/',
                header: null,
            }),
        },
        DetailChat: {
            screen: DetailChatScreen,
            navigationOptions: () => ({
                header: null,
            }),
        },
    }
    , {
        stateName: 'ListChat', // If you don't give it a name it will just use the value of initialRouteName
        initialRouteName: 'ListChat',
    }
);

const BookingStack = StackNavigator({
        ListBooking: {
            screen: BookingScreen,
            navigationOptions: () => ({
                path: '/',
                header: null,
            }),
        },
        DetailBooking: {
            screen: DetailBookingScreen,
            navigationOptions: () => ({
                header: null,
            }),
        },
    }
    , {
        stateName: 'ListBooking', // If you don't give it a name it will just use the value of initialRouteName
        initialRouteName: 'ListBooking',
    }
);

const DrawerMenu = DrawerNavigator(
    {
        Home: {
            path: '/',
            screen: HomeScreen,
        },
        Chat: {
            path: '/',
            screen: ChatStack,
        },
        Booking: {
            path: '/',
            screen: BookingStack,
        },
        EditProfile: {
            path: '/sent',
            screen: EditProfileScreen,
        },
        Author: {
            path: '/sent',
            screen: AuthorScreen,
        },
        Login: {
            path: '/sent',
            screen: LoginScreen,
        },
    },
    {
        contentComponent: SideMenu,
        drawerPosition: 'left',
        contentOptions: {
            activeTintColor: 'red',
        }
    }
);

export default DrawerMenu;