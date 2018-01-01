import { AppRegistry } from 'react-native';
import App from './App';
console.ignoredYellowBox = [
    'Setting a timer'
]
console.disableYellowBox = true;
AppRegistry.registerComponent('SmartHospital', () => App);
