import { StyleSheet } from "react-native";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";
import { RNStyles } from "../../Common/RNStyles";
import { metrix } from "../../Common/metrix";

export const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: metrix.hp3,
        paddingBottom: metrix.hp1_5
    },
    viewFinalPrice: {
        padding: metrix.hp2,
        backgroundColor: colors.iconBg,
        marginHorizontal: metrix.hp2,
        marginBottom: metrix.hp2,
        borderRadius: metrix.hp2,

    },
    viewButton: {
        marginHorizontal: metrix.hp2,
        marginBottom: metrix.hp2,
    },
    textLable: {
        color: colors.font200,
        fontSize: fontsize[12],
        fontWeight: "500",
        marginTop: metrix.hp1,
    },
    textValue: {
        color: colors.font100,
        fontSize: fontsize[12],
        fontWeight: "700",
        marginTop: metrix.hp1,
    },
    viewEmptyCart: {
        marginTop: metrix.hp20,
        ...RNStyles.contentCenter,
    }
})