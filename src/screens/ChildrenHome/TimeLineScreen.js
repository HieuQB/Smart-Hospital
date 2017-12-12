import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import Timeline from 'react-native-timeline-listview'

export default class TimeLineScreen extends Component{

    constructor(){
        super()
        this.data = [
            {time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', circleColor: '#009688',lineColor:'#009688'},
            {time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.'},
            {time: '12:00', title: 'Lunch', description: 'Ăn trưa thôi',lineColor:'#009688'},
            {time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ',lineColor:'#009688'},
            {time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', circleColor: '#009688'}
        ]
    }

    render() {
        //'rgb(45,156,219)'
        return (
            <View style={styles.container}>
                <Timeline
                    style={styles.list}
                    data={this.data}
                    circleSize={20}
                    separator={false}
                    columnFormat='two-column'
                    circleColor='rgb(45,156,219)'
                    timeContainerStyle={{minWidth:52, marginTop: -5}}
                    timeStyle={{textAlign: 'center', backgroundColor:'#FF6600', color:'white', padding:5, borderRadius:13}}
                    descriptionStyle={{color:'gray'}}
                    detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10}}
                    options={{
                        style:{paddingTop:5}
                    }}
                    innerCircle={'dot'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor:'white'
    },
    list: {
        flex: 1,
    },
});