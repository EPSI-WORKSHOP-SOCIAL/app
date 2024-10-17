import { ActivityIndicator, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Swiper } from "rn-swiper-list";
import { useCallback, useEffect, useState } from "react";
import SwipeCard from "@/components/SwipeCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import Header from "@/components/Header";
import { Socials } from "@/constants/Types";
import { CustomColors } from "@/constants/Colors";
import useAxios from "@/hooks/useAxios";

const FAKE_SWIPE_DATA: { type: Socials }[] = [
	{
		type: "Instagram",
	},
	{
		type: "X",
	},
	{
		type: "Instagram",
	},
];

export default function HomeScreen() {
    const [postsData, setPostsData] = useState([]);
    const { data, error, loading, fetchData } = useAxios();

    useEffect(() => {
        if(postsData.length) {
            return;
        }

        fetchData({ uri: 'post' });
    }, [data]);

	const renderCard = useCallback(({ type }: { type: Socials }) => {
		return <SwipeCard type={type} />;
	}, []);

	return (
		<ThemedView style={styles.container}>
			<Header />
			<ThemedView style={styles.content}>
                {loading ? <ActivityIndicator /> : <>
                    <ThemedView style={{ alignItems: "flex-end", backgroundColor: "transparent" }}>
                        <Link href="/info">
                            <Feather name="info" size={24} color="#8B929F" />
                        </Link>
                    </ThemedView>
                    <GestureHandlerRootView style={styles.swipeContainer}>
                        <Swiper
                            data={FAKE_SWIPE_DATA}
                            renderCard={renderCard}
                            cardStyle={{ height: "100%", width: "100%" }}
                        />
                    </GestureHandlerRootView>
                </>}
			</ThemedView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: CustomColors.grey,
	},
	content: {
		flex: 1,
		padding: 32,
		gap: 16,
		backgroundColor: CustomColors.grey,
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	swipeContainer: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "transparent",
	},
});
