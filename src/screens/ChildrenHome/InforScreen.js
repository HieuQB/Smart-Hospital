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
                "key": "1",
                "name": "BS Phan Thanh Toàn",
                "imageUrl": "http://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511172018_Rloj5f5hRc.jpg",
                "khoa": "Trưởng khoa Cấp cứu"
            },
            {
                "key": "2",
                "name": "BS Bùi Quang Đi",
                "imageUrl": "http://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511171841_IfMTPlKROp.jpg",
                "khoa": "Trưởng khoa khám bệnh"
            },
            {
                "key": "3",
                "name": "BS Nguyễn Ngọc Huy",
                "imageUrl": "http://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511172111_mSCHY3uZ9K.jpg",
                "khoa": "Trưởng khoa hồi sức"
            },
            {
                "key": "4",
                "name": "BS Nguyễn Ngọc Thao",
                "imageUrl": "http://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511172336_AI5WNirrsU.jpg",
                "khoa": "Trưởng khoa Ngoại"
            },
            {
                "key": "5",
                "name": "BS Phan Thanh Chương",
                "imageUrl": "http://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-22/thumbnail_1511315079_pDUgWgM0eE.jpg",
                "khoa": "Trưởng khoa nội tổng hợp"
            },
            {
                "key": "6",
                "name": "BS Mai Thị Hương Lan",
                "imageUrl": "http://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-22/thumbnail_1511315059_wjmSGjIZwG.jpg",
                "khoa": "Trưởng khoa Nội Thần Kinh"
            },
            {
                "key": "7",
                "name": "Lê Thị Kim Ngân",
                "imageUrl": "http://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511173229_p8lnabxNA9.jpg",
                "khoa": "Trưởng khoa Sản phụ khoa"
            },
            {
                "key": "8",
                "name": "BS Nguyễn Nhựt Khánh",
                "imageUrl": "http://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511173855_HOnln2pQYG.jpg",
                "khoa": "Trưởng khoa Dược"
            },
            {
                "key": "9",
                "name": "PGS TS Nguyễn Minh Hiếu",
                "imageUrl": "http://www.hoanmysaigon.com/upload/hoanmysaigon.com/images/employee/2017-11-20/thumbnail_1511173072_badoWGswKV.jpg",
                "khoa": "Trưởng khoa Tim mạch"
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
                    <View style={{flexDirection: 'row', flex: 1, margin: 5, marginTop: 0,}}>


                        <View style={{
                            flexDirection: 'column',
                            backgroundColor: '#337f9d',
                            elevation: 5,
                            borderRadius: 5,
                            marginEnd:43,
                            paddingEnd:43                        }}>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/info.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{textAlign:'justify',color: '#ffffff'}}>Bệnh viện Hoàn Mỹ thành lập năm 1997, hiện nay, đã trở
                                    thành địa chỉ quen thuộc, đáng tin cậy với người dân ở TP.HCM nói riêng và các tỉnh
                                    thành lân cận nói chung. Sứ mệnh của các bác sĩ tại bệnh viện là mang tới dịch vụ
                                    chăm sóc sức khỏe chất lượng cao, ứng dụng các công nghệ hiện đại với chi phí hợp
                                    lý. Bệnh viện đặc biệt chú trọng đầu tư trang thiết bị, cập nhật công nghệ y khoa
                                    nhằm nâng cao năng lực chuyên môn tại các khoa mũi nhọn như Khoa Tim Mạch, Tiêu Hóa,
                                    Gan Mật, Xét nghiệm, Phụ Sản, Chấn thương chỉnh hình. Đến nay, Bệnh viện Hoàn Mỹ Sài
                                    Gòn đã thực hiện điều trị phẫu thuật thành công không ít các bệnh phức tạp và có mức
                                    độ nguy hiểm cao.</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/focus.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>Một số chuyên khoa mũi nhọn:
                                    {"\n"} - Khoa Tim Mạch
                                    {"\n"} - Khoa Tiêu Hóa
                                    {"\n"} - Khoa Gan Mật Tụy
                                    {"\n"} - Khoa Ung Bướu
                                    {"\n"} - Khoa Chấn Thương Chỉnh Hình
                                    {"\n"} - Khoa Ngoại Thần Kinh
                                    {"\n"} - Khoa Nội Thần
                                    {"\n"} - Khoa Sản Phụ
                                    {"\n"} - Khoa Tiết Niệu
                                    {"\n"} - Khoa Tai Mũi Họng
                                    {"\n"} - Khoa Mắt
                                    {"\n"} - Khoa Da Liễu
                                    {"\n"} - Khoa Nội Tiết
                                    {"\n"} - Khoa Thận Nhân Tạo
                                    {"\n"} - Khoa Răng Hàm Mặt
                                    {"\n"} - Nhi Khoa</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/1608931-128.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>Một số thành tích đạt được:
                                    {"\n"} {"\n"} - Giấy khen về tích cục tham gia Chương trình an sinh xã hội và thực hiện tốt
                                    chính sách thuế số 348/QĐ-UBND của UBND Quận Phú Nhuận
                                    {"\n"} {"\n"} - Bằng khen về tham gia hưởng ứng Cuộc vận động "Vì người nghèo" và các hoạt
                                    động an sinh xã hội TPHCM số 51/QĐ-MTTQ của Ủy Ban Mặt trận Tổ Quốc VN TPHCM
                                    {"\n"} {"\n"} - Tuyên dương về tích cực hỗ trợ chăm sóc sức khỏe trẻ em tỉnh Bạc Liêu 2010
                                    - 2014 số 1191/QĐ-UBND của Chủ tịch UBND Tỉnh Bạc Liêu
                                    {"\n"} {"\n"} - Đạt được bằng khen tích cực tham gia hỗ trợ Chương trình Xây dựng Nông Thôn
                                    Mới huyện Cần Giờ số 752/QĐ-UBND của UBND Quận Phú Nhuận </Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_Time_Machine-01_72122.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>Thứ 2 đến thứ 6:
                                    {"\n"}
                                    {"\n"} + Sáng: 7h00 – 11h30

                                    {"\n"} + Chiều: 12h30 - 16h00
                                    {"\n"}
                                    {"\n"} Ngoài giờ
                                    {"\n"}
                                    {"\n"} + Thứ 2 đến thứ 7: 16h00 – 18h00
                                    {"\n"}
                                    {"\n"} + Chủ nhật: 7h00 - 12h00</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_Aiport_Utility-01_72104.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>Wifi : Hoàn Mỹ Sài Gòn Public {"\n"} Pass :
                                    1231234hoanmy</Text>
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
                            borderRadius: 5,
                            paddingEnd:43
                        }}>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/map.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>60-60A Phan Xích Long, Phường 1, Q. Phú Nhuận, TP. Hồ
                                    Chí Minh</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_viber_328079.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>(028) 3990 2468</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/mail.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>contactus.saigon@hoanmy.com</Text>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 5}}>
                                <Image
                                    source={require('../images/if_Globe1_34224.png')}
                                    style={[{width: 25, height: 25, marginTop: 5, marginStart: 10, marginEnd: 10}]}
                                />
                                <Text style={{color: '#ffffff'}}>www.hoanmysaigon.com</Text>
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