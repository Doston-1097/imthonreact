import {SELECTED_PRODUCTS, SET_PRODUCTS} from "../types/ActionTypes";


export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    }
}

export const selectProduct = (products) => {
    return{
        type:SELECTED_PRODUCTS,
        payload:products,
    }
}