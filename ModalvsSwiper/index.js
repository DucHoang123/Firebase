import React, { Component } from 'react'
import { AppRegistry,Text, View } from 'react-native'
import Modals from './src/Modals';
import Swipers from './src/Swipers';
export default class App extends Component {
  render() {
    return (
      <Modals/>
    )
  }
}

AppRegistry.registerComponent('ModalvsSwiper', () => App);
