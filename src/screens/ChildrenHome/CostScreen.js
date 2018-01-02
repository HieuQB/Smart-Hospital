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
    render() {


        var sectionListData = [
            {
                data: [
                    {
                        name: 'Khám tư vấn và chích ngừa',
                        cost: '120.000 VNĐ'
                    },
                    {
                        name: 'Tư vấn khám sức khỏe cơ quan',
                        cost: '120.000 VNĐ'
                    },
                    {
                        name: 'Khám Bệnh Hội Chẩn nội viện 1 chuyên khoa (Bác sỹ nội viện)',
                        cost: '300.000 VNĐ'
                    },
                    {
                        name: 'Khám bệnh TOCE',
                        cost: '150.000 VNĐ'
                    },
                    {
                        name: 'Khám Cấp Cứu',
                        cost: '300.000 VNĐ'
                    },
                    {
                        name: 'Khám Ngoại Tim Mạch - Lồng Ngực',
                        cost: '150.000 VNĐ'
                    },
                    {
                        name: 'Khám Ngoại Thần Kinh',
                        cost: '150.000 VNĐ'
                    },
                    {
                        name: 'Khám hội chẩn CĐHA',
                        cost: '150.000 VNĐ'
                    },
                    {
                        name: 'Khám Ngoại Tổng Quát',
                        cost: '150.000 VNĐ'
                    },
                    {
                        name: 'Khám nhi',
                        cost: '150.000 VNĐ'
                    },
                    {
                        name: 'Khám Nội Tiết-Chuyển Hóa',
                        cost: '150.000 VNĐ'
                    },
                    {
                        name: 'Khám Sản Phụ Khoa',
                        cost: '180.000 VNĐ'
                    },
                    {
                        name: 'Mời bác sỹ hội chẩn (Bs ngoại viện)',
                        cost: '600.000 VNĐ'
                    },
                    {
                        name: 'Khám hội chẩn cấp cứu',
                        cost: '150.000 VNĐ'
                    },
                    {
                        name: 'Khám Hội chẩn Tai Mũi Họng',
                        cost: '180.000 VNĐ'
                    },
                    {
                        name: 'Khám bệnh Tại Nhà',
                        cost: '500.000 VNĐ'
                    },
                ],
                title: "Khám Bệnh và Kiểm Tra Sức Khỏe"
            },
            {
                data: [
                    {
                        name: 'Chụp cộng hưởng từ (MRI) Khớp khuỷu trái',
                        cost: '2.625.000 VNĐ'
                    },
                    {
                        name: 'Chụp cộng hưởng từ (MRI) Khớp khuỷu phải ',
                        cost: '2.625.000 VNĐ'
                    },
                    {
                        name: 'Chụp (MRI) có chất cản từ (kể cả thuốc cản từ) Vùng cổ',
                        cost: '3.360.000 VNĐ'
                    },
                    {
                        name: ' Chụp (MRI) có chất cản từ (kể cả thuốc cản từ) Tim',
                        cost: '3.360.000 VNĐ'
                    },
                    {
                        name: 'Chụp (MRI) có chất cản từ (kể cả thuốc cản từ) Bụng ',
                        cost: '3.360.000 VNĐ'
                    },
                    {
                        name: 'EEG (Điện não đồ)',
                        cost: '267.000 VNĐ'
                    },
                    {
                        name: 'Đọc kết quả điện tim',
                        cost: '72.000 VNĐ'
                    },
                    {
                        name: 'Điện cơ (EMG) tứ chi',
                        cost: '975.000 VNĐ'
                    },
                    {
                        name: 'Chụp cắt lớp vi tính cột sống cổ có tiêm thuốc cản quang',
                        cost: '2.596.000 VNĐ'
                    },
                    {
                        name: 'Chụp cắt lớp vi tính vùng cổ không tiêm thuốc cản quang',
                        cost: '1.717.000 VNĐ'
                    },
                    {
                        name: 'In lại phim MSCT',
                        cost: '140.000 VNĐ'
                    },
                    {
                        name: 'Nội soi cổ tử cung ',
                        cost: '301.000 VNĐ'
                    },
                    {
                        name: 'Nội soi dạ dày có an thần',
                        cost: '1.058.000 VNĐ'
                    },
                    {
                        name: 'Siêu âm 4D - Doppler đánh giá tử cung - nhau - thai',
                        cost: '511.000 VNĐ'
                    },

                ],
                title: "Cận Lâm Sàng"
            },
            {
                data: [
                    {
                        name: 'Bó bột ống trong gãy xương bánh chè',
                        cost: '482.000 VNĐ'
                    },
                    {
                        name: 'Bột Corset Minerve, Cravate',
                        cost: '596.000 VNĐ'
                    },
                    {
                        name: 'Cắt lọc vết thương phần mềm > 10cm',
                        cost: '2.282.500 VNĐ'
                    },
                    {
                        name: 'Cắt u nang bao hoạt dịch cổ chân ',
                        cost: '3.750.000 VNĐ'
                    },
                    {
                        name: 'Cắt u nang bao hoạt dịch mu bàn chân',
                        cost: '2.548.000 VNĐ'
                    },
                    {
                        name: 'Chọc hút dịch khớp gối',
                        cost: '903.500 VNĐ'
                    },
                    {
                        name: 'Mổ cắt bỏ u bã đậu 1-2cm',
                        cost: '1.820.000 VNĐ'
                    },
                    {
                        name: 'Nắn găm Kirschner trong gãy Pouteau- Colles',
                        cost: '7.049.000 VNĐ'
                    },
                    {
                        name: 'Nắn gãy và trật khớp khuỷu',
                        cost: '8.246.000 VNĐ'
                    },
                    {
                        name: 'Nắn, bó bột xương đùi/ chậu/ cột sống',
                        cost: '398.000 VNĐ'
                    },
                    {
                        name: 'Nối gân duỗi bàn tay/bàn chân',
                        cost: '4.785.500 VNĐ'
                    },
                    {
                        name: ' Rút đinh chỉ thép xương bánh chè',
                        cost: '5.192.000 VNĐ'
                    },
                    {
                        name: ' Vá da dầy toàn bộ, diện tích dưới 10cm',
                        cost: '5.848.000 VNĐ'
                    },
                    {
                        name: 'Đốt sùi mào gà lần 2',
                        cost: '369.000 VNĐ'
                    },
                ],
                title: "Thủ thuật"
            },
            {
                data: [
                    {
                        name: 'Kết hợp xương trong gãy xương mác',
                        cost: '7.946.000 VNĐ'
                    },
                    {
                        name: 'Kết xương đinh nẹp khối gãy trên lồi cầu liên lồi cầu',
                        cost: '6.425.000 VNĐ'
                    },
                    {
                        name: 'Mổ chỉnh hình bàn chân khoèo 01 bên',
                        cost: '8.944.500 VNĐ'
                    },
                    {
                        name: 'Mổ tháo nẹp vis xương đùi+ Rút đinh xương chày',
                        cost: '5.777.000 VNĐ'
                    },
                    {
                        name: 'Mổ u máu lớn vùng chi',
                        cost: '7.509.000 VNĐ'
                    },
                    {
                        name: 'Nội soi khâu sụn nêm rách',
                        cost: '9.585.500 VNĐ'
                    },
                    {
                        name: 'Phẫu thuật bàn chân khoèo',
                        cost: '8.944.000 VNĐ'
                    },
                    {
                        name: 'Phẫu thuật cứng duỗi khớp khuỷu',
                        cost: '7.946.000 VNĐ'
                    },
                    {
                        name: 'Phẫu thuật gãy Monteggia',
                        cost: '8.246.000 VNĐ'
                    },
                    {
                        name: 'Phẫu thuật trật bánh chè bẩm sinh',
                        cost: '6.791.000 VNĐ'
                    },
                    {
                        name: ' Phẫu thuật u mô mềm gối',
                        cost: '7.488.500 VNĐ'
                    },
                    {
                        name: 'Phẫu thuật viêm xương khớp háng',
                        cost: '7.946.000 VNĐ'
                    },
                    {
                        name: 'Tháo khớp háng nhân tạo Revision',
                        cost: '9.426.000 VNĐ'
                    },
                    {
                        name: ' Cắt gan không điển hình do vỡ gan, cắt gan nhỏ',
                        cost: '9.995.000 VNĐ'
                    },
                ],
                title: "Phẫu thuật"
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