import { StyleSheet } from "react-native";
import { hp, wp } from "../../Common/functions";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";
import { RNStyles } from "../../Common/RNStyles";
import { metrix } from "../../Common/metrix";

export const styles = StyleSheet.create({
    textHeaderTitle: {
        color: colors.buttonBg,
        fontSize: fontsize[20],
        fontWeight: "500",
        textAlign: "center"
    },
    headerContainer: {
        backgroundColor: colors.buttonBg,
        paddingTop: metrix.hp3,
        paddingBottom: metrix.hp1_5
    },
    temptyView: {
        ...RNStyles.contentCenter,
        marginTop: metrix.hp20,
    },
    textNoProduct: {
        color: colors.font200,
        fontSize: fontsize[16],
        fontWeight: "500",
        marginTop: metrix.hp1,

    }

})