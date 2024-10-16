import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, Text, useColorScheme } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage?: ReactElement;
  headerContent?: ReactElement;
  headerBackgroundColor?: { dark: string; light: string };
  contentGap?: number;
  withoutHeader?: boolean;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerContent,
  headerBackgroundColor,
  contentGap = 0,
  withoutHeader = false,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        {!withoutHeader && (
          <Animated.View
            style={[
                styles.header,
                headerAnimatedStyle,
                headerBackgroundColor && { backgroundColor: headerBackgroundColor[colorScheme] },
            ]}>
            {headerImage && headerImage}
            {headerContent && headerContent}
          </Animated.View>
        )}
        <ThemedView style={[styles.content, {gap: contentGap ?? 16}]}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    overflow: 'hidden',
  },
});
