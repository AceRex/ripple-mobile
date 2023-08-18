import React from "react";
import {
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const Flex = () => {
  return (
    <ScrollView
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "70%",
          }}
        >
          <View
            style={{
              borderRadius: 50,
              borderWidth: 5,
              borderColor: "#11453B",
              width: 80,
              height: 80,
              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: 70, height: 70 }}
              source={require("../assets/userImg.jpeg")}
            />
          </View>
          <Text style={{ fontFamily: "font5", fontSize: 17, color: "#292A29" }}>
            {" "}
            Hello User
          </Text>
        </View>
        <TouchableOpacity
          style={{ width: 30, position: "relative", marginTop: -7 }}
        >
          <Octicons name="bell" size={23} color="#292A29" />
          <View
            style={{
              backgroundColor: "red",
              top: -2,
              right: 7,
              borderRadius: 20,
              borderColor: "#edf5ff",
              borderWidth: 2,
              padding: 5,
              position: "absolute",
            }}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../assets/bg-vector.png")}
        style={{
          flex: 2,
          borderRadius: 30,
          padding: 20,
          backgroundColor: "#11453B",
          overflow: "hidden",
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
          Wallet Balance
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
          N15,067,789.00
        </Text>
        <TouchableOpacity
          style={{
            width: "95%",
            margin: "auto",
            borderRadius: 20,
            padding: 14,
            backgroundColor: "#d9ebcd",
            alignSelf: "center",
            marginTop: 12,
          }}
        >
          <Text
            style={{
              fontFamily: "font1",
              fontWeight: 600,
              fontSize: 12,
              textAlign: "center",
              color: "#11453B",
            }}
          >
            Fund Wallet
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={{ flex: 2 }}>
        <View>
          <Text
            style={{
              fontFamily: "font5",
              textTransform: "uppercase",
              color: "#292a29",
              marginTop: 30,
              fontSize: 13,
              letterSpacing: 1,
            }}
          >
            Quick stats
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "#f2f1f1",
              padding: 3,
              paddingVertical: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 13,
                color: "#292a29",
                marginBottom: 10,
              }}
            >
              {" "}
              Total Payroll
            </Text>
            <Text
              style={{ fontFamily: "font1", fontSize: 13, color: "#292a29" }}
            >
              {" "}
              N 2,293,044,345.05
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#f2f1f1",
              padding: 7,
              paddingVertical: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 13,
                color: "#292a29",
                marginBottom: 10,
              }}
            >
              {" "}
              Total Employee
            </Text>
            <Text
              style={{ fontFamily: "font1", fontSize: 13, color: "#292a29" }}
            >
              {" "}
              10,000
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginBottom: 80 }}>
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontFamily: "font5",
              textTransform: "uppercase",
              color: "#292a29",
              marginTop: 30,
              fontSize: 13,
              letterSpacing: 1,
            }}
          >
            Quick Actions
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            borderWidth: 1,
            borderRadius: 20,
            borderColor: "#dfdfdf",
            paddingHorizontal: 20,
            paddingVertical: 35,
          }}
        >
          <TouchableOpacity style={{ width: 85 }}>
            <View
              style={{
                backgroundColor: "#f0f7eb",
                borderRadius: 20,
                width: 80,
                margin: "auto",
                padding: 25,
              }}
            >
              <FontAwesome5
                name={"money-bill-wave-alt"}
                size={25}
                color="#11453b"
                style={{ textAlign: "center" }}
              />
            </View>
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 11,
                color: "#515251",
                marginTop: 12,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Pay Salaries
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85 }}>
            <View
              style={{
                backgroundColor: "#ffedec",
                borderRadius: 20,
                width: 80,
                margin: "auto",
                padding: 25,
              }}
            >
              <AntDesign
                name={"adduser"}
                size={25}
                color="#ea4e4b"
                style={{ textAlign: "center" }}
              />
            </View>
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 11,
                color: "#515251",
                marginTop: 12,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Add Employee
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85 }}>
            <View
              style={{
                backgroundColor: "#f0eeff",
                borderRadius: 20,
                width: 80,
                margin: "auto",
                padding: 25,
              }}
            >
              <FontAwesome5
                name={"envelope-open-text"}
                size={25}
                color="#5542cf"
                style={{ textAlign: "center" }}
              />
            </View>
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 11,
                color: "#515251",
                marginTop: 12,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Send Payslip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85 }}>
            <View
              style={{
                backgroundColor: "#fff2db",
                borderRadius: 20,
                width: 80,
                padding: 25,
              }}
            >
              <MaterialCommunityIcons
                name={"file-edit-outline"}
                size={25}
                color="#f59e0b"
                style={{ textAlign: "center" }}
              />
            </View>
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 11,
                color: "#515251",
                marginTop: 12,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Edit Salaries
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85 }}>
            <View
              style={{
                backgroundColor: "#e5f6fe",
                borderRadius: 20,
                width: 80,
                padding: 25,
              }}
            >
              <FontAwesome5
                name={"hand-holding-usd"}
                size={25}
                color="#116487"
                style={{ textAlign: "center" }}
              />
            </View>
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 11,
                color: "#515251",
                marginTop: 12,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Get A loan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85 }}>
            <View
              style={{
                backgroundColor: "#e7fbef",
                borderRadius: 20,
                width: 80,
                padding: 25,
              }}
            >
              <FontAwesome5
                name={"telegram-plane"}
                size={25}
                color="#219653"
                style={{ textAlign: "center" }}
              />
            </View>
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 11,
                color: "#515251",
                marginTop: 12,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Make A Transfer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85 }}>
            <View
              style={{
                backgroundColor: "#EAF6FC",
                borderRadius: 20,
                width: 80,
                padding: 25,
              }}
            >
              <FontAwesome5
                name={"phone-alt"}
                size={25}
                color="#32A7E2"
                style={{ textAlign: "center" }}
              />
            </View>
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 11,
                color: "#515251",
                marginTop: 12,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Airtime
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85 }}>
            <View
              style={{
                backgroundColor: "#F8EDF9",
                borderRadius: 20,
                width: 80,
                padding: 25,
              }}
            >
              <Entypo
                name={"signal"}
                size={25}
                color="#B548C6"
                style={{ textAlign: "center" }}
              />
            </View>
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 11,
                color: "#515251",
                marginTop: 12,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Data
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 85 }}>
            <View
              style={{
                backgroundColor: "#FFF3E6",
                borderRadius: 20,
                width: 80,
                padding: 25,
              }}
            >
              <FontAwesome5
                name={"bolt"}
                size={25}
                color="#FF8700"
                style={{ textAlign: "center" }}
              />
            </View>
            <Text
              style={{
                fontFamily: "font5",
                fontSize: 11,
                color: "#515251",
                marginTop: 12,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Electricity
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
