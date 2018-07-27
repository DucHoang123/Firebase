import React, { Component } from 'react';
import { View, Text , TouchableOpacity , Image} from 'react-native';
import {firebaseApp} from '../components/FireBaseConfig';
import RNFetchBlob from 'rn-fetch-blob';
var ImagePicker = require('react-native-image-picker');
var options = {
    title: 'Select Avatar',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            avatarSource: null
        }
    }
    pickImage(){
        ImagePicker.showImagePicker(options, (response) => {
            
          
            if (response.didCancel) {
               
            }
            else if (response.error) {
             
            }
            else if (response.customButton) {
              
            }
            else {
              let source = { uri: response.uri };
          
              this.setState({
                avatarSource: source
              });
            }
          });
    }
  render() {
    return (
      <View style={{ flex:1 , justifyContent:'center', alignContent:'center' }} >
           <TouchableOpacity
             onPress={ ()=> {this.pickImage()} }
           >
              <Image source={this.state.avatarSource} style={{height:150 , width:120 }}  />
               <Text style={{ color:'green' , fontSize:30 }} >
                   Upload fille 
               </Text>
           </TouchableOpacity>
      </View>
    );
  }
}
 