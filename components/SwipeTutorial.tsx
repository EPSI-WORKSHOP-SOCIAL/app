import { StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useEffect } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function SwipeTutorial() {
  const offset = useSharedValue<number>(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));
  const backgroundColor = useThemeColor({}, "grey");

  useEffect(() => {
    const id = setTimeout(() => {
      offset.value = withSpring(1080, { velocity: 30, stiffness: 10 });
    }, 3500);
    return () => clearTimeout(id);
  }, []);

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "transparent",
          zIndex: 15,
        },
        animatedStyles,
      ]}
    >
      <LinearGradient
        locations={[0, 0.7]}
        colors={["transparent", "white"]}
        style={styles.container}
      >
        <ThemedView style={styles.directionContainer}>
          <ThemedView style={styles.directionBlock}>
            <MaterialIcons name="swipe-left" size={24} color="black" />
            <ThemedView style={styles.directionTextBlock}>
              <ThemedText style={styles.headText}>Swipe à gauche</ThemedText>
              <ThemedText>Si le post doit être retiré</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView
            style={{ width: 3, backgroundColor: backgroundColor }}
          ></ThemedView>
          <ThemedView style={styles.directionBlock}>
            <MaterialIcons name="swipe-right" size={24} color="black" />
            <ThemedView style={styles.directionTextBlock}>
              <ThemedText style={styles.headText}>Swipe à droite</ThemedText>
              <ThemedText>Si le post doit être gardé</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView
          style={{ height: 3, backgroundColor: backgroundColor }}
        ></ThemedView>
        <ThemedView style={styles.directionBlock}>
          <MaterialIcons name="swipe-up" size={24} color="black" />
          <ThemedView style={styles.directionTextBlock}>
            <ThemedText style={styles.headText}>Swipe vers le haut</ThemedText>
            <ThemedText>Pour passer au post suivant</ThemedText>
          </ThemedView>
        </ThemedView>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    justifyContent: "flex-end",
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 15,
  },
  directionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  directionBlock: {
    gap: 8,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  directionTextBlock: {
    alignItems: "center",
    backgroundColor: "transparent",
  },
  headText: {
    fontSize: 20,
    fontFamily: "AfacadFluxSemiBold",
  },
});
