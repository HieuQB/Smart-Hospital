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
import HomeTabs from './ChildrenHome/RoutesScreen';
import {GoogleSignin} from "react-native-google-signin";

export default class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        drawerIcon: ({tintColor}) => {
            return (
                <MaterialIcons
                    name="Home"
                    size={24}
                    style={{color: tintColor}}>

                </MaterialIcons>
            );
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#337f9d"
                    barStyle="light-content"
                />
                <View style={styles.wrapper}>
                    <View style={styles.row1}>
                        <TouchableOpacity
                            onPress={()=> this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Image source={require('./images/menu.png')} style={styles.iconStyle} />
                        </TouchableOpacity>
                        <Text style={styles.textStyle}>Smart Hospital</Text>
                        <Image source={require('./images/search.png')} style={styles.iconStyle} />
                    </View>
                </View>

                <HomeTabs/>
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
        backgroundColor: '#337f9d',
        padding: 10,
        justifyContent: 'space-around'
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