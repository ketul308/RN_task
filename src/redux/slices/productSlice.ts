import { createSlice } from "@reduxjs/toolkit";
import { ProductItemType } from "../../Screens/HomeScreen/type";
import { state } from "./type";

const initialState: state = {
    status: "loading",
    productList: [],
    productDetails: [],
    cartList: [],
    error: undefined
}

const productSlice = createSlice({
    name: "flight",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            if (state.productList.length < action.payload.length) {
                let lastTenProd = action.payload.slice(action.payload.length - 10);
                lastTenProd.forEach((element: ProductItemType) => {
                    element.isFavorite = false;
                });
                state.productList = state.productList.concat(lastTenProd);
            }
        },
        addRemoveFavorite: (state, action) => {
            state.productList.forEach((ele: ProductItemType) => {
                if (ele.id === action.payload) {
                    ele.isFavorite = !ele.isFavorite;
                }
            });
        },
        addProductDetails: (state, action) => {
            state.productDetails[action.payload.id] = action.payload;
        },
        addProductToCart: (state, action) => {
            const oldProduct = state.cartList.find((ele) => ele.id == action.payload);
            if (oldProduct === undefined) {
                const newProduct = state.productList[action.payload - 1];
                newProduct["quantity"] = 1;
                state.cartList.push(newProduct);
            } else {
                oldProduct["quantity"] += 1;
            }
        },
        removeProductFromCart: (state, action) => {
            const cartProduct = state.cartList.find((ele) => ele.id == action.payload);
            if (cartProduct.quantity === 1) {
                state.cartList = state.cartList.filter((item) => item.id !== cartProduct.id);
            } else {
                cartProduct["quantity"] -= 1;
            }
        },

        toggleStatus: (state, action) => {
            state.status = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    }
});

export const { setAllProducts, addRemoveFavorite, toggleStatus, setError, addProductDetails, addProductToCart,
    removeProductFromCart } = productSlice.actions;
export { productSlice };
