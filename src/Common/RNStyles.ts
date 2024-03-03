import { StyleSheet } from "react-native";
import { colors } from "../Theme/colors";

const RNStyles = StyleSheet.create({
    flex: {
        flex: 1
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexRowOnly: {
        flexDirection: 'row',
    },
    flexRowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flexRowAround: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    flexRowEvenly: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentCenter: {
        justifyContent: "center",
        alignItems: "center"
    },
    shadowStyle: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export { RNStyles };