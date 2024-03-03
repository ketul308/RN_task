import { StyleSheet } from "react-native";
import { metrix } from "../../Common/metrix";
import { hp, wp } from "../../Common/functions";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";
import { RNStyles } from "../../Common/RNStyles";

export const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: metrix.hp3,
        paddingBottom: metrix.hp1_5
    },
    viewTopContent: {
        paddingHorizontal: metrix.hp2,
    },
    textTitle: {
        color: colors.font100,
        fontSize: fontsize[25],
        fontWeight: "400",
    },
    textBrand: {
        color: colors.font100,
        fontSize: fontsize[25],
        fontWeight: "bold",
    },
    imageItemCarosol: {
        height: metrix.hp25,
        width: metrix.wp_100,

    },
    viewLikeContainer: {
        position: "absolute",
        zIndex: 1,
        height: metrix.hp5,
        width: metrix.hp5,
        top: metrix.hp1_5,
        right: metrix.hp3,
        borderRadius: metrix.hp2,
        backgroundColor: colors.iconBg,
        ...RNStyles.shadowStyle
    },
    viewPaggination: {
        position: "absolute",
        zIndex: 1,
        flex: 1,
        width: '95%',
        bottom: metrix.hp2,
        left: metrix.hp1,
        ...RNStyles.flexRow
    },
    viewPaginationItem: {
        height: 5,
        width: 20,
        borderRadius: 5,
        marginLeft: 5,
        ...RNStyles.shadowStyle
    },
    viewPriceText: {
        ...RNStyles.flexRow,
        paddingTop: metrix.hp3,
        paddingLeft: metrix.hp2,
    },
    textPrice: {
        color: colors.buttonBg,
        fontSize: fontsize[16],
        fontWeight: "500",
    },
    textDiscount: {
        color: colors.white,
        fontSize: fontsize[11],
        lineHeight: fontsize[18],
        fontWeight: "400",
        backgroundColor: colors.buttonBg,
        borderRadius: metrix.hp1,
        paddingHorizontal: metrix.hp0_5,
        marginLeft: metrix.hp1_5,
    },
    viewButtonContainer: {
        paddingHorizontal: metrix.hp2,
        ...RNStyles.flexRowBetween,
        paddingVertical: metrix.hp3
    },
    viewButtonFlex: {
        flex: 0.46,
    },

    textAddedCart: {
        color: colors.white,
        fontSize: fontsize[12],
        lineHeight: fontsize[20],
        textAlign: "center",
        fontWeight: "400",
    },
    textDetails: {
        color: colors.font100,
        fontSize: fontsize[14],
        fontWeight: "400",
        marginLeft: metrix.hp2,
    },
    textDescription: {
        color: colors.font200,
        fontSize: fontsize[13],
        fontWeight: "400",
        marginLeft: metrix.hp2,
    },
    viewAnimatedText: {
        position: "absolute",
        zIndex: 1,
        borderRadius: metrix.hp1,
        backgroundColor: colors.font100,
        width: '70%',
        alignSelf: "center"
    },
})