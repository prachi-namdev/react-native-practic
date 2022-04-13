import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen,DetailScreen } from '../component/index';
import navigationString from '../constants/navigationString';
import TabRoutes from './TabRoutes';
import DrawerNavigation from './Drawer';
const Stack = createNativeStackNavigator();


export default function StackNavigation(){
  return(
   <NavigationContainer>
    <Stack.Navigator 
     screenOptions={{headerShown: false}}
      initialRouteName={navigationString.HomeScreen}>
        <Stack.Screen 
          options={{title:"home"}} name={navigationString.HomeScreen} 
          component={DrawerNavigation} />
        <Stack.Screen 
          options={{title:"Details"}} name={navigationString.DetailScreen} 
          component={DetailScreen} />

      </Stack.Navigator>
   </NavigationContainer>
  )
}

