import {combineReducers} from "redux";
import {ProductReducer, SelectedProductReducer} from "./ProductReducer";
import {selectProduct} from "../actions/ProductAction";


const reducers = combineReducers({
    allProducts: ProductReducer,
    product: SelectedProductReducer
})

export default reducers


