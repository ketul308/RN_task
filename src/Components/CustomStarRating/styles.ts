import { StyleSheet } from "react-native";
import { metrix } from "../../Common/metrix";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({

    textLabel: {
        color: colors.font100,
        fontSize: fontsize[12],
        fontWeight: "400",
        marginLeft: metrix.hp0_5
    },
})