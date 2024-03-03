import { StyleSheet } from "react-native";
import { RNStyles } from "../../Common/RNStyles";
import { colors } from "../../Theme/colors";
import { metrix } from "../../Common/metrix";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({
    badgeContainer: {
        position: "absolute",
        zIndex: 1,
        right: 0,
        top: -metrix.hp1
    },
    textBadge: {
        color: colors.white,
        fontSize: fontsize[12],
        lineHeight: fontsize[16],
        fontWeight: "400",
        backgroundColor: colors.darkYellow,
        borderRadius: metrix.hp1,
        paddingHorizontal: metrix.hp0_5,

    },
})