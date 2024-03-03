import { StyleSheet } from "react-native";
import { RNStyles } from "../../Common/RNStyles";
import { colors } from "../../Theme/colors";
import { metrix } from "../../Common/metrix";

export const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: colors.iconBg,
        height: metrix.hp5,
        width: metrix.hp5,
        borderRadius: metrix.hp3,
        ...RNStyles.contentCenter
    },
})