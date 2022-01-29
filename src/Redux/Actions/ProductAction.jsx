import { ProductActionTypes } from "../Constants/ProductActionTypes"

export const SetProducts = (products) => {
    return {
        type: ProductActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const SelectedProduct = (product) => {
    return {
        type: ProductActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const RemoveSelectedProduct = () => {
    return {
        type: ProductActionTypes.REMOVE_SELECTED_PRODUCT
    }
}