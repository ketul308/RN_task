import { NavigationProp } from "@react-navigation/native"
import { AllScreens } from "../../Navigation/NavConfig"
import { MainStackScreenTypes } from "../../Navigation/types"
import { ProductItemType } from "../HomeScreen/type"


export type Props = {
    navigation: NavigationProp<MainStackScreenTypes, AllScreens.DETAIL_SCREEN>
} & { route: { params: { id: ProductItemType["id"] } } }