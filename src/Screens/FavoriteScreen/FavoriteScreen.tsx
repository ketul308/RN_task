import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Props } from './type'
import ScreenContainer from '../../Components/ScreenContainer/ScreenContainer'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { RootState } from '../../redux/store/store'
import { ProductItemType } from '../HomeScreen/type'
import CustomProductList from '../../Components/CustomProductList/CustomProductList'
import { AllScreens } from '../../Navigation/NavConfig'
import { messages } from '../../Constants/Messages'
import { styles } from './styles'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import EmptyListComponent from './EmptyListComponent'
import { colors } from '../../Theme/colors'
import { addRemoveFavorite } from '../../redux/slices/productSlice'

const FavoriteScreen: React.FC<Props> = (props) => {

    const { navigation } = props;
    const products = useAppSelector((state: RootState) => state.product.productList);
    const [favoriteList, setFavoriteList] = useState<ProductItemType[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (products.length) {
            let favorites = products.filter((item) => item.isFavorite === true);
            setFavoriteList(favorites);
        }
    }, [products]);

    return (
        <ScreenContainer>
            <View style={styles.headerContainer}>
                <CustomHeader label={messages.FavouriteProducts} labelColor={colors.white} />
            </View>
            <CustomProductList
                products={favoriteList}
                onPressFavorite={(id) => dispatch(addRemoveFavorite(id))}
                ListEmptyComponent={favoriteList.length === 0 ? <EmptyListComponent /> : undefined}
                onPressProduct={(item) => navigation.navigate(AllScreens.DETAIL_SCREEN, { id: item.id, isAlreadyFavorite: true })}
            />
        </ScreenContainer>
    )
}

export default FavoriteScreen