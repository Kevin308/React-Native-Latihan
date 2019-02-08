import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Loginform from './loginform';
import Mainmenu from './mainmenu';

export default createStackNavigator(
    {
        Login: {
            screen: Loginform
        },
        Mainmenu: {
            screen: ({ navigation }) => <Mainmenu screenProps={{ rootNavigation: navigation }}/>
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);