import { StyleSheet, ScrollView } from "react-native";
import { Fragment } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { CustomColors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function ListItem({
  date,
  social,
  number,
  status,
}: {
  date: string;
  social: string;
  number: string;
  status: string;
}) {
    const isFinished = status === "finished";

  return (
    <ThemedView style={styles.listContainer}>
      <ThemedText style={{ width: 120 }}>{date}</ThemedText>
      <ThemedView>
        <ThemedText>{social}</ThemedText>
        <ThemedText>{`N°${number}`}</ThemedText>
      </ThemedView>
      <FontAwesome
        style={[styles.icon, { right: isFinished ? 5 : 11 }]}
        name={isFinished ? "check" : "question"}
        size={24}
        color={isFinished ? "green" : "orange"}
      />
    </ThemedView>
  );
}

const FAKE_LIST = [
  {
    date: "31/03/2024",
    social: "Instagram",
    number: "201998",
    status: "waiting",
  },
  {
    date: "31/03/2024",
    social: "Instagram",
    number: "201998",
    status: "finished",
  },
  {
    date: "31/03/2024",
    social: "Instagram",
    number: "201998",
    status: "finished",
  },
];

export default function HistoryList() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <ThemedView style={styles.header}>
        <ThemedText style={[styles.headerText, { width: 120 }]}>
          Date
        </ThemedText>
        <ThemedText style={styles.headerText}>Détail</ThemedText>
      </ThemedView>
      {FAKE_LIST.map((_, i) => (
        <Fragment key={i}>
          <ThemedView style={styles.divider}></ThemedView>
          <ListItem
            social={_.social}
            date={_.date}
            number={_.number}
            status={_.status}
          />
        </Fragment>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
  },
  header: {
    flexDirection: "row",
  },
  headerText: {
    fontWeight: 600,
  },
  divider: {
    height: 4,
    width: "100%",
    backgroundColor: CustomColors.grey,
  },
  listContainer: {
    flexDirection: "row",
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});
