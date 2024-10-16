import { Redirect, Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { LogBox } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

LogBox.ignoreLogs(['Clerk: ...']);

export default function TabLayout() {
    const { isSignedIn } = useAuth();
    const colorScheme = useColorScheme();

    if(!isSignedIn) {
        return <Redirect href="/(auth)/" />;
    }

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "home" : "home-outline"} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "Explore",
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "code-slash" : "code-slash-outline"} color={color} />,
				}}
			/>
		</Tabs>
	);
}
