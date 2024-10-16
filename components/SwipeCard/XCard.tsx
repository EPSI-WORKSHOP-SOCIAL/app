import { Image, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import xLogo from "@/assets/images/Home/SwipeCard/x/logo.png";
import xDefaultProfile from "@/assets/images/Home/SwipeCard/x/defaultprofile.png";
import xComment from "@/assets/images/Home/SwipeCard/x/comment.png";
import xRetweet from "@/assets/images/Home/SwipeCard/x/retweet.png";
import xView from "@/assets/images/Home/SwipeCard/x/view.png";
import xLike from "@/assets/images/Home/SwipeCard/x/like.png";

export function XHeader({ descText }: { descText: string }) {
  return (
    <ThemedView style={styles.header}>
      <ThemedView style={styles.headerTop}>
        <ThemedView style={styles.headerTopLeft}>
          <Image
            source={xDefaultProfile}
            style={{ width: 30, height: 30, borderRadius: 30 }}
          />
          <ThemedView style={{ backgroundColor: "transparent" }}>
            <ThemedText style={styles.profileFirstText}>X</ThemedText>
            <ThemedText style={styles.profileSecondText}>@x</ThemedText>
          </ThemedView>
        </ThemedView>
        <Image source={xLogo} style={{ width: 24, height: 24 }} />
      </ThemedView>
      <ThemedText style={{ color: "white", fontSize: 16 }}>
        {descText}
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
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 15,
  },
  headerTop: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  headerTopLeft: {
    gap: 8,
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  profileFirstText: {
    color: "white",
    fontWeight: 700,
    lineHeight: 17,
  },
  profileSecondText: { color: "grey", lineHeight: 17 },
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
