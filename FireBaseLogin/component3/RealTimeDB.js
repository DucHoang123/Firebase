import React, { Component } from 'react'
import {
   View , TouchableOpacity ,Text
} from 'react-native'
import {firebaseApp} from '../components/FireBaseConfig';

export default class RealTimeDB extends Component {
    constructor(props){
        super(props);
       // this.itemRef = firebaseApp.database().ref('KhoaHoc');
        this.itemRef = firebaseApp.database();
    }
    setDB(){  // ref('..') là nốt cha , child('..') là nốt bên trong ref
        this.itemRef.ref('AAA').set({  // set : nếu trường thông tin trùng thì nó ghi đè info lên cái cũ
            ReactNative: 'alllo',       
            IOS: 'apple',
            ANDROID: 'sssss',
            aa:'aaa'

        })
    }
    PushDB(){
        this.itemRef.ref('AAA').child('TrungTamDaoTaoLapTring').push({  
            ReactNative: 'alllo',                          // push :  đẩy thong tin lên vào tạo Id Riêng Biệt va khong bi trùng
            IOS: 'apple',                                          // Nếu Thong Tin giống nhau thì nó cũng tao cái mới và cấp 1 ID mới
            ANDROID: 'sssss'
        })
    }
  render() {
    return (
      <View style={{flex:1 , justifyContent:'center' , alignItems:'center' }} >
          <TouchableOpacity
             onPress={()=>{this.setDB()}}
          >
              <Text style={{marginBottom:20}} >
                  set DB
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={()=>{this.PushDB()}}
          >
              <Text>
                  Push DB
              </Text>
          </TouchableOpacity>
      </View
      >
    )
  }
}
