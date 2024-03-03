import { View, Text } from 'react-native'
import React from 'react'
import { All_Svgs } from '../../Assets'
import { metrix } from '../../Common/metrix'
import { messages } from '../../Constants/Messages'
import { styles } from './styles'
import { colors } from '../../Theme/colors'

const EmptyListComponent = () => {
    return (
        <View style={styles.temptyView}>
            <All_Svgs.NoFile height={metrix.hp10} color={colors.font100} />
            <Text style={styles.textNoProduct}>{messages.noFavouriteProducts}</Text>
        </View>
    )
}

export default EmptyListComponent