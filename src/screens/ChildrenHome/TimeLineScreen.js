import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import Timeline from 'react-native-timeline-listview'

export default class TimeLineScreen extends Component{

    constructor(){
        super()
        this.data = [
            {time: 'Năm 1997', title: 'Ra đời', description: 'Tên gọi Hoàn Mỹ chính thức xuất hiện trên nền y tế nước nhà với tiền thân là Phòng Khám Đa Khoa Lý Thường Kiệt – 1A Lý Thường Kiệt, Phường 7, Quận Tân Bình, Tp.HCM. Phòng Khám đầu tiên của Thành phố Hồ Chí Minh.', circleColor: '#009688',lineColor:'#009688'},
            {time: 'Năm 1999', title: 'Thành lập', description: 'Bệnh viện đa khoa Hoàn Mỹ đầu tiên ra đời và tọa lạc tại 124 Trần Quốc Thảo, Phường 7, Quận 3, Tp.HCM – Bệnh viện đa khoa tư nhân đầu tiên trên Thành phố Hồ Chí Minh.'},
            {time: 'Năm 2002', title: 'Mở rộng', description: 'Bệnh viện đa khoa Hoàn Mỹ (cơ sở II) được thành lập ở số 4 Hoàng Việt, Phường 4, Quận Tân Bình.',lineColor:'#009688'},
            {time: 'Năm 2011', title: 'Phát triển', description: 'Bệnh viện Hoàn Mỹ Sài Gòn gia nhập Tập Đoàn Quốc Tế Fortis. Chính thức đổi tên Bệnh viện đa khoa Hoàn Mỹ thành Bệnh viện Đa khoa Hoàn Mỹ Sài Gòn và dời cơ sở 1 từ 124 Trần Quốc Thảo, Phường 7, Quận 3, Tp.HCM về 60-60A Phan Xích Long, Phường 1, Quận Phú Nhuận, Tp.HCM.',lineColor:'#009688'},
            {time: 'Năm 2013', title: 'Bền vững', description: 'Bệnh viện đa khoa Hoàn Mỹ Sài Gòn gia nhâp Tập Đoàn Clermont phát triển thành Tập Đoàn Y Khoa Hoàn Mỹ (Việt Nam) với hệ thống trải dài từ miền Trung đến miền Nam với 08 bệnh viện và 01 Phòng khám.', circleColor: '#009688'},
            {time: 'Năm 2014 - Nay', title: 'Không ngừng phát triển', description: 'Bệnh Viện Hoàn Mỹ Sài Gòn không ngừng đầu tư các trang thiết bị mới; với hi vọng mỗi khách hàng đều được tiếp cận với sự chăm sóc y tế hoàn mỹ với mức giá hợp lý.', circleColor: '#009688'}
        ]
    }

    render() {
        //'rgb(45,156,219)'
        return (
            <View style={styles.container}>
                <Timeline
                    style={styles.list}
                    data={this.data}
                    circleSize={20}
                    separator={false}
                    columnFormat='two-column'
                    circleColor='rgb(45,156,219)'
                    timeContainerStyle={{minWidth:52, marginTop: -5}}
                    timeStyle={{textAlign: 'center', backgroundColor:'#FF6600', color:'white', padding:5, borderRadius:13}}
                    descriptionStyle={{color:'gray'}}
                    detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10}}
                    options={{
                        style:{paddingTop:5}
                    }}
                    innerCircle={'dot'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor:'white'
    },
    list: {
        flex: 1,
    },
});