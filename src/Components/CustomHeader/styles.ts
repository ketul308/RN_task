import { StyleSheet } from "react-native";
import { RNStyles } from "../../Common/RNStyles";
import { metrix } from "../../Common/metrix";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({
    viewOuter: {
        ...RNStyles.flexRowBetween,
        // paddingHorizontal: 
    },
    touchLeftIcon: {
        marginLeft: metrix.hp2,
    },
    touchRightIcon: {
        marginRight: metrix.hp2,
    },
    textLabel: {
        color: colors.font100,
        fontSize: fontsize[16],
        fontWeight: "400",
        marginLeft: metrix.hp2
    },
})