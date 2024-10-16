import testImage from "@/assets/images/Home/test-bg.jpg";
import { ThemedView } from "./ThemedView";
import { Image, StyleSheet } from "react-native";
import { CustomColors } from "@/constants/Colors";
import { InstagramFooter, InstagramHeader } from "./SwipeCard/InstagramCard";
import { XFooter, XHeader } from "./SwipeCard/XCard";
import { Socials } from "@/constants/Types";

interface SwipeCardProps {
  type: Socials;
}

export default function SwipeCard({ type }: SwipeCardProps) {
  return (
    <ThemedView style={styles.container}>
      {type === "Instagram" ? (
        <InstagramHeader />
      ) : (
        <XHeader descText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed semper libero, eu sagittis enim. Ut quis mi turpis. Aenean quis aliquam nunc." />
      )}
      <Image source={testImage} style={styles.image} />
      {type === "Instagram" ? (
        <InstagramFooter
          descText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          semper libero, eu sagittis enim. Ut quis mi turpis. Aenean quis
          aliquam nunc."
        />
      ) : (
        <XFooter />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    flex: 1,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 8,
      width: 8,
    },
    elevation: 10,
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
