import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet,  Text,  View
} from 'react-native'; 
import Swiper from 'react-native-swiper';
 
export default class Swipers extends Component{
  render(){
    return (
      <View  style={styles.wrapper}  >

      
      <Swiper 
      
     // index={1}  // mà hình mở đầu tiên
    //  showsButtons={true} // nút mũi tên trái phải
     // autoplay={true}    // sau 1 khoảng time thì nó next
   //   horizontal={true} // dấu chấm đại diện các màn hình nằm hướng nào : true thì dọc
  //    loop={false} // không cho next theo vòng lặp ( UI cuối next thành UI đầu)
      
      >  
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
        
      </Swiper>
      </View>
    )
  }
 
}
 
var styles = StyleSheet.create({
  wrapper: {
   flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})