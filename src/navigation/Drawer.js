import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './TabRoutes';
import { Login,Profile } from '../component';


function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Feed">
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{ drawerLabel: 'Login' }}
      />
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
      <MyDrawer />
    // </NavigationContainer>
  );
}
