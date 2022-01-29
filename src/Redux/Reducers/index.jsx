import { combineReducers } from "redux";
import { ProductReducer, SelectedProductReducer } from "./ProductReducer";

const reducers = combineReducers({
    Allproducts: ProductReducer,
    Product: SelectedProductReducer
})
export default reducers