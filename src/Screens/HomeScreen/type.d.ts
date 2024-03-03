import { NavigationProp } from "@react-navigation/native"
import { AllScreens } from "../../Navigation/NavConfig"
import { MainStackScreenTypes } from "../../Navigation/types"

export type Props = {
    navigation: NavigationProp<MainStackScreenTypes, AllScreens.HOME_SCREEN>
}

export type ProductItemType = {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: Array<string>,
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string

    // extra properties for like and quantity
    isFavorite?: boolean
    quantity?: number

}