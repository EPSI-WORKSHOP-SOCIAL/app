import { Redirect, Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { LogBox } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

LogBox.ignoreLogs(["Clerk: ..."]);

export default function TabLayout() {
  const { isSignedIn } = useAuth();
  const colorScheme = useColorScheme();

  if (!isSignedIn) {
    return <Redirect href="/(auth)/" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        headerStyle: {
          backgroundColor: "transparent",
        },
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
          backgroundColor: "white",
          shadowColor: "transparent",
          borderColor: "transparent",
        },
        headerBackgroundContainerStyle: {
          backgroundColor: "transparent",
        },
        tabBarLabelStyle: {
          fontSize: 16,
          gap: 2,
          fontFamily: "AfacadFluxMedium",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"home"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Historique",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"bar-chart"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"user"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
