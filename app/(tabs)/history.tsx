import Header from "@/components/Header";
import HistoryFilters from "@/components/HistoryFilters";
import HistoryResume from "@/components/HistoryResume";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function HistoryScreen() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const onFilterChange = (i: number) => {
    setSelectedFilter(i);
  };

  return (
    <ThemedView style={styles.container}>
      <Header />
      <ThemedView style={styles.content}>
        <ThemedText style={styles.title}>Historique de mes reviews</ThemedText>
        <ThemedView style={{ gap: 10 }}>
          <HistoryResume />
          <HistoryFilters
            selectedFilter={selectedFilter}
            onFilterChange={onFilterChange}
          />
        </ThemedView>
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
