import { APIs } from "../../APIs/API";
import { setAllProducts, toggleStatus } from "../../redux/slices/productSlice";
import { AppDispatch } from "../../redux/store/store";

export const getAllProducts = (limit: number) => async (dispatch: AppDispatch) => {
    if (limit == 10) dispatch(toggleStatus("loading"));
    const response = await APIs.get(`products?limit=${limit}`).then((res) => res);
    if (response.status === 200) {
        dispatch(setAllProducts(response.data.products));
    }
    if (limit == 10) dispatch(toggleStatus("idle"));
}