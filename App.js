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

export default function App() {
  const [appReady, setAppReady] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  async function initAsync() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  if (!appReady || !fontsLoaded) {
    initAsync().then(() => setAppReady(true));
    return null;
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
