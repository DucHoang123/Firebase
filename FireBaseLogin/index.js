import React, { Component } from 'react'
import { 
    AppRegistry 
} from 'react-native';
import {LoginRegister} from './components/App';

export default class App extends Component {
    render() {
      return (
        <LoginRegister/>
      )
    }
  }

AppRegistry.registerComponent('FireBaseLogin', () => App);
