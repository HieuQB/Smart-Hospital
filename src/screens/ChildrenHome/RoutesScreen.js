
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
} from 'react-native';
import { TabNavigator,StackNavigator } from "react-navigation";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CostScreen from './CostScreen';
import InforScreen from './InforScreen';
import QuestionsScreen from './QuestionsScreen';
import TimeLineScreen from './TimeLineScreen';
import DetailQuestionScreen from './DetailQuestionScreen';

const Question = StackNavigator({
    ListQuestion: {
        screen: QuestionsScreen,
        navigationOptions: () => ({
        path: '/',
            header:null,
        }),
    },
    DetailQuestion: {
        screen: DetailQuestionScreen,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.user.title}`,
        }),
    },
});

const HomeTabs = TabNavigator(
    {
        Info: {
            screen: InforScreen,
            path: 'info',
            navigationOptions: {
                tabBarLabel: 'Trang Chủ',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/if_architecture-interior-07_809091.png')}
                        style={[{ width: 15, height: 15 }, { tintColor: tintColor }]}
                    />
                ),
            },
        },

        Question: {
            screen: Question,
            path: 'question',
            navigationOptions: {
                tabBarLabel: 'Hỏi-Đáp',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/answer.png')}
                        style={[{ width: 15, height: 15 }, { tintColor: tintColor }]}
                    />
                ),
            },
        },
        Cost: {
            screen: CostScreen,
            path: 'cost',
            navigationOptions: {
                tabBarLabel: 'Bảng Giá',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/if_money_bag_309025.png')}
                        style={[{ width: 15, height: 15 }, { tintColor: tintColor }]}
                    />
                ),
            },
        },
        TimeLine: {
            screen: TimeLineScreen,
            path: 'timeline',
            navigationOptions: {
                tabBarLabel: 'TimeLine',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../images/if_106_111041.png')}
                        style={[{ width: 15, height: 15 }, { tintColor: tintColor }]}
                    />
                ),
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                backgroundColor: "white",
                padding: 1
            },
            inactiveTintColor: '#214559',
            activeTintColor: '#FF6600',
            labelStyle: {
                fontSize: 10 ,
                fontWeight: 'bold',
            },
            tabStyle: {
                height: 50,
            },
            showIcon: true,
            iconStyle: {
                width: 15,
                height: 15
            },
            upperCaseLabel: false
        }
    });

export default HomeTabs;