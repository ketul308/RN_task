import { View, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { metrix } from '../../Common/metrix'
import { RNStyles } from '../../Common/RNStyles'

const ProductPlaceholder = () => {
    return (
        <View style={styles.itemContainer}>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item height={metrix.wp_40} borderTopRightRadius={metrix.hp2} borderTopLeftRadius={metrix.hp2} />
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item style={RNStyles.flexRowBetween}>
                    <SkeletonPlaceholder.Item marginLeft={metrix.hp2}>
                        <SkeletonPlaceholder.Item width={metrix.hp5} height={metrix.hp1_5} marginVertical={metrix.hp1} />
                        <SkeletonPlaceholder.Item width={metrix.hp5} height={metrix.hp1_5} marginBottom={metrix.hp1} />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item width={metrix.hp3} height={metrix.hp3} borderRadius={metrix.hp1_5} marginBottom={metrix.hp1} marginRight={metrix.hp2} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </View>
    )
}

export default ProductPlaceholder