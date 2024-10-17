import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function HistoryResume() {
  const backgroundColor = useThemeColor({}, "grey");
  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">6.52 $</ThemedText>
        <ThemedText style={styles.limit}> / 10 $</ThemedText>
      </ThemedView>
      <ThemedText>3.48 $ avant notre paiement</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    gap: 6,
    padding: 10,
  },
  header: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "baseline",
  },
  limit: {
    fontSize: 24,
  },
});
