import { ProductActionTypes } from "../Constants/ProductActionTypes";

const InitialState = {
    products: []
}
export const ProductReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case ProductActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }
}
export const SelectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ProductActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case ProductActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}
