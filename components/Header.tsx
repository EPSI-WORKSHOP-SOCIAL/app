import { ThemedView } from "./ThemedView";
import { Bar } from "react-native-progress";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import { CustomColors } from "@/constants/Colors";

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
      <ThemedText style={styles.title}>200 XP</ThemedText>
      <Bar width={200} progress={0.6} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: CustomColors.grey,
    justifyContent: "flex-end",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 18,
    fontStyle: "italic",
  },
});
