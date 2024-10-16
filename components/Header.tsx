import { ThemedView } from "./ThemedView";
import { Bar } from "react-native-progress";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import { CustomColors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
      <ThemedView style={styles.block}>
        <Feather name="image" size={24} color="#F3F5FA" />
        <ThemedText style={styles.title}>10</ThemedText>
      </ThemedView>
      <ThemedView style={styles.block}>
        <ThemedText style={styles.title}>200 XP</ThemedText>
        <ThemedView
          style={{ width: 150, height: 6, backgroundColor: "transparent" }}
        >
          <Bar width={150} height={6} progress={0.6} color="#F3F5FA" />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#5581FE",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 20,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  block: {
    backgroundColor: "transparent",
    gap: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "AfacadFluxMedium",
    lineHeight: 30,
    color: "#F3F5FA"
  },
});
