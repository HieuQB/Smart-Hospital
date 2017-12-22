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
                backgroundColor: '#2eb52f',
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
    render() {


        var sectionListData = [
            {
                data: [
                    {
                        name: 'Django is a high-level Python Web framework',
                        cost: '50.000 VNĐ'
                    },
                    {
                        name: 'Express is a fast, unopinionated, flexible and minimalist web framework for Node.js',
                        cost: '100.000 VNĐ'
                    },
                    {
                        name: 'Rails (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.',
                        cost: '1.500.500 VNĐ'
                    },
                    {
                        name: 'Django is a high-level Python Web framework',
                        cost: '50.000 VNĐ'
                    },
                    {
                        name: 'Express is a fast, unopinionated, flexible and minimalist web framework for Node.js',
                        cost: '100.000 VNĐ'
                    },
                    {
                        name: 'Rails (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.',
                        cost: '1.500.500 VNĐ'
                    },
                    {
                        name: 'Django is a high-level Python Web framework',
                        cost: '50.000 VNĐ'
                    },
                    {
                        name: 'Express is a fast, unopinionated, flexible and minimalist web framework for Node.js',
                        cost: '100.000 VNĐ'
                    },
                    {
                        name: 'Rails (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.',
                        cost: '1.500.500 VNĐ'
                    },
                ],
                title: "Server side"
            },
            {
                data: [
                    {
                        name: 'Django is a high-level Python Web framework',
                        cost: '50.000 VNĐ'
                    },
                    {
                        name: 'Express is a fast, unopinionated, flexible and minimalist web framework for Node.js',
                        cost: '100.000 VNĐ'
                    },
                    {
                        name: 'Rails (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.',
                        cost: '1.500.500 VNĐ'
                    },
                    {
                        name: 'Django is a high-level Python Web framework',
                        cost: '50.000 VNĐ'
                    },
                    {
                        name: 'Express is a fast, unopinionated, flexible and minimalist web framework for Node.js',
                        cost: '100.000 VNĐ'
                    },
                    {
                        name: 'Rails (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.',
                        cost: '1.500.500 VNĐ'
                    },
                    {
                        name: 'Django is a high-level Python Web framework',
                        cost: '50.000 VNĐ'
                    },
                    {
                        name: 'Express is a fast, unopinionated, flexible and minimalist web framework for Node.js',
                        cost: '100.000 VNĐ'
                    },
                    {
                        name: 'Rails (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.',
                        cost: '1.500.500 VNĐ'
                    },

                ],
                title: "Client side"
            },
            {
                data: [
                    {
                        name: 'Django is a high-level Python Web framework',
                        cost: '50.000 VNĐ'
                    },
                    {
                        name: 'Express is a fast, unopinionated, flexible and minimalist web framework for Node.js',
                        cost: '100.000 VNĐ'
                    },
                    {
                        name: 'Rails (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.',
                        cost: '1.500.500 VNĐ'
                    },
                    {
                        name: 'Django is a high-level Python Web framework',
                        cost: '50.000 VNĐ'
                    },
                    {
                        name: 'Express is a fast, unopinionated, flexible and minimalist web framework for Node.js',
                        cost: '100.000 VNĐ'
                    },
                    {
                        name: 'Rails (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.',
                        cost: '1.500.500 VNĐ'
                    },
                    {
                        name: 'Django is a high-level Python Web framework',
                        cost: '50.000 VNĐ'
                    },
                    {
                        name: 'Express is a fast, unopinionated, flexible and minimalist web framework for Node.js',
                        cost: '100.000 VNĐ'
                    },
                    {
                        name: 'Rails (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.',
                        cost: '1.500.500 VNĐ'
                    },
                ],
                title: "Artificial Intelligence"
            },
        ];


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
                    sections={sectionListData}
                    keyExtractor={(item, index) => item.name}
                    stickySectionHeadersEnabled ="true"
                >

                </SectionList>
            </View>
        );
    }
}