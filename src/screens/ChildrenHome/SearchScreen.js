import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export default class PictureScreen extends Component{
    render() {
        return <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            <Text style={{fontSize:30, color:'green'}}>
                Hình ảnh bệnh viện
            </Text>

        </View>
    }
}