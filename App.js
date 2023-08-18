import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Pages/Index";
import Employee from './Pages/Employee'
import Loans from './Pages/Loans'
import Payroll from './Pages/Payroll'
import More from './Pages/More'


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
