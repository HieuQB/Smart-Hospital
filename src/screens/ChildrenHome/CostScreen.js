import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    SectionList,
    Image,
} from 'react-native';
import FireBase from '../../FireBase';

class SectionListItem extends Component {
    render() {

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#ffffff'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: '#ffffff',
                }}>
                <Text style={{
                    fontSize: 16,
                    color: '#000000',
                    margin :15,
                    marginRight : 2,
                    width: 230,
                }}>{this.props.item.name}
                </Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight:'bold',
                    color: '#ff3533',
                    marginTop : 15,
                }}>{this.props.item.cost}
                </Text>
                </View>
                <View style={{backgroundColor: '#1d1d1d', height: 1, }}/>
            </View>
        );
    }
}
class SectionHeader extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#337f9d',
                flexDirection:'row',
            }}>
                <Image
                    source={require('../images/thuoc.png')}
                    style={[{ width: 25, height: 25, marginTop:12, marginLeft: 12}]}
                />

                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 15,
                    marginLeft: 5,
                }}>{this.props.section.title}
                </Text>
            </View>
        );
    }
}

export default class CostScreen extends Component{
    constructor() {
        super();

        this.state = {
            list: []
        }
    }

    componentWillMount() {
        var sectionListItem = [];
        FireBase.loadCost((cost) => {
            sectionListItem.push(cost);
            this.setState({
                list: sectionListItem
            })
        });
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <SectionList
                    renderItem={({ item, index }) => {
                        return (<SectionListItem item={item} index={index} >

                        </SectionListItem>);
                    }}
                    renderSectionHeader={({ section }) => {
                        return (<SectionHeader section={section} />);
                    }}
                    sections={this.state.list}
                    keyExtractor={(item, index) => item.name}
                    stickySectionHeadersEnabled ="true"
                >

                </SectionList>
            </View>
        );
    }
}