import React, { Component} from 'react';
import { View, Image,Text,Button,SafeAreaView} from 'react-native';
import navigationString from '../../constants/navigationString';
import styles from './styles'
import HeaderComp from '../../headerComponent/HeaderComp';
import { color } from 'react-native-reanimated';
import imagePath from '../../constants/imagePath';

const HomeScreen = ({navigation}) => {

  // const GotoDetail = () =>{
  //  navigation.navigate(navigationString.DetailScreen),
  //  {title:"Welcome to detail screen"}

  // } 

    return (
      <View style = {styles.container}>
        <SafeAreaView>
        <HeaderComp/>
        </SafeAreaView>
        <Image source={imagePath.home_movie} style={styles.img}/>
        <View style = {styles.button}>
        <Button title="Go to Details"
        onPress={() =>{
          navigation.navigate(navigationString.DetailScreen,
          {title:"Welcome to detail screen"});
          }}
        />
        </View>
      </View>
    );
};


export default HomeScreen;  