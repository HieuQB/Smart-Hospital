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
import DetailQuestionScreen from "./src/screens/ChildrenHome/DetailQuestionScreen";
import QuestionsScreen from "./src/screens/ChildrenHome/QuestionsScreen";

// export const ChatStack = StackNavigator({
//     ListChat: {
//         screen: ChatScreen,
//         navigationOptions: () => ({
//             path: '/',
//             header:null,
//         }),
//     },
//     DetailChat: {
//         screen: AuthorScreen,
//         navigationOptions: ({ navigation }) => ({
//             title: "dsdf",
//         }),
//     },
// });


const DrawerMenu = DrawerNavigator(
    {
        Home : {
            path: '/',
            screen: HomeScreen,
        },
        Chat :{
          path: '/',
            screen: ChatScreen,
        },
        Booking : {
            path: '/',
            screen: BookingScreen,
        },
        EditProfile :{
            path: '/sent',
            screen: EditProfileScreen,
        },
        Author :{
            path: '/sent',
            screen: AuthorScreen,
        },
        Login :{
            path: '/sent',
            screen: LoginScreen,
        },
    },
    {
        contentComponent: SideMenu,
        drawerPosition : 'left',
        contentOptions:{
            activeTintColor: 'red',
        }
    }
);

export default DrawerMenu;