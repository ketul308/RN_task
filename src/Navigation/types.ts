
import { ProductItemType } from "../Screens/HomeScreen/type"
import { AllScreens } from "./NavConfig"

export type MainStackScreenTypes = {
    [AllScreens.CART_SCREEN]: undefined
    [AllScreens.DETAIL_SCREEN]: { id: ProductItemType["id"], isAlreadyFavorite: boolean }
    [AllScreens.TAB_SCREEN]: undefined
}
export type BottomStackScreenTypes = {
    [AllScreens.HOME_SCREEN]: undefined
    [AllScreens.FAVORITE_SCREEN]: undefined
}