import React, { Component } from 'react'
import { 
     StackNavigator 
} from 'react-navigation';
import Login from './Login';
import Register from './Register';
import App from '../component2/App';
 
export const LoginRegister = StackNavigator({
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