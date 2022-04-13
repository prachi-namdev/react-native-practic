import React from 'react'
import {View,Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styles from './styles';

 const login = () => {
  return (
    <View style={styles.container}>
      <TextInput
      label="Email"
      onChangeText={text => setText(text)}
      />
       <TextInput
       label="Password"
       onChangeText={text => setText(text)}
       /> 
      
    <Button style={styles.button}>LOGIN</Button>
    </View>
  )
}
export default login
