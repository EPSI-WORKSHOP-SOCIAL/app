import Header from "@/components/Header";
import HistoryResume from "@/components/HistoryResume";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function HistoryScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header />
      <ThemedView style={styles.content}>
        <ThemedText style={styles.title}>Historique de mes reviews</ThemedText>
        <HistoryResume />
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
  title: {
    fontWeight: 700,
    fontSize: 24,
  },
});
