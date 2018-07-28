import React, { Component } from 'react';
import { View, Text , TouchableOpacity , Image ,Platform ,ActivityIndicator} from 'react-native';
import {firebaseApp} from '../components/FireBaseConfig';
import RNFetchBlob from 'react-native-fetch-blob';
 
var ImagePicker = require('react-native-image-picker');

const storage = firebaseApp.storage();
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

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
  const uploadImage = (uri , mime = 'img/jpg') => {
    return new Promise((resolve,reject)=>{
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://','') : uri;
      const sessionId = new Date().getTime();
      let uploadBlob = null;
      const imageRef = storage.ref('images').child(`${sessionId}.jpg`);

      fs.readFile(uploadUri , 'base64')
      .then((data)=>{
        return Blob.build(data ,{type: `${mime}; BASE64`})
      })
      .then((blob)=>{
        uploadBlob = blob
        return imageRef.put(blob, {contentType: mime})   // post ảnh lên
      })
      .then(()=>{
        uploadBlob.close()
        return imageRef.getDownloadURL()   // lấy ảnh xuống  
      })
      .then((url)=>{
        resolve(url)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  }
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    pickImage(){
        ImagePicker.showImagePicker(options, (response) => {  

          this.setState({  avatarSource: ''  })

            if (response.didCancel) {
               
            }
            else if (response.error) {
             
            }
            else if (response.customButton) {
              
            }
            else {
               uploadImage(response.uri)
               .then(url => this.setState({avatarSource : url}) )
               .catch(err => console.log(err))
            }
          });
    }  


   renderImage() {
    switch(this.state.avatarSource){
      case '': return <ActivityIndicator/>
      default:
      return(
        <View>
          <Image source={{uri:this.state.avatarSource }} style={{height:150 , width:120 }}  />
          <Text>{this.state.avatarSource}</Text>
        </View>
         
      )
    }
   } 
  render() {
    return (
      <View style={{ flex:1 , justifyContent:'center', alignContent:'center' }} >
      {this.renderImage()}
           <TouchableOpacity
             onPress={ ()=> {this.pickImage()} }
           >           
               <Text style={{ color:'green' , fontSize:30 }} >
                   Upload fille 
               </Text>
           </TouchableOpacity>
      </View>
    );
  }
}
 