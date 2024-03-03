import { NavigationProp } from "@react-navigation/native"
import { AllScreens } from "../../Navigation/NavConfig"
import { MainStackScreenTypes } from "../../Navigation/types"

export type Props = {
    navigation: NavigationProp<MainStackScreenTypes, AllScreens.CART_SCREEN>
}

export type ProductItemDeatilsType = {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: [],
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string,
} 
