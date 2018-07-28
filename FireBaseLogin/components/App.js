import React, { Component } from 'react'
import { 
     createStackNavigator 
} from 'react-navigation';
import Login from './Login';
import Register from './Register';
import App from '../component2/App';
import RealTimeDB from '../component3/RealTimeDB';
 
export const LoginRegister = createStackNavigator({
    RealTimeDB : {
        screen : RealTimeDB,
        navigationOptions:{
            header : null
        }
    },
    App : {
        screen : App,
        navigationOptions:{
            header : null
        }
    },
    Login : {
        screen : Login,
        navigationOptions:{
            header : null
        }
    },
    Register : {
        screen : Register,
        navigationOptions:{
            header : null
        }
    },
    
})