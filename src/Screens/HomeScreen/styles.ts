import { StyleSheet } from "react-native";
import { RNStyles } from "../../Common/RNStyles";
import { colors } from "../../Theme/colors";
import { metrix } from "../../Common/metrix";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({
    mainView: {
        ...RNStyles.flex
    },
    headerContainer: {
        backgroundColor: colors.buttonBg,
        paddingTop: metrix.hp3,
        paddingBottom: metrix.hp1_5
    },
    textRecommeded: {
        marginLeft: metrix.hp2,
        fontSize: fontsize[20],
        fontWeight: "500",
        color: colors.font100,
        marginTop: metrix.hp2
    },
})