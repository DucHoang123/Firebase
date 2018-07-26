import React, { Component } from 'react';
import { 
  View , Text , StyleSheet, TextInput,TouchableOpacity , Alert
} from 'react-native';
 
//import {firebaseApp} from './FireBaseConfig';
// trên android thì component này chạy ko dc , ios thi ok Vì import {firebaseApp} from './FireBaseConfig';
export default class InputLoogin extends Component {
    constructor(props){
        super(props);
        this.state={
          email:'',
          password:''
        }
      }
   
    DangNhap(){
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=> {
           Alert.alert(
             'Alert Title',
             'Dang Nhap Thanh Cong '+this.state.email,
             [
               {
                 text:'Cancel' ,  style:'cancel'
               },
               {
                text:'OK' , onPress: ()=> { this.props.onOk.props.navigation.navigate('App') }
              },
             ],
             {cancelable: false }
           )
           this.setState({
             email:'',
             password:''
           })
        })
        .catch(function(error) {
          Alert.alert(
            'Alert Title',
            'Dang Nhap That Bai ' ,
            [
              {
                text:'Cancel' ,  style:'cancel'
              },
              {
               text:'OK'
             },
            ],
            {cancelable: false }
          )
        });
      }
  render() {
    return (
      <View style={{ padding:20}} >

          <TextInput style={ sty.inputText }
             placeholder="User Name"  
             underlineColorAndroid="transparent"    
             onSubmitEditing={()=> this.pass.focus()}
             onChangeText={(text)=> this.setState({ email : text}) }
          >                  
           </TextInput>
           <TextInput style={ sty.inputText }
             placeholder="Password"
             underlineColorAndroid="transparent" 
             secureTextEntry
             onChangeText={(text)=> this.setState({ password : text}) }
             ref={(input)=>this.pass = input }
          >                  
           </TextInput>
          <TouchableOpacity style={{ paddingVertical:10 , backgroundColor:'yellow' , marginVertical:10}}       
              onPress={()=> this.DangNhap() }
         >
            <Text style={{ textAlign:'center' }} > LOGIN </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingVertical:10 , backgroundColor:'yellow'  }}  
            onPress={()=> {this.props.onOk.props.navigation.navigate('Register')}} 
          >
            <Text style={{ textAlign:'center' }}           
            > REGISTER </Text>
          </TouchableOpacity>
 
    </View>
    )
  }
}

const sty = StyleSheet.create({
   inputText:{
    height:40 , marginTop:10 ,backgroundColor:'#34495e'
   }
})
