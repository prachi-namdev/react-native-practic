import React, { Component } from 'react';
import { View, Text,Button,SafeAreaView } from 'react-native';
import styles from './styles';
import HeaderComp from '../../headerComponent/HeaderComp';
import { Card,Title,Paragraph} from 'react-native-paper';
const DetailsScreen = ({navigation}) => {
 // const {title} = route.params;
  // console.log("my props" ,title)
    return (
      <View style={styles.container}>
        <SafeAreaView>
        <HeaderComp goBack={()=> navigation.goBack()}/>
        <Text>  </Text>
        <Text style={{fontWeight:'bold',color:'#7d8ad1'}}>MOVIE DETAILS</Text>
        <View style={styles.card}>
          <Card>
            <Card.Content>
              <Title>Movie NAME</Title>
              <Paragraph> Movie Content</Paragraph>
            </Card.Content>
          </Card>
       
        <Button
          title="Go To Home"
          onPress={() => navigation.goBack()}
        />
         </View>
        </SafeAreaView>
      </View>
    );
  }

export default DetailsScreen;  