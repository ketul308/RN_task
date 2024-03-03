
import { Dimensions, PixelRatio } from "react-native";

const screenDimention = Dimensions.get("screen");

function hp(num: number) {
    return PixelRatio.roundToNearestPixel(screenDimention.height * num / 100)
}

function wp(num: number) {
    return PixelRatio.roundToNearestPixel(screenDimention.width * num / 100)
}


export { hp, wp, screenDimention, }