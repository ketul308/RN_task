import { TransitionPresets } from '@react-navigation/stack';

enum AllScreens {
    HOME_SCREEN = "HOME_SCREEN",
    DETAIL_SCREEN = "DETAIL_SCREEN",
    CART_SCREEN = "CART_SCREEN",
    FAVORITE_SCREEN = "FAVORITE_SCREEN",
    TAB_SCREEN = "TAB_SCREEN",
}
const screenOptions = {
    headerShown: false,
    // ...TransitionPresets.SlideFromRightIOS,
    tabBarShowLabel: false
};

export { AllScreens, screenOptions };