import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ProductItemProps } from './types';
import { All_Svgs } from '../../Assets';
import { styles } from './styles';
import { colors } from '../../Theme/colors';
import { RNStyles } from '../../Common/RNStyles';
import { messages } from '../../Constants/Messages';

const ProductItem = (props: ProductItemProps) => {

    const { index, item, onPressProduct, onPressFavorite, onPressAddProduct, showPlusIcon } = props;

    return (
        <TouchableOpacity
            key={index.toString()}
            activeOpacity={0.5}
            onPress={() => onPressProduct && onPressProduct(item)}
            style={styles.itemContainer}
        >
            <TouchableOpacity style={styles.favoriteIcon} onPress={() => onPressFavorite(item.id)}>
                <All_Svgs.Heart color={item.isFavorite ? colors.pink : undefined} />
            </TouchableOpacity>
            <Image
                source={{ uri: item.thumbnail }}
                style={styles.imageSizeItem}
                resizeMode={"cover"}
            />
            <View style={styles.viewItemBottom}>
                <View style={RNStyles.flex}>
                    <Text style={styles.textPrice}>{messages.$ + item.price}</Text>
                    <Text style={styles.textBrand}>{item.brand}</Text>
                </View>
                {
                    showPlusIcon &&
                    <TouchableOpacity onPress={() => onPressAddProduct(item.id)} style={styles.plusIconContainer}>
                        <All_Svgs.Plus color={colors.white} />
                    </TouchableOpacity>
                }
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem