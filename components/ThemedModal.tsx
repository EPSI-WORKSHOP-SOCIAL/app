import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { useColorScheme } from "../hooks/useColorScheme";
import { ThemedView } from "./ThemedView";
import { ReactElement } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    position?: "flex-end" | "flex-start" | "center" | "space-between" | "space-around" | "space-evenly";
    children: ReactElement;
    allowClose?: boolean;
}

const ThemedModal = ({isVisible, setIsVisible, position = "flex-end", children, allowClose = true}: Props) => {
    const colorScheme = useColorScheme() ?? 'light';
    const backgroundColor = { light: "#ffffff", dark: "#1F1F1F" };
    const insets = useSafeAreaInsets();

    return (
        <Modal
            swipeDirection={allowClose ? "down" : undefined}
            onSwipeComplete={() => allowClose && setIsVisible(false)}
            style={[styles.container, { justifyContent: position }]}
            hideModalContentWhileAnimating={true}
            isVisible={isVisible}
            onBackdropPress={() => allowClose && setIsVisible(false)}
            avoidKeyboard
        >
            <ThemedView
                style={[styles.body, { backgroundColor: backgroundColor[colorScheme] }, !allowClose && { paddingTop: 25 }, position == 'flex-end' && { paddingBottom: 45 + insets.bottom }]}
            >
                {allowClose && <View style={[styles.close, { backgroundColor: colorScheme == 'light' ? "#00000033" : "#404040" }]} />}
                {children}
            </ThemedView>
        </Modal>
    );
}
 
export default ThemedModal;

const styles = StyleSheet.create({
    container: {
        margin: 0,
    },
    body: {
        padding: 25,
        paddingTop: 40,
        borderRadius: 20,
    },
    close: {
        borderRadius: 99,
        width: 40,
        height: 6,
        position: 'absolute',
        top: 10,
        alignSelf: 'center',
    }
});