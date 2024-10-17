import testImage from "@/assets/images/Home/test-bg.jpg";
import { ThemedView } from "./ThemedView";
import { Image, StyleSheet } from "react-native";
import { InstagramFooter, InstagramHeader } from "./SwipeCard/InstagramCard";
import { XFooter, XHeader } from "./SwipeCard/XCard";
import { Socials } from "@/constants/Types";
import { useThemeColor } from "@/hooks/useThemeColor";

interface SwipeCardProps {
  type: Socials;
}

export default function SwipeCard({ type }: SwipeCardProps) {
  const shadowColor = useThemeColor({}, "shadow");
  return (
    <ThemedView style={[styles.container, { shadowColor }]}>
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
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 8,
      width: 8,
    },
    elevation: 10,
    zIndex: 20,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    flex: 1,
  },
});
