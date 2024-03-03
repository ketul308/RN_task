import React from "react"
import { ProductItemType } from "../../Screens/HomeScreen/type"

export type Props = {
    products: Array<ProductItemType>,
    showPlusIcon?: boolean
    showPlaceHolder?: boolean
    ListEmptyComponent?: React.ReactElement
    onPressProduct?: (item: ProductItemType) => void
    onEndReached?: () => void
    onPressFavorite: (id: number) => void
    onPressAddProduct?: (id: number) => void
}

export type renderItemParams = {
    item: ProductItemType,
    index: number
}

export type ProductItemProps = renderItemParams & {
    onPressProduct?: (item: ProductItemType) => void
    onPressFavorite: (id: number) => void
    showPlusIcon?: boolean
    onPressAddProduct: (id: number) => void
}