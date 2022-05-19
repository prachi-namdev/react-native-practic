// In App.js in a new project
import * as React from "react";
import Routes from "./src/navigation/Routes";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";
import HomeScreen from "./src/component";

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Routes />

        {/* <HomeScreen /> */}
      </View>
    </Provider>
  );
};

export default App;
