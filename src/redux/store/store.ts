import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { productSlice } from "../slices/productSlice";

const store = configureStore({
    reducer: {
        // flight: flightSlice.reducer,
        product: productSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
