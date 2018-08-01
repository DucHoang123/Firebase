import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ButtonComp from './Buttons/Button';
 
// import I18n from "../../localization"; nhớ import  rồi  title={I18n.t("increase")}
export default class Manager extends Component {
  render() {
    return (
      <View style={{ flex: 1,  }} >

        <ButtonComp title='' textColor='blue' bgColor='#ffa500' mgHorizontal={10} bdRaidus={22} />


        <ButtonComp title='' textColor='blue' bgColor='#ffa500' />

      </View>
    )
  }
}