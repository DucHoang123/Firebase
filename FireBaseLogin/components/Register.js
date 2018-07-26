import React, { Component } from 'react'
import { 
      View , Text ,KeyboardAvoidingView , StyleSheet,
    TouchableWithoutFeedback,Keyboard,Image
} from 'react-native';
import InputRegister from './InputRegister';

export default class Register extends Component {
  
  render() {
    return (
      <TouchableWithoutFeedback style={ sty.container }  onPress={Keyboard.dismiss} >
        <KeyboardAvoidingView behavior="padding" style={ sty.container } >
         
          <View style={ sty.logoContainer } >
             <Image style={{width:200,height:70}}  source={require('../images/facebook.png')} />
             <Text style={ sty.inputform } >
                An App made for github using Reacr Native
             </Text>
          </View>
          
             <InputRegister onReponse={this} />
          
                 
       
        </KeyboardAvoidingView>
         </TouchableWithoutFeedback>
    )
  }
}
const sty = StyleSheet.create({
    container:{
       flex: 1,
       backgroundColor: 'rgb(32,53,70)' 
    },
    logoContainer:{
       alignItems: 'center',
       justifyContent: 'center',
       flexGrow: 1,
    },
    inputform:{
      color:'#FFF',
      marginTop: 10,
      width:160,
      textAlign : 'center',
      opacity:0.9
    }
   
})
