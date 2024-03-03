import { Provider } from "react-redux";
import RootNavigation from "./Navigation/RootNavigation";
import { store } from "./redux/store/store";
import React from "react";
import SplashScreen from "react-native-splash-screen";

export function Main() {

    React.useEffect(() => {
        const _timeOut = setTimeout(() => {
            SplashScreen.hide();
            clearTimeout(_timeOut);
        }, 2000);
    }, []);

    return (
        <Provider store={store}>
            <RootNavigation />
        </Provider>
    )
}