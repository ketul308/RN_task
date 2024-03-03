import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}