import { useNavigation } from '@react-navigation/native';
import React, {Component} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import styles from '../component/HomeScreen/styles';

const HeaderComp = ({
    goBack = () => { },
    text
}) => {
    const navigation = useNavigation
    return (
      <View>
          {!!goBack ? <TouchableOpacity 
          onPress={!!goBack ? goBack : () => navigation.goBack()}>
              <Text></Text> 
          </TouchableOpacity> : <Text/>}
         <Text>{text}</Text>
         
      </View>   
  );
};

export default HeaderComp;
