import React, { Component, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import navigationString from "../../constants/navigationString";
import styles from "./styles";
import HeaderComp from "../../headerComponent/HeaderComp";
import { color } from "react-native-reanimated";
import imagePath from "../../constants/imagePath";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import apicall from "../../redux/ApiActionCreator";

const HomeScreen = ({ navigation }) => {
  state = {
    names: [
      { name: "Ben", id: 1 },
      { name: "Susan", id: 2 },
      { name: "Robert", id: 3 },
      { name: "Mary", id: 4 },
      { name: "Daniel", id: 5 },
      { name: "Laura", id: 6 },
      { name: "John", id: 7 },
      { name: "Debra", id: 8 },
      { name: "Aron", id: 9 },
      { name: "Ann", id: 10 },
      { name: "Steve", id: 11 },
      { name: "Olivia", id: 12 },
    ],
  };
  // const GotoDetail = () =>{
  //  navigation.navigate(navigationString.DetailScreen),
  //  {title:"Welcome to detail screen"}

  // }

  const dispatch = useDispatch();
  const data = useSelector((state) => state.ApiReducer.data);
  const loading = useSelector((state) => state.ApiReducer.loading);
  useEffect(() => {
    dispatch(apicall("https://jsonplaceholder.typicode.com/posts"));
  }, []);

  return (
    // <SafeAreaView>
    //   <HeaderComp />

    //   <View style={styles.container}>
    //     <ScrollView>
    //       {this.state.names.map((item, index) => (
    //         <View key={item.id} style={styles.item}>
    //           <Text>{item.name}</Text>
    //         </View>
    //       ))}
    //     </ScrollView>
    //     <Image source={imagePath.home_movie} style={styles.img} />
    //     <View style={styles.button}>
    //       <Button
    //         title="Go to Details"
    //         onPress={() => {
    //           navigation.navigate(navigationString.DetailScreen, {
    //             title: "Welcome to detail screen",
    //           });
    //         }}
    //       />
    //     </View>

    //   </View>
    // </SafeAreaView>
    <View
      style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
    >
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.userId}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default HomeScreen;
