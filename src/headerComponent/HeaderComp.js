import { useNavigation } from '@react-navigation/native';
import React, {Component} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const HeaderComp = ({
    goBack = () => { },
    text
}) => {
    const navigation = useNavigation
    return (
      <View style={styles.container}>
          
          {!!goBack ? <TouchableOpacity 
          onPress={!!goBack ? goBack : () => navigation.goBack()}>
              <Text></Text> 
          </TouchableOpacity> : <Text/>}
         <Text>{text}</Text>
         
      </View>   
  );
};

export default HeaderComp;
