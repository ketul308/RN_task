import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { styles } from './styles';

const BadgeIcon = (props: PropsWithChildren & { badge: number }) => {
    const { children, badge } = props;
    return (
        <View>
            {children}
            <View style={styles.badgeContainer}>
                {badge > 0 && <Text style={styles.textBadge}>{badge}</Text>}
            </View>
        </View>
    )
}

export default BadgeIcon