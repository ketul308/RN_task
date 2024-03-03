import { View, FlatList, } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { Props, renderItemParams } from './types'
import ProductItem from './ProductItem';
import { styles } from './styles';
import ProductPlaceholder from './ProductPlaceholder';

const CustomProductList = (props: Props) => {

    const { products, showPlaceHolder, onPressProduct, onEndReached,
        onPressFavorite, onPressAddProduct, showPlusIcon, ListEmptyComponent
    } = props;

    const _renderItem = useCallback(({ item, index }: renderItemParams) => (
        <ProductItem
            item={item}
            index={index}
            showPlusIcon={showPlusIcon}
            onPressFavorite={(id) => onPressFavorite(id)}
            onPressProduct={(ele) => onPressProduct && onPressProduct(ele)}
            onPressAddProduct={(id) => onPressAddProduct && onPressAddProduct(id)}
        />
    ), [products, showPlaceHolder]);

    const memorisedFlatList = useMemo(() => (
        <FlatList
            data={products}
            numColumns={2}
            renderItem={showPlaceHolder ? ProductPlaceholder : _renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            columnWrapperStyle={styles.columnWrapperStyle}
            ItemSeparatorComponent={() => <View style={styles.ItemSeparatorComponent} />}
            ListEmptyComponent={ListEmptyComponent}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.7}
        />
    ), [products, showPlaceHolder]);

    return (
        memorisedFlatList
    )
}

export default CustomProductList