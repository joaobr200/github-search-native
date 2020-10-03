import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeader from "../../components/CustomHeader";

import Hero from "./Hero";
import SearchUser from "./SearchUser";
import SearchRepo from "./SearchRepo";
import Favorites from "./Favorites";

function Home() {
  const [showCustomHead, setShowCustomHeader] = React.useState(false);
  const Stack = createStackNavigator();
  return (
    <>
      {showCustomHead && <CustomHeader />}
      <Stack.Navigator
        initialRouteName="Hero"
        screenOptions={({ route }) => {
          if (route.name !== "Hero") {
            setShowCustomHeader(true);
          } else {
            setShowCustomHeader(false);
          }
        }}
      >
        <Stack.Screen
          name="Hero"
          component={Hero}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="SearchUser"
          component={SearchUser}
          options={{ title: "User" }}
        />
        <Stack.Screen
          name="SearchRepo"
          component={SearchRepo}
          options={{ title: "Repositories" }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{ title: "Favorites" }}
        />
      </Stack.Navigator>
    </>
  );
}

export default Home;
