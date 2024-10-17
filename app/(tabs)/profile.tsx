import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Pressable } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useClerk } from "@clerk/clerk-expo";

export default function ProfileScreen() {
  const { signOut } = useClerk();

  return (
    <ThemedView style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => signOut({ redirectUrl: "/" })}
      >
        <Feather name="log-out" size={24} color="white" />
        <ThemedText style={styles.textButton}>Se déconnecter</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 32,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "red",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  textButton: {
    color: "white",
    fontFamily: "AfacadFluxMedium",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
