import { StyleSheet } from "react-native";
import { RNStyles } from "../../Common/RNStyles";
import { metrix } from "../../Common/metrix";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({

    contentContainerStyle: {
        padding: metrix.hp2,
    },
    columnWrapperStyle: {
        justifyContent: "space-between"
    },
    ItemSeparatorComponent: {
        height: metrix.hp3
    },


    /** =============== item =============== */
    itemContainer: {
        backgroundColor: colors.productBg,
        borderRadius: metrix.hp2,
        ...RNStyles.shadowStyle,
        width: metrix.wp_40,
    },
    imageSizeItem: {
        height: metrix.wp_40,
        width: metrix.wp_40,
        borderTopLeftRadius: metrix.hp1,
        borderTopRightRadius: metrix.hp1,
    },
    favoriteIcon: {
        position: "absolute",
        zIndex: 1,
        left: metrix.hp1,
        top: metrix.hp1,
        height: metrix.hp3,
        width: metrix.hp3,
        ...RNStyles.contentCenter,
        borderRadius: metrix.hp1,
        backgroundColor: colors.iconBg,
        ...RNStyles.shadowStyle
    },
    plusIconContainer: {
        backgroundColor: colors.buttonBg,
        height: metrix.hp3,
        width: metrix.hp3,
        ...RNStyles.contentCenter,
        borderRadius: metrix.hp1_5
    },
    viewItemBottom: {
        flexDirection: "row",
        paddingHorizontal: metrix.hp1_5,
        paddingBottom: metrix.hp1_5,
        paddingTop: metrix.hp1,
    },
    textPrice: {
        color: colors.font100,
        fontSize: fontsize[14],
        fontWeight: "bold",
    },
    textBrand: {
        color: colors.font200,
        fontSize: fontsize[12],
        fontWeight: "400",
    },
})