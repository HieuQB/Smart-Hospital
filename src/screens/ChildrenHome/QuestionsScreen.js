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
                "doctorAnswer": "Chị Vân Anh thân mến,\n\n Những triệu chứng như chị mô tả là mất tiếng, đau rát họng, ho,... thì nghĩ nhiều tới viêm họng thanh quản. Chị nên đi khám và làm nội soi tai mũi họng để bác sĩ chuyên khoa điều trị dứt điểm. \n\nKhi dùng thuốc cần khám và hỏi ý kiến bác sĩ trước. Nếu chị có các biểu hiện tức nhiều bụng dưới, ra dịch ,ra huyết âm đạo hay thai đạp ít... thì cần đi khám chuyên khoa sản ngay để bác sĩ đánh giá.Mốc khám thai tiếp theo ở tuần 22 cũng rất quan trọng, chị nên lưu ý đi kiểm tra.\n\n Chúc chị có một thai kì khỏe mạnh.\n\n Bác sĩ: Thân Ngọc Tuấn",
                "category": "Tai - Mũi - Họng"
            },
            {
                "key": "2",
                "title": "Tư vấn sức khỏe",
                "userName": "Dương Khánh Toàn",
                "userAge": "37",
                "userTime": "4",
                "userQuestion": "Chỉ số Ferritin của tôi rất cao là 897,6 ng/mL. Tôi bị viêm xoang mãn tính không biết có ảnh hưởng gì đến chỉ số này không?",
                "doctorName": "Phan Thanh Chương",
                "doctorTime": "3",
                "doctorAnswer": "Kinh gửi anh Khánh Toàn, \n\n Chỉ số ferretin tăng cao gặp trong các trường hợp sau: \n - Nhồi máy cơ tim cấp \n - Viêm khớp dạng thấp hoặc một bệnh viêm mạn tính khác. \n -Bệnh gan, bệnh nhân mạn tính\n -Cường giáp, nhiễm trùng. \n -Bệnh tiểu đường tuýp 2 \n\n Trường hợp của anh có viêm xoang mạn cũng là một trong nhóm bệnh tăng ferretin . Tuy nhiên chỉ số của anh vượt ngưỡng bình thường tương đối cao. Vì thế tôi khuyên anh nên khám bác sĩ chuyên khoa hoặc anh làm thêm một số chức nưng cơ bản theo gói khám sức khỏe tổng quát để chẩn đoán bệnh được tốt hơn. \n\n Kính chúc anh mạnh khỏe.\n\n Bác sĩ : Phan Thanh Chương",
                "category": "Xét nghiệm"
            },
            {
                "key": "3",
                "title": "Nhờ bác sĩ tư vấn",
                "userName": "Nguyễn Danh Hùng",
                "userAge": "45",
                "userTime": "5",
                "userQuestion": "BS giải thích giùm thể tích khối hồng cầu trong máu HTC giảm là 38,9 là sao? Xin cám ơn",
                "doctorName": "Nguyễn Văn Thực",
                "doctorTime": "1",
                "doctorAnswer": "Kính gửi anh Danh Hùng \n\n HCT : Tỷ lệ phần trăm giữa thể tích khối hồng cầu và máu toàn phần. \n\n Theo hằng số sinh học người Việt Nam: \n-Hematocrit ở nam: 43% \n-Hematocrit ở nữ: 39%\n-HTC giảm trong: \n\t +Mất máu\n\t +Thai nghén, thiếu máu, bệnh leucemi cấp...\n\n Trong trường hợp của anh có Hct giảm nhẹ, tuy nhiên để chẩn đoán nguyên nhân cần dựa vào khám lâm sàng, tiền sử bệnh đang điều trị, các xét nghiệm khác như hồng cầu, Hb,... Bởi vậy, trường hợp anh cần tư vấn thêm, anh có thể tới Bệnh viện Hoàn Mỹ Sài Gòn để bác sĩ lâm sàng khám và tư vấn cụ thể. \n\n Kính chúc anh và gia đình mạnh khỏe.\n\n Bác sĩ Nguyễn Văn Thực",
                "category": "Huyết học - Truyền máu"
            },
            {
                "key": "4",
                "title": "Chuẩn đoán hình ảnh",
                "userName": "Nguyễn Kim Chi",
                "userAge": "30",
                "userTime": "3",
                "userQuestion": "Tôi có thai 18 tuần, đi siêu âm, bác sĩ nói tcos nang đám rối mạch mạc, vậy xin hỏi bác sĩ như vậy có sao không?",
                "doctorName": "Nguyễn Hải Sơn",
                "doctorTime": "1",
                "doctorAnswer": "Chào bạn Kim Chi\n\n Cảm ơn bạn đã quan tâm đến dịch bụ của bệnh viện Hoàn Mỹ Sài Gòn. Chúng tôi xin trả lời câu hỏi của bạn như sau:\n\n Siêu âm thai là một thăm khám không thể thiếu trong thai kì, không những để xác định tuổi thai, theo dõi sự phát triển của thai mà còn phát hiện được những bất thường hay những dị tật của thai nhi.\n Nang đám rối mạch mạc có thể thấy một hoặc hai bên não thất với nhiều kích thước khác nhau. Nang gặp trong khoảng 1-2% ở thai nhi bình thường và thường thấy trên siêu âm ở tuổi thai 16-24 tuần, hơn 95% trường hợp nang tự biến mất trước tuần 28.\n\n Trường hợp của bạn nếu có điều kiện có thể tư vấn thêm  trực tiếp bác sĩ sản và làm thêm xét nghiệm Triple test, ngoài ra bạn cần được siêu âm định kì để theo dõi, với các mốc quan trọng tiếp theo là 22 tuần và 32 tuần.\n\n Chúc bạn thai kì luôn mạnh khỏe.\n\n Bác sĩ Nguyễn Hải Sơn",
                "category": "Chuẩn Đoán Hình Ảnh"
            },
            {
                "key": "5",
                "title": "Đường huyết cao",
                "userName": "Mai Thị Nhung",
                "userAge": "24",
                "userTime": "7",
                "userQuestion": "Sau khi uống 2h gluco kết quả xét nghiệm là 8.88 thì có nguy hiểm không ạ? Có cần nhập viện điều trị hay là chỉ cần kiêng theo chế độ ăn ạ? Cám ơn bác sĩ ạ!",
                "doctorName": "Thân Ngọc Tuấn",
                "doctorTime": "3",
                "doctorAnswer": "Chị Nhung thân mến\n\n Đái tháo đường (ĐTĐ) thai kì được định nghĩa là những trường hợp được phát hiện đường huyết cao lần đầu tiên trong thời gian mang thai, không loại trừ khả năng bị ĐTĐ từ trước nhưng chưa được chuẩn đoán\n Các thai phụ có những nguy cơ sau đều được làm nghiệm pháp dung nạp đường huyết để chuẩn đoán: tuổi > 35, béo phì, tiền căn có ĐTĐ thai kỳ, đường niệu (+), có tiền căn gia đình bị ĐTĐ sẽ đuộc tầm soát ĐTĐ ngay.\n\n Chị có kết quả làm nghiệm pháp như trên thì chị nên điều chỉnh lại chế độ ăn uống và kiểm tra lại sau 1 tháng\n Chế độ ăn thích hợp chị cần điều chỉnh như sau: nên hạn chế các thức ăn, nước uống chứa nhiều đường hấp thu nhanh như sữa đặc, nước ngọt, bánh kẹo... và hạn chế các đồ ăn nếp như xôi, bánh chưng... khuyến khích ăn các loại thực phẩm chứa nhiều chất xơ. Ngày ăn đủ 3 buổi nhưng không nên ăn nhiều vào buổi sáng.\n\n Chúc chị có một thai kì khỏe mạnh\n\n Bác sĩ Thân Ngọc Tuấn",
                "category": "Nội tiết"
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