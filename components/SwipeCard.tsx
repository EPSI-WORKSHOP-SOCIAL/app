import testImage from "@/assets/images/Home/test-bg.jpg";
import { ThemedView } from "./ThemedView";
import { Image, StyleSheet } from "react-native";

export default function SwipeCard() {
  return (
    <ThemedView style={styles.container}>
      <Image source={testImage} style={styles.image} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 300,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
