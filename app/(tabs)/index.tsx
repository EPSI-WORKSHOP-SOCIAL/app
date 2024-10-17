import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemedSafeArea, ThemedView } from "@/components/ThemedView";
import { Swiper } from "rn-swiper-list";
import React, { useCallback, useEffect, useState } from "react";
import SwipeCard from "@/components/SwipeCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import Header from "@/components/Header";
import { Direction, Post, Socials } from "@/constants/Types";
import SwipeTutorial from "@/components/SwipeTutorial";
import useAxios from "@/hooks/useAxios";
import { arraysAreEqual } from "@/constants/Functions";
import { ThemedText } from "@/components/ThemedText";
import ThemedModal from "@/components/ThemedModal";
import ThemedButton from "@/components/ThemedButton";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";

export default function HomeScreen() {
    const [postsData, setPostsData] = useState<Post[]>([]);
    const [pastPosts, setPastPosts] = useState<string[]>([]);
    const [displayReviewReasonModal, setDisplayReviewReasonModal] = useState(false);
    const [reviewPostIndex, setReviewPostIndex] = useState<number>(0);
    const { data: dataPostRequest, error: errorPostRequest, loading: loadingPostRequest, fetchData: fetchDataPostRequest } = useAxios();
    const { data: dataReviewRequest, error: errorReviewRequest, loading: loadingReviewRequest, fetchData: fetchDataReviewRequest } = useAxios();

    useEffect(() => {
        if(arraysAreEqual(postsData.map(post => post.id), pastPosts)) {
            setPostsData([]);
            fetchDataPostRequest({ uri: 'post' });
        }
    }, [pastPosts]);

    useEffect(() => {
        if(arraysAreEqual(pastPosts, pastPosts) && dataPostRequest && dataPostRequest.length) {
            const posts: Post[] = dataPostRequest;
            setPostsData(posts.filter(post => !pastPosts.includes(post.id)));
        }
    }, [dataPostRequest]);

    const onSwipeRight = (cardIndex: number) => {
        onSwipe("right", postsData[cardIndex]);

        setPastPosts([
            postsData[cardIndex].id,
            ...pastPosts
        ]);
    }

    const onSwipeLeft = (cardIndex: number) => {
        setDisplayReviewReasonModal(true);
        setReviewPostIndex(cardIndex);
    }

    const onConfirmeSwipeLeft = (cardIndex: number, reasonId: string) => {
        onSwipe("left", postsData[cardIndex], reasonId);

        setDisplayReviewReasonModal(false);
        setReviewPostIndex(0);

        setPastPosts([
            postsData[cardIndex].id,
            ...pastPosts
        ]);
    }

    const onSwipe = (direction: Direction, post: Post, reasonId: string|false = false) => {
        const answer = { 'left': false, 'right': true };

        fetchDataReviewRequest({
            uri: 'review',
            method: 'POST',
            body: {
                postId: post.id,
                answer: answer[direction],
                reasonId: reasonId ? reasonId : undefined
            }
        });
    }

	const renderCard = useCallback((post: Post) => {
		return <SwipeCard type={post.origin as Socials} imageUrl={post.imageUrl} content={post.content} />;
	}, []);

	return (
		<ThemedView style={styles.container}>
			<Header />
			<ThemedView style={styles.content}>
                <SwipeTutorial />
                {loadingPostRequest ? <ActivityIndicator /> : <>
                    <ThemedView style={{ alignItems: "flex-end", backgroundColor: "transparent" }}>
                        <Link href="/info">
                            <Feather name="info" size={24} color="#8B929F" />
                        </Link>
                    </ThemedView>
                    <GestureHandlerRootView style={styles.swipeContainer}>
                        <Swiper
                            data={postsData ?? []}
                            renderCard={renderCard}
                            cardStyle={{ height: "100%", width: "100%" }}
                            onSwipeRight={onSwipeRight}
                            onSwipeLeft={onSwipeLeft}
                        />
                    </GestureHandlerRootView>
                </>}
			</ThemedView>
            <ThemedModal isVisible={displayReviewReasonModal !== false} setIsVisible={setDisplayReviewReasonModal}>
                <ThemedView style={{ gap: 15 }}>
                    {displayReviewReasonModal && <>
                        <ThemedView style={{ gap: 5 }}>
                            <ThemedText type="subtitle">Quelle est la raison de votre choix ?</ThemedText>
                            <ThemedText type="default" style={{ lineHeight: 13, paddingVertical: 5, letterSpacing: -.5 }} lightColor="#666">Cela permettra aux équipes de {postsData[reviewPostIndex].company.name} de mieux comprendre pourquoi cette publication n'est pas appropriée.</ThemedText>
                        </ThemedView>
                        <ThemedView style={{ gap: 5 }}>
                            {postsData[reviewPostIndex] && postsData[reviewPostIndex].company.reasons.map((reason, index) => (
                                <Animated.View key={index} entering={FadeInUp.delay(index * 50)}>
                                    <ThemedButton onPress={() => onConfirmeSwipeLeft(reviewPostIndex, reason.id)}>{reason.content}</ThemedButton>
                                </Animated.View>
                            ))}
                        </ThemedView>
                    </>}
                </ThemedView>
            </ThemedModal>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  swipeContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    position: "relative",
  },
});
