import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            borderRadius: 50,
            borderWidth: 5,
            borderColor: "#11453B",
            width: 85,
            height: 85,
            overflow: "hidden",
          }}
        >
          <Image
            style={{ width: 75, height: 75 }}
            source={require("../assets/userImg.jpeg")}
          />
        </View>
        <Text> Hello User</Text>
      </View>
      <View style={{ flex: 2, borderRadius: 30, backgroundColor: "#11453B" }}>
        <Text style={{ color: "#d9ebcd", marginHorizontal: 30, marginTop: 40 }}>
          Wallet Balance
        </Text>
        <Text
          style={{
            color: "#fff",
            marginHorizontal: 30,
            marginTop: 10,
            marginBottom: 20,
            fontSize: 22,
            fontWeight: "800",
          }}
        >
          N15,067,789.00
        </Text>
        <View
          style={{
            width: "85%",
            margin: "auto",
            borderRadius: '50%',
            padding: 4,
            alignSelf: "center",
          }}
        >
          <Button
            // onPress={onPressLearnMore}
            title="Fund Wallet"
            color="#d9ebcd"
          />
        </View>
      </View>
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
});

export default Flex;
