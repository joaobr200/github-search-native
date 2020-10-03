import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppContextProvider } from "./context/AppContext";
import ThemeProvider from "./styles/theme";
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
    <ThemeProvider>
      <AppContextProvider>
        <NavigationContainer>
          <AppNavigation />
          <StatusBar style="light" />
        </NavigationContainer>
      </AppContextProvider>
    </ThemeProvider>
  );
}
