import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenContainer from '../../Components/ScreenContainer/ScreenContainer';
import { RNStyles } from '../../Common/RNStyles';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import { All_Svgs } from '../../Assets';
import IconContainer from '../../Components/IconContainer/IconContainer';
import { metrix } from '../../Common/metrix';
import { styles } from './styles';
import BadgeIcon from '../../Components/BadgeIcon/BadgeIcon';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getProductDetailsById } from './helper';
import { RootState } from '../../redux/store/store';
import CustomStarRating from '../../Components/CustomStarRating/CustomStarRating';
import Carousel from 'react-native-reanimated-carousel';
import { colors } from '../../Theme/colors';
import { addProductToCart, addRemoveFavorite } from '../../redux/slices/productSlice';
import { messages } from '../../Constants/Messages';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Animated, { FadeInDown, FadeOut, } from 'react-native-reanimated';
import { AllScreens } from '../../Navigation/NavConfig';

const DetailsScreen: React.FC<any> = (props) => {

    const { navigation, route } = props;
    const { params } = route || {};
    const dispatch = useAppDispatch();
    const productDetails = useAppSelector((state: RootState) => state.product.productDetails[params.id]);
    const cartItemCount = useAppSelector((state: RootState) => state.product.cartList.length);

    const [isFavoritePressed, setIsFavoritePressed] = useState(false);
    const [visibleImageIndex, setVisibleImageIndex] = useState(0);
    const [showAnimatedText, setShowAnimatedText] = useState<null | boolean>(null);


    useEffect(() => {
        if (productDetails === undefined) {
            dispatch(getProductDetailsById(params.id));
        } else {

        }
    }, [params.id]);

    function onPressLikeProduct(id: number) {
        dispatch(addRemoveFavorite(id));
        setIsFavoritePressed(prev => !prev);
    }

    function onPressAddToCart() {
        if (showAnimatedText === null) {
            dispatch(addProductToCart(productDetails?.id));
            setShowAnimatedText(true);
            const _timeOut = setTimeout(() => {
                setShowAnimatedText(false);
                clearTimeout(_timeOut);
            }, 2000);
        } else {
            navigation.navigate(AllScreens.CART_SCREEN)
        }
    }

    function onPressBuyNow() {
        dispatch(addProductToCart(productDetails?.id));
        navigation.navigate(AllScreens.CART_SCREEN);
    }

    return (
        <ScreenContainer>
            <View style={RNStyles.flex}>
                <View style={styles.headerContainer}>
                    <CustomHeader
                        leftIcon={<IconContainer children={<All_Svgs.BackArrow height={metrix.hp1_5} />} />}
                        onPressLeftIcon={() => navigation.goBack()}
                        rightIcon={<BadgeIcon badge={cartItemCount} children={<All_Svgs.Cart height={metrix.hp3} />} />}
                        onPressRightIcon={() => navigation.navigate(AllScreens.CART_SCREEN)}
                    />
                    <View style={styles.viewTopContent}>
                        <Text style={styles.textTitle}>{productDetails?.title}</Text>
                        <Text style={styles.textBrand}>{productDetails?.brand}</Text>
                        <CustomStarRating rating={productDetails?.rating} />
                    </View>
                </View>
                <View>
                    <View style={styles.viewLikeContainer}>
                        <TouchableOpacity onPress={() => onPressLikeProduct(productDetails?.id)}>
                            <IconContainer children={<All_Svgs.Heart color={(params.isAlreadyFavorite || isFavoritePressed) ? colors.pink : undefined} height={metrix.hp3} />} />
                        </TouchableOpacity>
                    </View>
                    <Carousel
                        loop
                        width={metrix.wp_100}
                        height={metrix.hp25}
                        autoPlay={true}
                        autoPlayInterval={5000}
                        data={productDetails?.images}
                        scrollAnimationDuration={1000}
                        onSnapToItem={(index) => setVisibleImageIndex(index)}
                        pagingEnabled={true}
                        renderItem={({ item, index }) => (
                            <Image
                                source={{ uri: item }}
                                key={index.toString()}
                                resizeMode={"cover"}
                                style={styles.imageItemCarosol}
                            />
                        )}
                    />
                    <View style={styles.viewPaggination}>
                        {
                            Array.from(Array(productDetails?.images?.length).keys()).map((item) => (
                                <View
                                    key={item.toString()}
                                    style={[styles.viewPaginationItem, { backgroundColor: visibleImageIndex == item ? colors.darkYellow : colors.iconBg }]}
                                />
                            ))
                        }
                    </View>
                </View>
                <View style={styles.viewPriceText}>
                    <Text style={styles.textPrice}>{messages.$ + productDetails?.price}</Text>
                    <Text style={styles.textDiscount}>{productDetails?.discountPercentage + messages.off}</Text>
                </View>
                <View style={styles.viewButtonContainer}>
                    <View style={styles.viewButtonFlex}>
                        {
                            showAnimatedText &&
                            <Animated.View entering={FadeInDown.duration(2000)} exiting={FadeOut.duration(1000)} style={styles.viewAnimatedText}>
                                <Text numberOfLines={1} style={styles.textAddedCart}>{messages.addedToCart}</Text>
                            </Animated.View>
                        }
                        <CustomButton
                            onPress={() => onPressAddToCart()}
                            label={showAnimatedText === false ? messages.viewCart : messages.addToCart}
                        />
                    </View>
                    <View style={styles.viewButtonFlex}>
                        <CustomButton
                            label={messages.buyNow}
                            backgroundColor={colors.buttonBg}
                            labelColor={colors.white}
                            onPress={onPressBuyNow}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.textDetails}>{messages.details}</Text>
                    <Text style={styles.textDescription}>{productDetails?.description}</Text>
                </View>
            </View>
        </ScreenContainer>
    )
}

export default DetailsScreen;