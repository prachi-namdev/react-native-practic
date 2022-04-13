// In App.js in a new project
import * as React from 'react';
import Routes from './src/navigation/Routes'
import {View} from 'react-native'

const App = () => {
  return (
    <View style={{flex:1}}>
       <Routes/>
    </View>
  );
}


export default App;