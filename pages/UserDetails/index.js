import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Profile from "./Profile";
import Repos from "./Repos";

const UserDetails = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "#e1e1e6",
          style:{
            backgroundColor: "#000"
          },
          labelStyle: {
            activeTintColor: "#fff",
            inactiveTintColor: "#e1e1e6"
          },
          indicatorStyle: {
            backgroundColor: "#fff"
          }
        }}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Repos" component={Repos} />
    </Tab.Navigator>
  );
};

export default UserDetails;
