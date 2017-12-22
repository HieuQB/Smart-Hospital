import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView,
} from 'react-native';

export default class DetailQuestionScreen extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor: '#f0efff'}}>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    elevation: 5,

                }}>
                    <View style={{flexDirection: 'row', margin: 6}}>
                        <Image style={{
                            width: 35,
                            height: 35,
                            borderRadius: 35
                        }}
                               source={require('../images/icon_user.png')}
                        />

                        <View style={{marginStart: 10}}>
                            <Text
                                style={{color: '#383838',marginTop:10, fontWeight:'bold'}}>{this.props.navigation.state.params.user.userName} - {this.props.navigation.state.params.user.userAge} tuổi</Text>
                        </View>

                    </View>

                    <Text style={{
                        backgroundColor: '#e3e3e3',
                        color: '#383838',
                        borderRadius: 7,
                        padding: 5,
                        marginStart: 40,
                        marginEnd: 5
                    }}>{this.props.navigation.state.params.user.userQuestion}</Text>
                    <Text style={{color:'#9e9e9e', marginTop:2, marginStart:40}}>{this.props.navigation.state.params.user.userTime} ngày trước</Text>

                    <View style={{flexDirection: 'row', margin: 6, alignItems: 'flex-end', justifyContent: 'flex-end'}}>

                        <View style={{marginStart: 10}}>
                            <Text style={{color: '#383838',fontWeight:'bold'}}>BS {this.props.navigation.state.params.user.doctorName}</Text>
                        </View>

                        <Image style={{
                            width: 35,
                            height: 35,
                            borderRadius: 35
                        }}
                               source={require('../images/icon_doctor.png')}
                        />

                    </View>

                    <Text style={{
                        backgroundColor: '#379ebd',
                        color: '#ffffff',
                        borderRadius: 7,
                        padding: 5,
                        marginStart: 5,
                        marginEnd: 35
                    }}>{this.props.navigation.state.params.user.doctorAnswer}</Text>
                    <Text style={{color:'#9e9e9e', marginTop:2,marginStart:5}}>{this.props.navigation.state.params.user.doctorTime} ngày trước</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        height: 45,
        color: 'black',
        padding: 10,
        paddingBottom: 5,
        paddingEnd: 5,
        paddingTop: 5,
        fontSize: 14,
        alignItems: 'center',
    }
});
