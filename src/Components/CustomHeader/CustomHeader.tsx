import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RNStyles } from '../../Common/RNStyles'
import { styles } from './styles'
import { colors } from '../../Theme/colors'


const CustomHeader = (props: Props) => {

    const {
        label, leftIcon, rightIcon, labelColor,
        onPressLeftIcon, onPressRightIcon,
    } = props;

    return (
        <View style={styles.viewOuter}>
            <View style={RNStyles.flexRow}>
                {
                    leftIcon &&
                    <TouchableOpacity style={styles.touchLeftIcon} onPress={onPressLeftIcon}>
                        {leftIcon}
                    </TouchableOpacity>
                }
                <Text style={[styles.textLabel, { color: labelColor ? labelColor : colors.font100 }]}>
                    {label}
                </Text>
            </View>
            {
                rightIcon &&
                <TouchableOpacity style={styles.touchRightIcon} onPress={onPressRightIcon}>
                    {rightIcon}
                </TouchableOpacity>
            }
        </View>
    )
}

export default CustomHeader