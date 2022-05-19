import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen,DetailScreen } from '../component/index';
import navigationString from '../constants/navigationString';
import TabRoutes from './TabRoutes';
import DrawerNavigation from './Drawer';
import {Appbar} from 'react-native-paper';

const Stack = createNativeStackNavigator();


export default function StackNavigation(){
  return(
   <NavigationContainer>
    <Stack.Navigator 
     screenOptions={{headerShown: false }}
      initialRouteName={navigationString.HomeScreen}>
        <Stack.Screen 
          options={{title:"home",
          headerStyle:{
            backgroundColor: "black",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "black"
          },
          headerLeft: () => (
            <Appbar.Action
              icon='menu'
              color='black'
              size={24}
              style={{ marginLeft: 10 }}
              onPress={() =>
                navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
          ),
        }} name={navigationString.HomeScreen} 
          component={DrawerNavigation} />
        <Stack.Screen 
          options={{title:"Details"}} name={navigationString.DetailScreen} 
          component={DetailScreen} />

      </Stack.Navigator>
   </NavigationContainer>
  )
}

