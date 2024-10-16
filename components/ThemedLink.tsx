import { Href, Link } from "expo-router";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from "react-native";
import { AutocompleteProps } from "react-native-autocomplete-input";
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";

type Props = PropsWithChildren<{
    href: Href<string | object>;
    theme?: 'default' | 'primary';
    type?: 'button' | 'link';
    onPress?: () => void;
}>;

const ThemedLink = ({ href, type = 'button', theme = 'default', children, onPress }: Props) => {
	const colorScheme = useColorScheme() ?? 'light';

	const backgroundColor = { default: { light: '#1D3D47', dark: '#A1CEDC' }, primary: { light: '#A1CEDC', dark: '#1D3D47' } };
	const textColor = { default: { light: '#eceef5', dark: '#434343' }, primary: { light: '#434343', dark: '#eceef5' } };

	return <Link
        href={href}
        style={[styles.touchable, {
            backgroundColor: backgroundColor[theme][colorScheme]
        }]}
        onPress={() => {
            onPress && onPress();
        }}
    >
        <Text style={{
            color: textColor[theme][colorScheme],
            textAlign: 'center',
            fontSize: 15,
            fontWeight: '500'
        }}>
            {children}
        </Text>
    </Link>;
};

export default ThemedLink;

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
