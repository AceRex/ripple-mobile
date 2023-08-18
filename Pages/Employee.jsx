import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";

const Employee = () => {
  const [press, setPress] = useState("all-employee");
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontFamily: "font1", fontSize: 17, textAlign: "center" }}>
        Eazipay's Team
      </Text>
      <ImageBackground
        source={require("../assets/bg-vector.png")}
        style={{
          flex: 2,
          borderRadius: 30,
          padding: "8%",
          backgroundColor: "#11453B",
          overflow: "hidden",
          marginTop: "17%",
        }}
      >
        <Text
          style={{
            fontFamily: "font5",
            color: "#d9ebcd",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          Total Employee
        </Text>
        <Text
          style={{
            fontFamily: "font1",
            color: "#fff",
            marginHorizontal: 10,
            marginTop: 15,
            marginBottom: 10,
            fontSize: 22,
          }}
        >
          11264
        </Text>
      </ImageBackground>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "7%",
          width: "100%",
          borderWidth: 1,
          padding: "2%",
          borderRadius: 20,
          borderColor: "#dfdfdf",
        }}
      >
        <Pressable
          onPress={(e) => setPress("all-employee")}
          style={
            press === "all-employee"
              ? {
                  width: "50%",
                  backgroundColor: "#11453b",
                  paddingVertical: "6.8%",
                  textAlign: "center",
                  borderRadius: 15,
                }
              : {
                  width: "50%",
                  backgroundColor: "#f2f1f1",
                  paddingVertical: "6.8%",
                  textAlign: "center",
                  borderRadius: 15,
                  color: "#11453b",
                }
          }
        >
          <Text
            style={
              press === "all-employee"
                ? {
                    fontFamily: "font5",
                    textAlign: "center",
                    color: "#ffffff",
                  }
                : {
                    fontFamily: "font5",
                    textAlign: "center",
                    color: "#11453b",
                  }
            }
          >
            All Employee
          </Text>
        </Pressable>
        <Pressable
          onPress={(e) => setPress("dept")}
          style={
            press === "dept"
              ? {
                  width: "50%",
                  backgroundColor: "#11453b",
                  paddingVertical: "6.8%",
                  textAlign: "center",
                  borderRadius: 15,
                }
              : {
                  width: "50%",
                  backgroundColor: "#f2f1f1",
                  paddingVertical: "6.8%",
                  textAlign: "center",
                  borderRadius: 15,
                  color: "#11453b",
                }
          }
        >
          <Text
            style={
              press === "dept"
                ? {
                    fontFamily: "font5",
                    textAlign: "center",
                    color: "#ffffff",
                  }
                : {
                    fontFamily: "font5",
                    textAlign: "center",
                    color: "#11453b",
                  }
            }
          >
            Department
          </Text>
        </Pressable>
      </View>
      {press === "all-employee" ? (
        <View style={{ padding: "5%" }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
<TextInput />
          </View>
          <Text>Department</Text>
        </View>
      ) : (
        <Text>Department</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default Employee;
