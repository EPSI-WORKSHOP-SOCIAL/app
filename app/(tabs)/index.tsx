import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Swiper } from "rn-swiper-list";
import { useCallback } from "react";
import SwipeCard from "@/components/SwipeCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import Header from "@/components/Header";

export default function HomeScreen() {
  const renderCard = useCallback((i: number) => {
    return <SwipeCard />;
  }, []);

  return (
    <ThemedView style={styles.container}>
      <Header />
      <ThemedView style={styles.content}>
        <ThemedView style={{ alignItems: "flex-end" }}>
          <Link href="/info">
            <Feather name="info" size={24} color="black" />
          </Link>
        </ThemedView>
        <GestureHandlerRootView style={styles.swipeContainer}>
          <Swiper
            data={[0, 0, 0]}
            renderCard={renderCard}
            cardStyle={{ height: "100%", width: "100%" }}
          />
        </GestureHandlerRootView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  swipeContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
