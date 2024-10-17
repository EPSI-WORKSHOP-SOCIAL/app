import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import instagramLogo from "@/assets/images/Home/SwipeCard/instagram/logo.png";
import instagramLike from "@/assets/images/Home/SwipeCard/instagram/like.png";
import instagramComment from "@/assets/images/Home/SwipeCard/instagram/comment.png";
import instagramShare from "@/assets/images/Home/SwipeCard/instagram/share.png";
import instagramBookmark from "@/assets/images/Home/SwipeCard/instagram/bookmark.png";
import { Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export function InstagramHeader() {
  return (
    <ThemedView style={styles.header}>
      <Image
        source={instagramLogo}
        style={{ resizeMode: "contain", width: 100 }}
      />
    </ThemedView>
  );
}

export function InstagramFooter({ descText }: { descText: string }) {
  return (
    <ThemedView style={styles.footer}>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
      >
        <ThemedView
          style={{
            flexDirection: "row",
            gap: 5,
            backgroundColor: "transparent",
          }}
        >
          <Image source={instagramLike} style={styles.icon} />
          <Image source={instagramComment} style={styles.icon} />
          <Image source={instagramShare} style={styles.icon} />
        </ThemedView>
        <Image source={instagramBookmark} style={styles.icon} />
      </ThemedView>
      <ThemedText style={styles.descText}>{descText}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  icon: {
    width: 24,
    height: 24,
  },
  footer: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
    zIndex: 10,
    gap: 5,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  accountName: {
    fontWeight: 600,
  },
  descText: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors["light"].text,
  },
});
