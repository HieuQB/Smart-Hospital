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

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                elevation:5,
                backgroundColor:'#ccc',
                width:100,
                height:170,
                margin:10,
                marginEnd:5,
                borderRadius:10,
            }}>
                <Image
                    source={{uri: this.props.item.imageUrl}}
                    style={[{ width: 100, height: 100 ,borderRadius:10}]}
                />
                <Text style={styles.flatListItem}>{this.props.item.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
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
            region: {
                latitude: 21.0242225,
                longitude: 105.8207913,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
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
        var flatListData = [
            {
                "key": "598a678278fee204ee51cd2c",
                "name": "Cream Tea",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Cornish_cream_tea_2.jpg",
                "foodDescription": "This is a cup of cream tea"
            },
            {
                "key": "598a684f78fee204ee51cd2f",
                "name": "Fresh mushroom",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Lactarius_indigo_48568.jpg",
                "foodDescription": "Fresh mushroom with vegetables. This is a long line, this is a long line, this is a long line,this is a long line,this is a long line"
            },
            {
                "key": "598a687678fee204ee51cd30",
                "name": "Japanese Oyster",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oysters_served_on_ice%2C_with_lemon_and_parsley.jpg",
                "foodDescription": "Oysters with ice rock"
            },
            {
                "key": "598a680178fee204ee51cd2e",
                "name": "Korean Kimchi",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/74/Yeolmukimchi_3.jpg",
                "foodDescription": "Traditional Korean Food"
            },
            {
                "key": "598a688878fee204ee51cd31",
                "name": "Multiple salad",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg",
                "foodDescription": "Salad mixed with mushroom"
            },
            {
                "key": "598a68b778fee204ee51cd32",
                "name": "Vegetable",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Vegetable_Cart_in_Guntur.jpg",
                "foodDescription": "Fresh vegetables"
            },
            {
                "key": "598a67c478fee204ee51cd2d",
                "name": "traditional japanese salad",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Simple_somen.jpg",
                "foodDescription": "Very delicious Japanese Salad"
            }
        ];

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
                            backgroundColor: '#214559',
                            elevation: 5,
                            borderRadius: 5
                        }}>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/search.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/search.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/search.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/search.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
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
                        data={flatListData}
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
                            backgroundColor: '#214559',
                            elevation: 5,
                            borderRadius: 5
                        }}>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/search.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/search.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
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
                    <MapView style={{flex: 1, height: 200}} initialRegion={this.state.region}>

                        <MapView.Marker title={'Đây là bệnh viện gì đó'} description={'Mô tả về bv'}
                                        coordinate={this.state.region}/>

                    </MapView>

                </View>

            </ScrollView>

        );

    }
}