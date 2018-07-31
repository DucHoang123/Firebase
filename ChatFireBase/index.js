import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import  * as firebase from 'firebase';
import App1 from './App';
export default class App extends Component {
 
  render() {
    var config = {
        apiKey: "AIzaSyCxrbnLb_TjyotzSnfyyvWS15HFL9sjBTo",
    authDomain: "chatfirebase-c7dfb.firebaseapp.com",
    databaseURL: "https://chatfirebase-c7dfb.firebaseio.com",
    projectId: "chatfirebase-c7dfb",
    storageBucket: "",
    messagingSenderId: "974965516307"
      };
      firebase.initializeApp(config);
    return (
      <App1/>
    )
  }
}

AppRegistry.registerComponent('ChatFireBase', () => App);
