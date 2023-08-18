import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import Home from "./Pages/Index";
import Employee from "./Pages/Employee";
import Loans from "./Pages/Loans";
import Payroll from "./Pages/Payroll";
import More from "./Pages/More";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        font1: require("./assets/fonts/Aeonik/AeonikTRIAL-Bold.otf"),
        font2: require("./assets/fonts/Aeonik/AeonikTRIAL-BoldItalic.otf"),
        font3: require("./assets/fonts/Aeonik/AeonikTRIAL-Light.otf"),
        font4: require("./assets/fonts/Aeonik/AeonikTRIAL-LightItalic.otf"),
        font5: require("./assets/fonts/Aeonik/AeonikTRIAL-Regular.otf"),
        font6: require("./assets/fonts/Aeonik/AeonikTRIAL-RegularItalic.otf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#11453B",
          inactiveTintColor: "#292A29",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Employee"
          component={Employee}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Payroll"
          component={Payroll}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Loans"
          component={Loans}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
