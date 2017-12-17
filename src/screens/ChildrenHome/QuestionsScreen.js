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
import React, {Component} from 'react';

import Slideshow from 'react-native-slideshow';

class FlatListItem extends Component {
    render() {
        return (
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

                    <Text style={{color: '#ffffff', fontSize: 14,}}>{this.props.item.name}</Text>
                </View>

                <View style={{flexDirection: 'row',margin:6}}>
                    <Image style={{
                        width: 35,
                        height: 35,
                        borderRadius: 35
                    }}
                           source={require('../images/icon_user.png')}
                    />

                    <View style={{marginStart:10}}>
                        <Text style={{color:'#383838'}}>Minh Hiếu - 21 tuổi</Text>
                        <Text style={{color:'#9b9b9b', fontSize:12}}>Đã hỏi 1 ngày trước</Text>
                    </View>

                </View>

                <Text style={{backgroundColor:'#e3e3e3', color:'#383838', borderRadius:7,padding:5, height:62,marginStart:5,marginEnd:5}}>Kính gửi bác sĩ xét nghiệm, cháu vừa làm xét nghiệm máu, đây là kết quả của cháu mong bác sĩ .....</Text>


                <View style={{flexDirection: 'row',margin:6,alignItems:'flex-end',justifyContent:'flex-end'}}>

                    <View style={{marginStart:10}}>
                        <Text style={{color:'#383838'}}>BS Nguyễn Minh Hiếu</Text>
                        <Text style={{color:'#9b9b9b', fontSize:12}}>Đã trả lời 1 ngày trước</Text>
                    </View>

                    <Image style={{
                        width: 35,
                        height: 35,
                        borderRadius: 35
                    }}
                           source={require('../images/icon_doctor.png')}
                    />

                </View>

                <Text style={{backgroundColor:'#57e342', color:'#ffffff', borderRadius:7,padding:5, height:78,marginStart:5,marginEnd:5}}>Kính gửi bác sĩ xét nghiệm, cháu vừa làm xét nghiệm máu, đây là kết quả của cháu mong bác sĩ xem xét cho cháu nhaaaaa.....</Text>
                <View style={{height:2, backgroundColor: '#68a2cb', marginTop:5}}/>
                <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>

                    <Text style={{ color:'#ff3533'}}>Sản khoa</Text>
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


export default class QuestionsScreen extends Component {

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
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>);
                    }}
                >

                </FlatList>

            </View>
        );

    }
}