import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import Slideshow from 'react-native-slideshow';

export default class InforScreen extends Component{

    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Title 1',
                    caption: 'Caption 1',
                    url: require('../images/1.jpg'),
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: require('../images/2.jpg'),
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: require('../images/3.jpg'),
                },
            ],
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 4000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return <View
            style={{
                flex: 1,
            }}
        >

            <Slideshow
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })} />


        </View>
    }
}