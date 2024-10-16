import { PropsWithChildren } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, useColorScheme } from "react-native";

type Props = PropsWithChildren<{
    theme?: 'default' | 'primary';
    onPress?: () => void;
    isLoading?: boolean;
    disabled?: boolean;
}>;

const ThemedButton = ({ theme = 'default', children, onPress, isLoading = false, disabled = false }: Props) => {
	const colorScheme = useColorScheme() ?? 'light';

	const backgroundColor = { default: { light: '#1D3D47', dark: '#A1CEDC' }, primary: { light: '#A1CEDC', dark: '#1D3D47' } };
	const textColor = { default: { light: '#eceef5', dark: '#434343' }, primary: { light: '#434343', dark: '#eceef5' } };

	return <TouchableOpacity
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
            <Text style={{
                color: textColor[theme][colorScheme],
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '500'
            }}>
                {children}
            </Text>
        )}
    </TouchableOpacity>;
};

export default ThemedButton;

const styles = StyleSheet.create({
	touchable: {
		height: 50,
        fontSize: 15,
        fontWeight: '500',
		paddingLeft: 16,
		borderRadius: 10,
		paddingRight: 16,
		justifyContent: 'center',
		borderCurve: 'continuous',
        textAlign: 'center'
	},
});
