import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export default class CostScreen extends Component{
    render() {
        return <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            <Text style={{fontSize:30, color:'green'}}>
                Bảng giá bệnh viện
            </Text>

        </View>
    }
}