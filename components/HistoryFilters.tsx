import { Pressable, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface HistoryFiltersProps {
  selectedFilter: number;
  onFilterChange: (filter: number) => void;
}

const FILTERS_LIST = ["Tous", "En attente", "Validé"];

export default function HistoryFilters({
  selectedFilter,
  onFilterChange,
}: HistoryFiltersProps) {
  const backgroundColor = useThemeColor({}, "grey");
  return (
    <ThemedView style={styles.container}>
      {FILTERS_LIST.map((_, i) => (
        <Pressable
          style={[
            styles.filter,
            {
              backgroundColor:
                selectedFilter === i ? backgroundColor : "transparent",
              borderColor: backgroundColor,
            },
          ]}
          key={i}
          onPress={() => onFilterChange(i)}
        >
          <ThemedText>{_}</ThemedText>
        </Pressable>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  filter: {
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
});
