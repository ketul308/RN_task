import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { getAllProducts } from './helper'
import { RootState } from '../../redux/store/store'
import { Props } from './type'
import ScreenContainer from '../../Components/ScreenContainer/ScreenContainer'
import { styles } from './styles'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import { messages } from '../../Constants/Messages'
import { colors } from '../../Theme/colors'
import { All_Svgs } from '../../Assets'
import { metrix } from '../../Common/metrix'
import BadgeIcon from '../../Components/BadgeIcon/BadgeIcon'
import CustomProductList from '../../Components/CustomProductList/CustomProductList'
import { addProductToCart, addRemoveFavorite } from '../../redux/slices/productSlice'
import { AllScreens } from '../../Navigation/NavConfig'

const HomeScreen: React.FC<Props> = (props) => {

    const { navigation } = props;
    const dispatch = useAppDispatch();
    const status = useAppSelector((state: RootState) => state.product.status);
    const products = useAppSelector((state: RootState) => state.product.productList);
    const cartItemCount = useAppSelector((state: RootState) => state.product.cartList.length);
    const [productLimit, setProductLimit] = useState(0);

    useEffect(() => {
        if (productLimit !== 0 && products.length !== productLimit) {
            dispatch(getAllProducts(productLimit));
        }
    }, [productLimit]);

    function handleFavorite(prodId: number) {
        dispatch(addRemoveFavorite(prodId));
    }

    return (
        <ScreenContainer>
            <View style={styles.mainView}>
                <View style={styles.headerContainer}>
                    <CustomHeader
                        label={messages.hello + messages.testUser}
                        labelColor={colors.white}
                        rightIcon={
                            <View children={
                                <BadgeIcon
                                    badge={cartItemCount}
                                    children={<All_Svgs.Cart height={metrix.hp3} color={colors.white} />} />
                            }
                            />
                        }
                        onPressRightIcon={() => navigation.navigate(AllScreens.CART_SCREEN)}
                    />
                </View>
                <View>
                    <Text style={styles.textRecommeded}>{messages.recommended}</Text>
                </View>
                <CustomProductList
                    products={products}
                    showPlaceHolder={status === "loading"}
                    onEndReached={() => setProductLimit(prev => prev + 10)}
                    onPressFavorite={handleFavorite}
                    showPlusIcon={true}
                    onPressAddProduct={(id) => dispatch(addProductToCart(id))}
                    onPressProduct={(item) => navigation.navigate(AllScreens.DETAIL_SCREEN, { id: item.id, isAlreadyFavorite: item.isFavorite || false })}
                />
            </View>
        </ScreenContainer>
    )
}

export default HomeScreen;