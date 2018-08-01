import React, {Component} from 'react';
import {Button } from 'react-native-elements';
import stylestotal from './Styles';
const ButtonComp = ({title, onPress, bgColor, textColor , mgHorizontal , bdRaidus , withs ,heights }) => (
    <Button
        style={{marginBottom: 10, marginTop: 10}}
        backgroundColor={bgColor}
        title={title}
        color={textColor}
        onPress={onPress}
        buttonStyle={{
        marginHorizontal: mgHorizontal,
        borderRadius: bdRaidus,
        // width:withs,
        // height:heights     
        }}
        
        />       
);

export default ButtonComp;