import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { colors } from '../../Theme/colors'
import { Props } from './type'


const CustomButton = (props: Props) => {
    const { label, onPress, backgroundColor, labelColor } = props;
    return (
        <TouchableOpacity
            style={[styles.touchButton,
            backgroundColor ? { backgroundColor: backgroundColor } : undefined
            ]}
            onPress={onPress}
        >
            <Text style={[styles.textLabel, labelColor ? { color: labelColor } : undefined]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton