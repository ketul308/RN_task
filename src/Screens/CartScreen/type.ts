import { NavigationProp } from "@react-navigation/native"
import { MainStackScreenTypes } from "../../Navigation/types"
import { AllScreens } from "../../Navigation/NavConfig"

export type Props = {
    navigation: NavigationProp<MainStackScreenTypes, AllScreens.CART_SCREEN>
}