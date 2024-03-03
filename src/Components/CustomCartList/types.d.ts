import { ProductItemType } from "../../Screens/HomeScreen/type"

export type Props = {
    cartList: Array<ProductItemType>
    onPressMinusQuantity: (id: number) => void
    onPressPlusQuantity: (id: number) => void
}

export type CartItemProps = {
    item: ProductItemType
    onPressMinus: (id: number) => void
    onPressPlus: (id: number) => void
}