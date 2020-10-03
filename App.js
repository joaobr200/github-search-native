import React from "react";
import { AppContextProvider } from "./context/AppContext"
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./routes/AppNavigation";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { AppLoading } from "expo";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigation />
        <StatusBar style="light" />
      </NavigationContainer>
    </AppContextProvider>
  );
}
