import { ProductItemDeatilsType } from "../../Screens/FavoriteScreen/type"
import { ProductItemType } from "../../Screens/HomeScreen/type"

export type state = {
    status: statusTypes,
    productList: Array<ProductItemType>
    productDetails: Array<ProductItemDeatilsType>
    cartList: Array<any>
    error: string | undefined
}

type statusTypes = "idle" | "loading" | "succeeded" | "failed" 