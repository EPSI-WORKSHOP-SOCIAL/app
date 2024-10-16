import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import ThemedButton from "@/components/ThemedButton";
import ThemedLink from "@/components/ThemedLink";
import { ThemedText } from "@/components/ThemedText";
import ThemedTextInput from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { useAuth, useSignIn } from "@clerk/clerk-expo";
import { Redirect, router, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import * as Haptics from 'expo-haptics';
import Animated, { FadeInUp } from "react-native-reanimated";
import ThemedModal from "@/components/ThemedModal";

const login = () => {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();

    const { isSignedIn } = useAuth();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [sessionId, setSessionId] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [modalIsVisible, setModalIsVisible] = useState(false);

    const onSignInPress = useCallback(async () => {
        Haptics.selectionAsync();

        if(!isLoaded || isLoading) {
            return
        }

        setIsLoading(true);
        setErrorMessage('');

        try {
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password,
            });

            if (signInAttempt.status === 'complete') {
                Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success
                );
                setSessionId(signInAttempt.createdSessionId as string);
                setModalIsVisible(true);
            } else {
                Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Error
                );
            }
        } catch (err: any) {
            Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Error
            );
            setErrorMessage(err.errors[0].message);
        } finally {
            setIsLoading(false);
        }
    }, [isLoaded, emailAddress, password]);

    const confirmSignIn = async () => {
        if(sessionId == '') {
            setModalIsVisible(false);
            return;
        }

        if(!setActive) {
            setErrorMessage('Une erreur est survenue...');
            return;
        }

        setIsLoading(true);
        Haptics.selectionAsync();
        
        try {
            await setActive({ session: sessionId });
            router.replace('/');
        } catch(err: any) {
            Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Error
            );
            setErrorMessage(err.errors[0].message);
        } finally {
            setSessionId('');
            setIsLoading(false);
            setModalIsVisible(false);
        }
    }

	return <>
		<ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerContent={(
                <Text style={styles.headerContent}>EPSI</Text>
            )}
            contentGap={40}
        >
            <ThemedView>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Bienvenue!</ThemedText>
                    <HelloWave />
                </ThemedView>

                <ThemedText>Nous sommes heureux de vous revoir...</ThemedText>
            </ThemedView>

            <ThemedView style={{ gap: 24 }}>
                {errorMessage && <Animated.View entering={FadeInUp}><ThemedView style={styles.errorView}><Text style={styles.errorMessageText}>{errorMessage}</Text></ThemedView></Animated.View>}
                
                <ThemedView style={{
                    gap: 16
                }}>
                    <ThemedTextInput placeholder="Adresse e-mail" autoComplete="email" onChangeText={setEmailAddress} value={emailAddress} />
                    <ThemedTextInput secureTextEntry placeholder="Mot de passe" autoComplete="current-password" onChangeText={setPassword} value={password} />
                    <ThemedButton theme="primary" isLoading={isLoading} onPress={onSignInPress}>Me connecter</ThemedButton>
                </ThemedView>

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginHorizontal: 10
                    }}
                />
                <ThemedButton onPress={() => router.navigate('/signin')} disabled={true}>Créer un compte</ThemedButton>
            </ThemedView>
		</ParallaxScrollView>

        <ThemedModal isVisible={modalIsVisible} setIsVisible={setModalIsVisible} allowClose={false}>
            <ThemedView style={{ gap: 25 }}>
                <ThemedView style={{ gap: 10 }}>
                    <ThemedText type="title">⚠️ Contenu sensible</ThemedText>
                    <ThemedText type="defaultSemiBold">Ce contenu peut inclure des éléments sensibles réservés à un public averti.</ThemedText>
                    <ThemedText lightColor="#888888">En poursuivant votre navigation sur l'application vous confirmez avoir plus de 18 ans.</ThemedText>
                </ThemedView>
                <ThemedButton onPress={confirmSignIn} isLoading={isLoading}>Accéder à l'application</ThemedButton>
            </ThemedView>
        </ThemedModal>
	</>;
};

export default login;

const styles = StyleSheet.create({
	headerContent: {
		bottom: 20,
		left: 30,
		position: "absolute",
        fontSize: 40,
        fontWeight: '900',
        color: '#1D3D47',
        textTransform: 'uppercase'
	},
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    errorView: {
        backgroundColor: '#f55',
        padding: 16,
        borderRadius: 10,
    },
    errorMessageText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500'
    }
});
