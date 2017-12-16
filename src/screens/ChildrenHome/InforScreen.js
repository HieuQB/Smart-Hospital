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

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                elevation:5,
                backgroundColor:'#ccc',
                width:120,
                height:250,
                margin:10,
                marginEnd:5,
                borderRadius:10,
            }}>
                <Image
                    source={{uri: this.props.item.imageUrl}}
                    style={[{ width: 120, height: 130 ,borderRadius:10}]}
                />

                <Text style={styles.flatListItem}>{this.props.item.name}</Text>

                <View style={{flexDirection:'row',marginStart:8}}>
                    <Image
                        source={require('../images/star.png')}
                        style={[{ width: 20, height: 20,marginEnd:1 }]}
                    />
                    <Image
                        source={require('../images/star.png')}
                        style={[{ width: 20, height: 20,marginEnd:1 }]}
                    />
                    <Image
                        source={require('../images/star.png')}
                        style={[{ width: 20, height: 20,marginEnd:1 }]}
                    />
                    <Image
                        source={require('../images/star.png')}
                        style={[{ width: 20, height: 20,marginEnd:1 }]}
                    />
                    <Image
                        source={require('../images/star.png')}
                        style={[{ width: 20, height: 20,marginEnd:1 }]}
                    />
                </View>

                <View style={{height:2, backgroundColor:'#337f9d', marginTop:5}}/>

                <Text style={styles.flatListItem}>{this.props.item.khoa}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        height:45,
        color: 'black',
        padding: 10,
        paddingBottom:5,
        paddingEnd:5,
        paddingTop:5,
        fontSize: 14,
        alignItems:'center',
    }
});


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
        var flatListData = [
            {
                "key": "598a678278fee204ee51cd2c",
                "name": "PGS TS Nguyễn Minh Hiếu",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Cornish_cream_tea_2.jpg",
                "khoa": "Truyền Nhiễm"
            },
            {
                "key": "598a684f78fee204ee51cd2f",
                "name": "PGS TS Nguyễn Minh Hiếu",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Lactarius_indigo_48568.jpg",
                "khoa": "Khoa Sản"
            },
            {
                "key": "598a687678fee204ee51cd30",
                "name": "ThS BS Nguyễn Tuấn Anh",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oysters_served_on_ice%2C_with_lemon_and_parsley.jpg",
                "khoa": "Di Truyền & Sinh vật học phân tử"
            },
            {
                "key": "598a680178fee204ee51cd2e",
                "name": "ThS BS Nguyễn Tuấn Anh",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/74/Yeolmukimchi_3.jpg",
                "khoa": "Răng Hàm Mặt"
            },
            {
                "key": "598a688878fee204ee51cd31",
                "name": "ThS BS Nguyễn Tuấn Anh",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/94/Salad_platter.jpg",
                "khoa": "Răng Hàm Mặt"
            },
            {
                "key": "598a68b778fee204ee51cd32",
                "name": "ThS BS Nguyễn Tuấn Anh",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Vegetable_Cart_in_Guntur.jpg",
                "khoa": "Nội Thần Kinh"
            },
            {
                "key": "598a67c478fee204ee51cd2d",
                "name": "Nguyễn Tuấn Anh",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Simple_somen.jpg",
                "khoa": "Chấn thương chỉnh hình"
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
                            backgroundColor: '#337f9d',
                            elevation: 5,
                            borderRadius: 5
                        }}>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/map.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/focus.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/1608931-128.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_Time_Machine-01_72122.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_Burn-01_72105.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_Aiport_Utility-01_72104.png')}
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
                            backgroundColor: '#337f9d',
                            elevation: 5,
                            borderRadius: 5
                        }}>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_viber_328079.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/mail.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>284 Cống Quỳnh, Phạm Ngũ Lão, Quận 1, Hồ Chdfgdfgdfí
                                    Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_Globe1_34224.png')}
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

                </View>

            </ScrollView>

        );

    }
}