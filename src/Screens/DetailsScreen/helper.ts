import { APIs } from "../../APIs/API";
import { addProductDetails } from "../../redux/slices/productSlice";
import { AppDispatch } from "../../redux/store/store";

export const getProductDetailsById = (id: number) => async (dispatch: AppDispatch) => {
    const response = await APIs.get(`products/${id}`).then((res) => res);
    if (response.status === 200) {
        dispatch(addProductDetails(response.data));
    }
}