import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { Text, View } from "react-native";

const index = () => {
    return (
        <View>
            <ThemedText type="title">Welcome!</ThemedText>
            <HelloWave />
        </View>
    );
}
 
export default index;