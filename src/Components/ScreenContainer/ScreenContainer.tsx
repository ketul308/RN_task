
import React, { PropsWithChildren } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { RNStyles } from '../../Common/RNStyles';
import { styles } from './styles';

const ScreenContainer = (props: PropsWithChildren) => {
    const { children } = props;
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.background}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default ScreenContainer;