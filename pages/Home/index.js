import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";

import SearchUser from "../../components/SearchUser";
import SearchRepo from "../../components/SearchRepo";
import Favorites from "../../components/Favorites";

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
        inactiveTintColor: "#D3D3D3",
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
