import { View, Text } from 'react-native'
import React from 'react'
import { Props } from './types'
import { RNStyles } from '../../Common/RNStyles'
import { All_Svgs } from '../../Assets'
import { metrix } from '../../Common/metrix'
import { colors } from '../../Theme/colors'


const CustomStarRating = (props: Props) => {
    const { rating, starSize = metrix.hp2, } = props;
    const stars = [...Array(parseInt(rating?.toString() ?? 0)).keys()];
    const halfStars = [...Array(5 - parseInt(rating?.toString() ?? 0)).keys()];

    return (
        <View style={[RNStyles.flexRowCenter, { height: starSize, width: starSize * 5 }]}>
            {
                stars.map((num) => (
                    <All_Svgs.Star key={num.toString()} height={starSize} color={colors.darkYellow} />
                ))
            }
            {
                halfStars.map((num) => {
                    if (num == 0) {
                        return (
                            <All_Svgs.HalfStar key={num.toString()} height={starSize} color={colors.darkYellow} />
                        )
                    }
                    return (
                        <All_Svgs.EmptyStar key={num.toString()} height={starSize} color={colors.darkYellow} />
                    )
                })
            }
        </View>
    )
}

export default CustomStarRating