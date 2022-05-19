import React, { useEffect, useRef } from "react";
import { View, Text, ImageBackground, Animated, Button } from "react-native";
// import { Button, TextInput } from "react-native-paper";
import styles from "./styles";
import imagePath from "../../constants/imagePath";

const login = () => {
  const animationVariable = useRef(new Animated.Value(0)).current;

  const runAnimationOnClick = () => {
    Animated.spring(animationVariable, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.View
        style={{
          height: 200,
          width: 200,
          backgroundColor: "blue",
          transform: [
            {
              scale: animationVariable.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 2],
              }),
            },
          ],
        }}
      />
      <Button title="scale" onPress={runAnimationOnClick} />
    </View>
  );
};
export default login;
