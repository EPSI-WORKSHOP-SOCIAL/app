import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MoreInfo } from "@/constants/Types";
import { StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

const FAKE_MORE_INFOS: MoreInfo[] = [
  {
    name: "Name1",
    value: "Value1",
  },
  {
    name: "Name1",
    value: "Value1",
  },
];

function InfoLine({ name, value }: MoreInfo) {
  const backgroundColor = useThemeColor({}, "grey");
  return (
    <ThemedView style={[{ backgroundColor }, styles.line]}>
      <ThemedText style={styles.lineName}>{name}</ThemedText>
      <ThemedText>{value}</ThemedText>
    </ThemedView>
  );
}

export default function InfoScreen() {
  return (
    <ParallaxScrollView contentGap={10} withoutHeader>
      {FAKE_MORE_INFOS.map((_, i) => (
        <InfoLine key={i} name={_.name} value={_.value} />
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  line: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  lineName: {
    fontFamily: "AfacadFluxSemiBold",
    fontSize: 18,
  },
});
