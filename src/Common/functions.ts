import { useEffect, useRef } from "react";
import { Dimensions, PixelRatio } from "react-native";

const screenDimention = Dimensions.get("screen");

function hp(num: number) {
    return PixelRatio.roundToNearestPixel(screenDimention.height * num / 100)
}

function wp(num: number) {
    return PixelRatio.roundToNearestPixel(screenDimention.width * num / 100)
}

function useDebounce(fn: Function, delay: number, dependency: any) {
    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => fn(), delay);
    }, [fn, delay, dependency]);

    return () => clearTimeout(timeoutRef.current);
}

export { hp, wp, screenDimention, useDebounce }