import { StyleSheet } from "react-native";
import { colors } from "../Theme/colors";
import { metrix } from "../Common/metrix";
import { RNStyles } from "../Common/RNStyles";

export const styles = StyleSheet.create({
    tabIcon: {
        borderRadius: metrix.hp3,
        height: metrix.hp5,
        width: metrix.hp5,
        ...RNStyles.contentCenter,
    }
})