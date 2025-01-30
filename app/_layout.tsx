import { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, View } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

import "../global.css";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemedText from "@/presentation/shared/ThemedText";

export default function RootLayout() {
  const backgroundColor = useThemeColor(
    { light: "gray", dark: "green" },
    "background"
  );
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ThemedView>
          <ThemedText className="mt-20" type="h1">
            PRUEBA
          </ThemedText>
        </ThemedView>
        {/* <Stack
        screenOptions={{
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: "pink",
          },
          headerStyle: {
            backgroundColor: "pink",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Inicio" }} />s
      </Stack> */}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
