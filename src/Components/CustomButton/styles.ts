import { StyleSheet } from "react-native";
import { hp } from "../../Common/functions";
import { fontsize } from "../../Theme/Font";
import { colors } from "../../Theme/colors";
import { metrix } from "../../Common/metrix";

export const styles = StyleSheet.create({
    touchButton: {
        height: metrix.hp6,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: metrix.hp2,
        borderWidth: 1,
        borderColor: colors.buttonBg,
        backgroundColor: colors.white,
    },
    textLabel: {
        color: colors.buttonBg,
        fontSize: fontsize[12],
        fontWeight: "500"
    }

});