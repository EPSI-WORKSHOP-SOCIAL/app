import { StyleSheet, TextInput, TextInputProps, useColorScheme, View } from "react-native";
import { AutocompleteProps } from "react-native-autocomplete-input";
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";

type Props = TextInputProps & {
	placeholder?: string;
    autoComplete?: any;
    onFocus?: () => void;
    onBlur?: () => void;
};

const ThemedTextInput = ({ placeholder, autoComplete = 'off', onFocus, onBlur, secureTextEntry, value = '', onChangeText = () => {} }: Props) => {
	const colorScheme = useColorScheme() ?? 'light';
      
    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

	const mainColor = { light: '#1D3D47', dark: '#A1CEDC' };
	const backgroundColor = { light: '#eceef5', dark: '#434343' };

	const animatedColorValue = useSharedValue(0);

	const setFocusColor = () => {
		animatedColorValue.value = withTiming(1, {
			duration: 200,
		});
	};
    const setBlurColor = () => {        
		animatedColorValue.value = withTiming(0, {
			duration: 250,
		});
	};

	const animatedStyle = useAnimatedStyle(() => {        
		return {
			borderColor: interpolateColor(
				animatedColorValue.value,
				[0, 1],
				['transparent', mainColor[colorScheme]]
			),
            backgroundColor: backgroundColor[colorScheme]
		};
	});

	return <AnimatedTextInput
        style={[styles.input, animatedStyle]}
        autoComplete={autoComplete}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        onFocus={() => {
            setFocusColor();
            onFocus && onFocus();
        }}
        onBlur={() => {
            setBlurColor();
            onBlur && onBlur();
        }}
    />;
};

export default ThemedTextInput;

const styles = StyleSheet.create({
	input: {
		height: 50,
        fontSize: 15,
        fontWeight: '500',
		borderWidth: 2,
		paddingLeft: 16,
		borderRadius: 10,
		paddingRight: 16,
		justifyContent: 'center',
		color: '#000',
		borderCurve: 'continuous',
	},
});
