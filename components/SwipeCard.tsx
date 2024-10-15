import testImage from "@/assets/images/Home/test-bg.jpg";
import { ThemedView } from "./ThemedView";
import { Image, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { CustomColors } from "@/constants/Colors";
import { InstagramFooter, InstagramHeader } from "./SwipeCard/InstagramCard";

export default function SwipeCard() {
  /*
  <ThemedView style={styles.container}>
      <Image source={testImage} style={styles.image} />
      <ThemedView style={styles.desc}>
        <ThemedText style={styles.accountNameText}>Account Name</ThemedText>
        <ThemedText style={styles.descText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          semper libero, eu sagittis enim. Ut quis mi turpis. Aenean quis
          aliquam nunc.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  */

  return (
    <ThemedView style={styles.container}>
      <InstagramHeader />
      <Image source={testImage} style={styles.image} />
      <InstagramFooter
        descText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          semper libero, eu sagittis enim. Ut quis mi turpis. Aenean quis
          aliquam nunc."
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    flex: 1,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    flex: 1,
  },
  desc: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    padding: 10,
    backgroundColor: CustomColors.grey,
  },
  accountNameText: {
    fontSize: 18,
    fontWeight: "700",
  },
  descText: {
    fontSize: 16,
  },
});
