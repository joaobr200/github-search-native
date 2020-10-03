import React from "react";
import {AppContext} from "../context/AppContext";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import UserDetails from "../pages/UserDetails";


function AppNavigation() {
  const Stack = createStackNavigator();
  const ctx = React.useContext(AppContext);
  return (
    <>
    <Stack.Navigator initialRouteName="Home"
      headerMode=""

    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserDetails" component={UserDetails}  />
    </Stack.Navigator>
    </>
  );
}

export default AppNavigation;
