import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Tabs } from "expo-router";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Text } from "react-native";

export default function Layout() {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme === "dark" ? "#333" : "#f8f8f8",
          },
          headerTitleStyle: {
            color: theme === "dark" ? "white" : "black",
          },
          headerRight: () => (
            <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
              <Text style={{ color: theme === "dark" ? "white" : "black" }}>
                {theme === "dark" ? "🌙" : "☀️"}
              </Text>
            </TouchableOpacity>
          ),
        }}
      >
        <Tabs.Screen name="index" options={{ title: "Calendar" }} />
      </Tabs>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
