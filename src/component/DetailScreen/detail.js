import React, { Component, useEffect, useState } from "react";
import { Animated, View, Text, Button, SafeAreaView } from "react-native";
import styles from "./styles";
import HeaderComp from "../../headerComponent/HeaderComp";
import { Card, Title, Paragraph } from "react-native-paper";
import { delay } from "react-native-reanimated/lib/types/lib/reanimated2/animation/delay";

import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";
const DetailsScreen = ({ navigation }) => {
  const [isFlag, setIsFlag] = useState(false);
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  useEffect(() => {
    async function changeFlag() {
      await delay(1000);
      setIsFlag(!isFlag);
    }

    changeFlag();
  }, []);

  const delay = async (ms) => new Promise((res) => setTimeout(res, ms));
  // const {title} = route.params;
  // console.log("my props" ,title)
  // Handle animation
  const avatarRef = React.createRef();
  const firstLineRef = React.createRef();
  const secondLineRef = React.createRef();
  const thirdLineRef = React.createRef();

  React.useEffect(() => {
    const facebookAnimated = Animated.stagger(400, [
      avatarRef.current.getAnimated(),
      Animated.parallel([
        firstLineRef.current.getAnimated(),
        secondLineRef.current.getAnimated(),
        thirdLineRef.current.getAnimated(),
      ]),
    ]);
    Animated.loop(facebookAnimated).start();
  }, []);

  return (
    <View>
      <ShimmerPlaceholder visible={isFlag}>
        <Text>Wow, awesome here.</Text>
        <SafeAreaView style={styles.container}>
          <HeaderComp goBack={() => navigation.goBack()} />
          <View>{isFlag && <Text> Hello, i am your system! </Text>}</View>
          <Text style={{ fontWeight: "bold", color: "#7d8ad1" }}>
            MOVIE DETAILS
          </Text>
          <View style={styles.card}>
            <Card>
              <Card.Content>
                <Title>Movie NAME</Title>
                <Paragraph> Movie Content</Paragraph>
              </Card.Content>
            </Card>

            <Button title="Go To Home" onPress={() => navigation.goBack()} />
          </View>
        </SafeAreaView>
      </ShimmerPlaceholder>
      <ShimmerPlaceholder visible={isFlag}></ShimmerPlaceholder>
      <View style={{ flexDirection: "row" }}>
        <ShimmerPlaceholder ref={avatarRef} stopAutoRun />
        <View style={{ justifyContent: "space-between" }}>
          <ShimmerPlaceholder ref={firstLineRef} stopAutoRun />
          <ShimmerPlaceholder ref={secondLineRef} stopAutoRun />
          <ShimmerPlaceholder ref={thirdLineRef} stopAutoRun />
        </View>
      </View>
      {/* <SafeAreaView style={styles.container}>
        <HeaderComp goBack={() => navigation.goBack()} />
        <View>{isFlag && <Text> Hello, i am your system! </Text>}</View>
        <Text style={{ fontWeight: "bold", color: "#7d8ad1" }}>
          MOVIE DETAILS
        </Text>
        <View style={styles.card}>
          <Card>
            <Card.Content>
              <Title>Movie NAME</Title>
              <Paragraph> Movie Content</Paragraph>
            </Card.Content>
          </Card>

          <Button title="Go To Home" onPress={() => navigation.goBack()} />
        </View>
      </SafeAreaView> */}
    </View>
  );
};

export default DetailsScreen;
