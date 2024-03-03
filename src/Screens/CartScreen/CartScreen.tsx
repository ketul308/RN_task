import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { RootState } from '../../redux/store/store'
import ScreenContainer from '../../Components/ScreenContainer/ScreenContainer'
import { RNStyles } from '../../Common/RNStyles'
import { styles } from './styles'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import IconContainer from '../../Components/IconContainer/IconContainer'
import { All_Svgs } from '../../Assets'
import { metrix } from '../../Common/metrix'
import { Props } from './type'
import { messages } from '../../Constants/Messages'
import CustomCartList from '../../Components/CustomCartList/CustomCartList'
import { addProductToCart, removeProductFromCart } from '../../redux/slices/productSlice'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { colors } from '../../Theme/colors'

const CartScreen: React.FC<Props> = (props) => {
    const { navigation } = props;
    const dispatch = useAppDispatch();
    const cartList = useAppSelector((state: RootState) => state.product.cartList);
    const [subTotal, setSubTotal] = useState(0);
    const deliveryPrice = 5

    useEffect(() => {
        if (cartList.length) {
            let sum = cartList.reduce((total, value) => {
                return total += value.price * value.quantity
            }, 0);
            setSubTotal(sum);
        }
    }, [cartList]);

    return (
        <ScreenContainer>
            <View style={RNStyles.flex}>
                <View style={styles.headerContainer}>
                    <CustomHeader
                        leftIcon={<IconContainer children={<All_Svgs.BackArrow height={metrix.hp1_5} />} />}
                        onPressLeftIcon={() => navigation.goBack()}
                        label={messages.shoppingCart + " (" + cartList.length + ")"}
                    />
                </View>
                {
                    cartList.length > 0 ?
                        <>
                            <View style={RNStyles.flex}>
                                <CustomCartList
                                    cartList={cartList}
                                    onPressMinusQuantity={(id) => dispatch(removeProductFromCart(id))}
                                    onPressPlusQuantity={(id) => dispatch(addProductToCart(id))}
                                />
                            </View>
                            <View style={styles.viewFinalPrice}>
                                <View style={RNStyles.flexRowBetween}>
                                    <Text style={styles.textLable}>{messages.subTotal}</Text>
                                    <Text style={styles.textValue}>{messages.$ + subTotal}</Text>
                                </View>
                                <View style={RNStyles.flexRowBetween}>
                                    <Text style={styles.textLable}>{messages.delivery}</Text>
                                    <Text style={styles.textValue}>{messages.$ + deliveryPrice}</Text>
                                </View>
                                <View style={RNStyles.flexRowBetween}>
                                    <Text style={styles.textLable}>{messages.total}</Text>
                                    <Text style={styles.textValue}>{messages.$ + (subTotal + deliveryPrice)}</Text>
                                </View>
                            </View>
                            <View style={styles.viewButton}>
                                <CustomButton
                                    backgroundColor={colors.buttonBg}
                                    labelColor={colors.white}
                                    label={messages.proceedTocheckout}
                                />
                            </View>
                        </>
                        :
                        <View style={styles.viewEmptyCart}>
                            <All_Svgs.NoFile color={colors.font100} height={metrix.hp10} />
                            <Text style={styles.textLable}>{messages.emptyCart}</Text>
                        </View>
                }
            </View>
        </ScreenContainer>
    )
}

export default CartScreen