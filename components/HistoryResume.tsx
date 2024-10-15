import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { CustomColors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

export default function HistoryResume() {
  return (
    <ThemedView style={styles.container}>
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
    backgroundColor: CustomColors.grey,
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
