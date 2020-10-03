import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import CustomHeader from "../components/CustomHeader";

import Home from "../pages/Home";
import UserDetails from "../pages/UserDetails";
import Repositories from "../pages/Repositories";

function AppNavigation() {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <View />,
          }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="Repositories"
          component={Repositories}
          options={{
            header: () => <CustomHeader />,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

export default AppNavigation;
