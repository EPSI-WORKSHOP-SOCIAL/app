import { Image, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import xLogo from "@/assets/images/Home/SwipeCard/x/logo.png";
import xComment from "@/assets/images/Home/SwipeCard/x/comment.png";
import xRetweet from "@/assets/images/Home/SwipeCard/x/retweet.png";
import xView from "@/assets/images/Home/SwipeCard/x/view.png";
import xLike from "@/assets/images/Home/SwipeCard/x/like.png";

export function XHeader({ textDesc }: { textDesc: string }) {
  return (
    <ThemedView style={styles.header}>
      <ThemedView style={styles.headerTop}>
        <Image source={xLogo} style={{ width: 24, height: 24 }} />
        <ThemedText style={{ color: "white", fontWeight: 700 }}>X</ThemedText>
      </ThemedView>
      <ThemedText style={{ color: "white", fontSize: 16 }}>
        {textDesc}
      </ThemedText>
    </ThemedView>
  );
}

export function XFooter() {
  return (
    <ThemedView style={styles.footer}>
      <Image source={xComment} style={styles.icon} />
      <Image source={xRetweet} style={styles.icon} />
      <Image source={xView} style={styles.icon} />
      <Image source={xLike} style={styles.icon} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    padding: 10,
  },
  headerTop: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  footer: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  icon: {
    width: 19.71,
    height: 19.71,
  },
});
