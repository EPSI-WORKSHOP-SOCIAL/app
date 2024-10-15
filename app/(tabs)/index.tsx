import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Swiper } from "rn-swiper-list";
import { useCallback } from "react";
import SwipeCard from "@/components/SwipeCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";

export default function HomeScreen() {
  const renderCard = useCallback((i: number) => {
    return <SwipeCard />;
  }, []);

  return (
    <ThemedView style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
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
