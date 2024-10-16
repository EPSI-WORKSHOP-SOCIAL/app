import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function SignLayout() {
    const { isSignedIn } = useAuth();

    if(isSignedIn) {
        return <Redirect href="/(tabs)/" />;
    }

	return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="signin" />
        </Stack>
	);
}
