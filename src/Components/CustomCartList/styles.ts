import { StyleSheet } from "react-native";
import { RNStyles } from "../../Common/RNStyles";
import { metrix } from "../../Common/metrix";
import { colors } from "../../Theme/colors";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({
    contentContainerStyle: {
        padding: metrix.hp2,
    },
    itemContainer: {
        height: metrix.hp6,
        ...RNStyles.flexRow
    },
    imageProduct: {
        height: metrix.hp6,
        width: metrix.hp6,
        marginRight: metrix.hp2,
        borderRadius: metrix.hp0_5,
    },
    textTitle: {
        color: colors.font100,
        fontSize: fontsize[14],
        fontWeight: "600"
    },
    textPrice: {
        color: colors.font100,
        fontSize: fontsize[12],
        fontWeight: "400"
    },
    ItemSeparatorComponent: {
        height: 2,
        backgroundColor: colors.iconBg,
        marginVertical: metrix.hp2,
    },
    ListFooterComponent: {
        backgroundColor: colors.white,
        height: metrix.hp6
    }
})