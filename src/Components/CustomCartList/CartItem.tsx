import { View, Text, Image, TouchableOpacity } from 'react-native'
import Animated, { EntryExitTransition, FadeOutLeft, } from 'react-native-reanimated';
import React from 'react'
import { CartItemProps } from './types'
import { RNStyles } from '../../Common/RNStyles';
import { styles } from './styles';
import { messages } from '../../Constants/Messages';
import IconContainer from '../IconContainer/IconContainer';
import { All_Svgs } from '../../Assets';
import { metrix } from '../../Common/metrix';

const CartItem = (props: CartItemProps) => {

    const { item, onPressMinus, onPressPlus } = props;

    return (
        <Animated.View key={item.id.toString()} exiting={EntryExitTransition.duration(1000).exiting(FadeOutLeft).exitingV} style={styles.itemContainer}>
            <View>
                <Image
                    source={{ uri: item.thumbnail }}
                    style={styles.imageProduct}
                    resizeMode={"cover"}
                />
            </View>
            <View style={RNStyles.flex}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textPrice}>{messages.$ + (item?.quantity ? item.price * item?.quantity : 0)}</Text>
            </View>
            <View style={RNStyles.flex}>
                <View style={RNStyles.flexRowAround}>
                    <TouchableOpacity onPress={() => onPressMinus(item.id)}>
                        <IconContainer children={<All_Svgs.Minus height={metrix.hp1_5} />} />
                    </TouchableOpacity>
                    <Text style={styles.textPrice}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => onPressPlus(item.id)}>
                        <IconContainer children={<All_Svgs.Plus height={metrix.hp1_2} />} />
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    )
}

export default CartItem