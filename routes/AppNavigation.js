import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import UserDetails from "../pages/UserDetails";

function AppNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
