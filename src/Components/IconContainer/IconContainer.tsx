import { View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { styles } from './styles';

const IconContainer = (props: PropsWithChildren) => {
    const { children } = props;
    return (
        <View style={styles.iconContainer}>
            {children}
        </View>
    )
}

export default IconContainer