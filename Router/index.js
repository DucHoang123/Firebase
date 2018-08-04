import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import App from './app/index';
 
AppRegistry.registerComponent('Router', () => App);
