import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "./Profile";
import Repos from "./Repos";

const UserDetails = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Repos" component={Repos} />
    </Stack.Navigator>
  );
};

export default UserDetails;
