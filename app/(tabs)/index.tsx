import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Swiper } from "rn-swiper-list";
import { useCallback } from "react";
import SwipeCard from "@/components/SwipeCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const renderCard = useCallback((i: number) => {
    return <SwipeCard />;
  }, []);

  return (
    <ThemedView style={styles.container}>
      <GestureHandlerRootView style={styles.swipeContainer}>
        <Swiper data={[0, 0, 0]} renderCard={renderCard} />
      </GestureHandlerRootView>
    </ThemedView>
  );
}

/*
<ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
  <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
*/

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
    alignItems: "center",
    justifyContent: "center",
  },
});
