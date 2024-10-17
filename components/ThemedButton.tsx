import TouchableScale from "@jonny/touchable-scale";
import { PropsWithChildren } from "react";
import { ActivityIndicator, StyleSheet, Text, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemedText } from "./ThemedText";

export type ThemedButtonProps = PropsWithChildren<{
    theme?: 'default' | 'primary';
    onPress?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
}>;

const ThemedButton = ({ theme = 'default', children, onPress, isLoading = false, disabled = false }: ThemedButtonProps) => {
	const colorScheme = useColorScheme() ?? 'light';

	const backgroundColor = { default: { light: '#1D3D47', dark: '#A1CEDC' }, primary: { light: '#A1CEDC', dark: '#1D3D47' } };
	const textColor = { default: { light: '#eceef5', dark: '#434343' }, primary: { light: '#434343', dark: '#eceef5' } };

	return <TouchableScale
        style={[styles.touchable, {
            backgroundColor: backgroundColor[theme][colorScheme]
        }]}
        onPress={() => {
            onPress && onPress();
        }}
        disabled={disabled}
    >
        {isLoading ? (
            <ActivityIndicator />
        ) : (
            <ThemedText style={{
                color: textColor[theme][colorScheme],
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '500',
                lineHeight: 15
            }}>
                {children}
            </ThemedText>
        )}
    </TouchableScale>;
};

export default ThemedButton;

const styles = StyleSheet.create({
	touchable: {
        fontWeight: '500',
		paddingLeft: 16,
        paddingVertical: 15,
		borderRadius: 10,
		paddingRight: 16,
		justifyContent: 'center',
		borderCurve: 'continuous'
	},
});
