import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';
import Slideshow from 'react-native-slideshow';
import MapView from 'react-native-maps';
import FireBase from '../../FireBase';

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                elevation: 5,
                backgroundColor: '#ccc',
                width: 120,
                height: 250,
                margin: 10,
                marginEnd: 5,
                borderRadius: 10,
            }}>
                <Image
                    source={{uri: this.props.item.imageUrl}}
                    style={[{width: 120, height: 130, borderRadius: 10}]}
                />

                <Text style={styles.flatListItem}>{this.props.item.name}</Text>

                <View style={{flexDirection: 'row', marginStart: 8}}>
                    <Image
                        source={require('../images/star.png')}
                        style={[{width: 20, height: 20, marginEnd: 1}]}
                    />
                    <Image
                        source={require('../images/star.png')}
                        style={[{width: 20, height: 20, marginEnd: 1}]}
                    />
                    <Image
                        source={require('../images/star.png')}
                        style={[{width: 20, height: 20, marginEnd: 1}]}
                    />
                    <Image
                        source={require('../images/star.png')}
                        style={[{width: 20, height: 20, marginEnd: 1}]}
                    />
                    <Image
                        source={require('../images/star.png')}
                        style={[{width: 20, height: 20, marginEnd: 1}]}
                    />
                </View>

                <View style={{height: 2, backgroundColor: '#337f9d', marginTop: 5}}/>

                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                    <Text style={styles.flatListItem}>{this.props.item.khoa}</Text>
                </View>
            </View>
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


export default class InforScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Love Bus',
                    caption: 'Đồng hành, chăm sóc sức khỏe bà con Bình Phước',
                    url: require('../images/intropic1.jpg'),
                }, {
                    title: 'Hội thảo khoa học',
                    caption: 'Kĩ thuật điều trị sớm ung thư dạ dày',
                    url: require('../images/intropic2.jpg'),
                }, {
                    title: '10/2017',
                    caption: 'Lớp tiền sản "Mẹ đã sẵn sàng"',
                    url: require('../images/intropic3.jpg'),
                },
                {
                    title: 'Khoa cấp cứu',
                    caption: 'Cứu sống bệnh nhân nhồi máu cơ tim do biến chứng',
                    url: require('../images/intropic4.jpg'),
                },
                {
                    title: '12/12/2017',
                    caption: 'Đạt chứng nhận Six Sigma của Westgard VP',
                    url: require('../images/intropic5.jpg'),
                },
            ],
            region: {
                latitude: 10.8001459,
                longitude: 106.6142172,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            doctor: [],
            contact: {},
            info: {}
        };
    }

    componentWillMount() {
        var flatListData = [];
        FireBase.loadDoctors((doctor) => {
            flatListData.push(doctor);
            this.setState({
                doctor: flatListData
            })
        });

        FireBase.loadContact((contact) => {
            this.setState({
                contact: contact
            })
        });

        FireBase.loadInfo((info) => {
            this.setState({
                info: info
            })
        });

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
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
                <View style={{flex: 1}}>

                    <Slideshow
                        dataSource={this.state.dataSource}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({position})}/>

                    <Text
                        style={{
                            backgroundColor: '#ff3533',
                            color: 'white',
                            padding: 5,
                            borderRadius: 10,
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            elevation: 10,
                            width: 150,
                            paddingStart: 10,
                            fontWeight: 'bold',
                            marginTop: 6,
                            marginStart: 5,
                        }}>
                        Thông tin bệnh viện
                    </Text>
                    {/*start Thông tin chi tiết bệnh viện*/}
                    <View style={{flexDirection: 'row', flex: 1, margin: 5, marginTop: 0}}>


                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            backgroundColor: '#337f9d',
                            elevation: 5,
                            borderRadius: 5,
                            paddingEnd:43
                        }}>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/info.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{textAlign:'justify',color: '#ffffff'}}>{this.state.info.info}</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/focus.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>{this.state.info.khoa}</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/1608931-128.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>{this.state.info.thanhTich}</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_Time_Machine-01_72122.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>{this.state.info.lich}</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_Aiport_Utility-01_72104.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>{this.state.info.wifi}</Text>
                            </View>


                        </View>

                    </View>

                    <Text
                        style={{
                            backgroundColor: '#ff3533',
                            color: 'white',
                            padding: 5,
                            borderRadius: 10,
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            elevation: 10,
                            width: 150,
                            paddingStart: 20,
                            fontWeight: 'bold',
                            marginTop: 6,
                            marginStart: 5,
                        }}>
                        Bác sĩ nổi bật
                    </Text>
                    <FlatList
                        horizontal
                        data={this.state.doctor}
                        renderItem={({item, index}) => {
                            //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                            return (
                                <FlatListItem item={item} index={index}>

                                </FlatListItem>);
                        }}
                    >

                    </FlatList>

                    <Text
                        style={{
                            backgroundColor: '#ff3533',
                            color: 'white',
                            padding: 5,
                            borderRadius: 10,
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            elevation: 10,
                            width: 150,
                            paddingStart: 40,
                            fontWeight: 'bold',
                            marginTop: 6,
                            marginStart: 5,
                        }}>
                        Liên hệ
                    </Text>
                    <View style={{flexDirection: 'row', flex: 1, margin: 5, marginTop: 0}}>


                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            backgroundColor: '#337f9d',
                            elevation: 5,
                            borderRadius: 5,
                            paddingEnd:43
                        }}>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/map.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>{this.state.contact.address}</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_viber_328079.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>{this.state.contact.phone}</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/mail.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>{this.state.contact.mail}</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_Globe1_34224.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>{this.state.contact.web}</Text>
                            </View>

                        </View>

                    </View>

                    <Text
                        style={{
                            backgroundColor: '#ff3533',
                            color: 'white',
                            padding: 5,
                            borderRadius: 10,
                            borderBottomLeftRadius: 0,
                            borderTopLeftRadius: 0,
                            elevation: 10,
                            width: 150,
                            paddingStart: 40,
                            fontWeight: 'bold',
                            marginTop: 6,
                            marginStart: 5,
                        }}>
                        Chỉ đường
                    </Text>

                    <MapView
                        style={{flex: 1, height: 300}}
                        initialRegion={this.state.region}>

                        <MapView.Marker
                            coordinate={this.state.region}
                        />
                    </MapView>

                </View>

            </ScrollView>

        );

    }
}