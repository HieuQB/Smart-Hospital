import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

import Slideshow from 'react-native-slideshow';

class FlatListItem extends Component {

    _onPress = () => {
        this.props.onPressItem(this.props.item);
    };

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    elevation: 5,
                    backgroundColor: '#ffffff',
                    width: 230,
                    height: 293,
                    margin: 10,
                    marginEnd: 5,
                    borderRadius: 10,
                }}>
                    <View style={{
                        height: 25,
                        backgroundColor: '#1db5e2',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8,
                    }}>

                        <Text style={{color: '#ffffff', fontSize: 14,}}>{this.props.item.title}</Text>
                    </View>

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
                                style={{color: '#383838'}}>{this.props.item.userName} - {this.props.item.userAge} tuổi</Text>
                            <Text style={{color: '#9b9b9b', fontSize: 12}}>Đã hỏi {this.props.item.userTime} ngày
                                trước</Text>
                        </View>

                    </View>

                    <Text style={{
                        backgroundColor: '#e3e3e3',
                        color: '#383838',
                        borderRadius: 7,
                        padding: 5,
                        height: 62,
                        marginStart: 5,
                        marginEnd: 5
                    }}>{this.props.item.userQuestion}</Text>


                    <View style={{flexDirection: 'row', margin: 6, alignItems: 'flex-end', justifyContent: 'flex-end'}}>

                        <View style={{marginStart: 10}}>
                            <Text style={{color: '#383838'}}>BS {this.props.item.doctorName}</Text>
                            <Text style={{color: '#9b9b9b', fontSize: 12}}>Đã trả lời {this.props.item.doctorTime} ngày
                                trước</Text>
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
                        backgroundColor: '#337f9d',
                        color: '#ffffff',
                        borderRadius: 7,
                        padding: 5,
                        height: 78,
                        marginStart: 5,
                        marginEnd: 5
                    }}>{this.props.item.doctorAnswer}</Text>
                    <View style={{height: 2, backgroundColor: '#68a2cb', marginTop: 5}}/>
                    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>

                        <Text style={{color: '#ff3533'}}>{this.props.item.category}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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


export default class QuestionsScreen extends Component {

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

    _onPressItem = (item) => {
        this.props.navigation.navigate('DetailQuestion', { user: item });
    };

    render() {

        var flatListData = [
            {
                "key": "1",
                "title": "Đang mang bầu bị viêm họng",
                "userName": "Cao Vân Anh",
                "userAge": "24",
                "userTime": "3",
                "userQuestion": "Bác sĩ cho cháu hỏi, hiện cháo đang mang bầu tuần 21, cháu bị cúm giờ hết cúm rồi nhưng giờ lại chuyển sang viêm họng (rát họng, ho). Việc này có ảnh hưởng tới thai nhi không ạ? làm thế nào để nói lại bình thường? Cháu cảm ơn",
                "doctorName": "Thân Ngọc Tuấn",
                "doctorTime": "2",
                "doctorAnswer": "Chị Vân Anh thân mến,\n Những triệu chứng như chị mô tả là mất tiếng, đau rát họng, ho,... thì nghĩ nhiều tới viêm họng thanh quản. Chị nên đi khám và làm nội soi tai mũi họng để bác sĩ chuyên khoa điều trị dứt điểm. \nKhi dùng thuốc cần khám và hỏi ý kiến bác sĩ trước. Nếu chị có các biểu hiện tức nhiều bụng dưới, ra dịch ,ra huyết âm đạo hay thai đạp ít... thì cần đi khám chuyên khoa sản ngay để bác sĩ đánh giá.Mốc khám thai tiếp theo ở tuần 22 cũng rất quan trọng, chị nên lưu ý đi kiểm tra.\n Chúc chị có một thai kì khỏe mạnh.\n Bác sĩ: Thân Ngọc Tuấn",
                "category": "Răng Hàm Mặt"
            },
            {
                "key": "2",
                "title": "Tư vấn sức khỏe",
                "userName": "Dương Khánh Toàn",
                "userAge": "37",
                "userTime": "4",
                "userQuestion": "Chỉ số Ferritin của tôi rất cao là 897,6 ng/mL. Tôi bị viêm họng",
                "doctorName": "Hoàng Kim Tuấn",
                "doctorTime": "1",
                "doctorAnswer": "em bị ung thư giai đoạn cuối rồi nha e. chúc mừng em!",
                "category": "Răng Hàm Mặt"
            },
            {
                "key": "3",
                "title": "Kết quả siêu âm?",
                "userName": "Nguyễn Minh Hiếu",
                "userAge": "21",
                "userTime": "3",
                "userQuestion": "câu hỏi của em là em chả biết hỏi gì cả nha",
                "doctorName": "Hoàng Kim Tuấn",
                "doctorTime": "1",
                "doctorAnswer": "em bị ung thư giai đoạn cuối rồi nha e. chúc mừng em!",
                "category": "Răng Hàm Mặt"
            },
            {
                "key": "4",
                "title": "Kết quả siêu âm?",
                "userName": "Nguyễn Minh Hiếu",
                "userAge": "21",
                "userTime": "3",
                "userQuestion": "câu hỏi của em là em chả biết hỏi gì cả nha",
                "doctorName": "Hoàng Kim Tuấn",
                "doctorTime": "1",
                "doctorAnswer": "em bị ung thư giai đoạn cuối rồi nha e. chúc mừng em!",
                "category": "Răng Hàm Mặt"
            },

        ];


        return (
            <View style={{flex: 1}}>

                <Slideshow
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/>

                <FlatList
                    horizontal
                    data={flatListData}
                    renderItem={({item, index}) => {
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem item={item} index={index}
                                          onPressItem={this._onPressItem}>

                            </FlatListItem>);
                    }}
                >

                </FlatList>

            </View>
        );

    }
}