import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export default class Appa extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 50, backgroundColor: 'red' }}>
          <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            <View>
              <Text>Hello World!</Text>
              <Text>Hello World!</Text>
              <Text>Hello World!</Text>
              <Text>Hello World!</Text>
              <Text>Hello World!</Text>
              <Text>Hello World!</Text>
              <Text>Hello World!</Text>
              <Text>Hello World!</Text>
              <Text>Hello World!</Text>
              <Text>Hello World!</Text>
              
            </View>
          </View>
        </Modal>
      </View>

    );
  }
}
