import { Pressable, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { CustomColors } from "@/constants/Colors";

interface HistoryFiltersProps {
  selectedFilter: number;
  onFilterChange: (filter: number) => void;
}

const FILTERS_LIST = ["Tous", "En attente", "Validé"];

export default function HistoryFilters({
  selectedFilter,
  onFilterChange,
}: HistoryFiltersProps) {
  return (
    <ThemedView style={styles.container}>
      {FILTERS_LIST.map((_, i) => (
        <Pressable
          style={[
            styles.filter,
            {
              backgroundColor:
                selectedFilter === i ? CustomColors.grey : "transparent",
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
    borderColor: CustomColors.grey,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
});
