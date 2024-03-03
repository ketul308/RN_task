import { View, FlatList, } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { styles } from './styles';
import { Props } from './types';
import CartItem from './CartItem';

const CustomProductList = (props: Props) => {

    const { cartList, onPressMinusQuantity, onPressPlusQuantity } = props;
    const [showFooter, setShowFooter] = useState(false);

    const _renderItem = useCallback(({ item, index }: any) => (
        <CartItem
            item={item}
            onPressMinus={(productId) => onPressMinusQuantity(productId)}
            onPressPlus={(productId) => onPressPlusQuantity(productId)}
        />
    ), [cartList]);

    useEffect(() => {
        if (cartList.length == 0) {
            setShowFooter(true);
            const id = setTimeout(() => {
                setShowFooter(false);
                clearTimeout(id);
            }, 2000);
        }
    }, [cartList.length])

    const memorisedFlatList = useMemo(() => (
        <FlatList
            data={cartList}
            renderItem={_renderItem}
            contentContainerStyle={styles.contentContainerStyle}
            ItemSeparatorComponent={() => <View style={styles.ItemSeparatorComponent} />}
            showsVerticalScrollIndicator={false}
            decelerationRate={0.5}
            ListFooterComponent={showFooter ? <View style={styles.ListFooterComponent} /> : undefined}
        />
    ), [[cartList]]);

    return (
        memorisedFlatList
    )
}

export default CustomProductList