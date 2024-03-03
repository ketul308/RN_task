import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomStackScreenTypes, MainStackScreenTypes, } from './types';
import { AllScreens, screenOptions } from './NavConfig';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen/DetailsScreen';
import SplashScreen from 'react-native-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../Screens/FavoriteScreen/FavoriteScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';
import { All_Svgs } from '../Assets';
import { colors } from '../Theme/colors';
import { View } from 'react-native';
import { styles } from './style';
import { metrix } from '../Common/metrix';

const Stack = createStackNavigator<MainStackScreenTypes>();
const Tab = createBottomTabNavigator<BottomStackScreenTypes>();


const TabStack: React.FC<{}> = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name={AllScreens.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    tabBarIcon(props) {
                        const { focused, size } = props;
                        return (
                            <View style={[styles.tabIcon, focused ? { backgroundColor: colors.darkYellow, marginBottom: metrix.hp3, } : undefined]}>
                                <All_Svgs.Home height={size} color={focused ? colors.buttonBg : undefined} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name={AllScreens.FAVORITE_SCREEN}
                component={FavoriteScreen}
                options={{
                    tabBarIcon(props) {
                        const { focused, size } = props;
                        return (
                            <View style={[styles.tabIcon, focused ? { backgroundColor: colors.darkYellow, marginBottom: metrix.hp3, } : undefined]}>
                                <All_Svgs.Heart height={size} color={focused ? colors.buttonBg : undefined} />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const MainStack: React.FC<{}> = () => {
    React.useEffect(() => {
        const _timeOut = setTimeout(() => {
            SplashScreen.hide();
            clearTimeout(_timeOut);
        }, 2000);
    }, []);

    return (
        <Stack.Navigator screenOptions={screenOptions} initialRouteName={AllScreens.TAB_SCREEN}>
            <Stack.Screen name={AllScreens.TAB_SCREEN} component={TabStack} />
            <Stack.Screen name={AllScreens.DETAIL_SCREEN} component={DetailsScreen} />
            <Stack.Screen name={AllScreens.CART_SCREEN} component={CartScreen} />
        </Stack.Navigator>
    )
}

export default MainStack;