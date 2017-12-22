import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    TextInput,
    StatusBar,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Infoslider from 'react-native-infoslider'

export default class AuthorScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Author',
        drawerIcon: ({tintColor}) => {
            return (
                <MaterialIcons
                    name="pets"
                    size={24}
                    style={{color: tintColor}}>

                </MaterialIcons>
            );
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    title: "Nguyễn Minh Hiếu",
                    text: "Kẻ thù lớn nhất cuộc đời là chính bản thân bạn.",
                    image: require('./images/hieu.jpg')
                },
                {
                    title: "Hoàng Kim Tuấn",
                    text: "Để có thể vươn cao trên bầu trời bạn cần có một nền móng vững chắc",
                    image: require('./images/tuan.jpg')
                },
                {
                    title: "Trần Thị Minh Trang",
                    text: "Thức dậy với quyết tâm, đi ngủ với sự hài lòng",
                    image: require('./images/Trang.jpg')
                },
                {
                    title: "GVHD : Ths Huỳnh Tuấn Anh",
                    text: "Làm sai thì bị phạt, làm đúng thì bị thu thuế",
                    image: require('./images/Thay.jpg')
                },

            ]
        };
    }

    render() {
        return (
            <View style={{flex :1}}>
                <StatusBar
                    backgroundColor="#3369c3"
                    barStyle="light-content"
                />
                <View style={styles.wrapper}>
                    <View style={styles.row1}>
                        <TouchableOpacity
                            onPress={()=> this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Image source={require('./images/menu.png')} style={styles.iconStyle} />
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>Thông tin tác giả</Text>
                        <Image source={require('./images/search.png')} style={styles.iconStyle} />
                    </View>
                </View>

                <Infoslider
                    data={this.state.data}
                    showDots={true}
                    activeDotColor="#04B4AE"
                    titleColor="#000"
                    textColor="#666"
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={3}/>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    navBar: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    wrapper: {
        height: 50,
        backgroundColor: '#4185f2',
        padding: 10,
        justifyContent: 'space-around',
        marginBottom:40,
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 18,
        fontWeight: 'bold',
        // fontStyle: 'italic',
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
})