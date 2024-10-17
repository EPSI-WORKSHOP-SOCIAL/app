import testImage from "@/assets/images/Home/test-bg.jpg";
import { ThemedView } from "./ThemedView";
import { Image, StyleSheet } from "react-native";
import { InstagramFooter, InstagramHeader } from "./SwipeCard/InstagramCard";
import { XFooter, XHeader } from "./SwipeCard/XCard";
import { Socials } from "@/constants/Types";
import { useThemeColor } from "@/hooks/useThemeColor";

interface SwipeCardProps {
  type: Socials;
  imageUrl: string;
  content: string;
}

export default function SwipeCard({ type, imageUrl, content }: SwipeCardProps) {
  const shadowColor = useThemeColor({}, "shadow");

  return (
    <ThemedView style={[styles.container, { shadowColor }]}>
      {type === "Instagram" ? (
        <InstagramHeader />
      ) : (
        <XHeader descText={content} />
      )}
      <Image source={{ uri: imageUrl }} style={styles.image} />
      {type === "Instagram" ? (
        <InstagramFooter
          descText={content}
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
