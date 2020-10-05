import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Hero from "./Hero";

function Home() {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Hero" headerMode="screen">
        <Stack.Screen
          name="Hero"
          component={Hero}
          options={{ title: "Hero" }}
        />
      </Stack.Navigator>
    </>
  );
}

export default Home;
