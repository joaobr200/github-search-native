import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";

import SearchUser from "./SearchUser";
import SearchRepo from "./SearchRepo";
import Favorites from "./Favorites";

function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="SearchUser"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "SearchUser") {
            iconName = "user";
          } else if (route.name === "SearchRepo") {
            iconName = "folder1";
          } else if (route.name === "Favorites") {
            iconName = "hearto";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#e1e1e6",
        tabStyle: {
          backgroundColor: "#4F4F4F",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="SearchUser"
        component={SearchUser}
        options={{ title: "User" }}
      />
      <Tab.Screen
        name="SearchRepo"
        component={SearchRepo}
        options={{ title: "Repositories" }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
    </Tab.Navigator>
  );
}

export default Home;
