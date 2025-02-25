import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Tabs } from "expo-router";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, Text } from "react-native";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const { theme, toggleTheme } = useThemeToggle();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "uk" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <I18nextProvider i18n={i18n}>
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
              <TouchableOpacity
                onPress={toggleTheme}
                style={{ marginRight: 15 }}
              >
                <Text style={{ color: theme === "dark" ? "white" : "black" }}>
                  {theme === "dark" ? "🌙" : "☀️"}
                </Text>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={toggleLanguage}
                style={{ marginLeft: 15 }}
              >
                <Text
                  style={{
                    color: "rgb(255, 213, 0)",
                    fontWeight: "600",
                  }}
                >
                  {i18n.language === "en" ? "EN" : "UK"}
                </Text>
              </TouchableOpacity>
            ),
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: t("calendar"),
              headerTitleAlign: "center",
            }}
          />
        </Tabs>
        <StatusBar style="auto" />
      </ThemeProvider>
    </I18nextProvider>
  );
}
