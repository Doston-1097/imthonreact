import {SELECTED_PRODUCTS, SET_PRODUCTS} from "../types/ActionTypes";

const initialState = {
    products: [],
}


export const ProductReducer = (state = initialState, {type, payload}) => {

    switch (type) {

        case SET_PRODUCTS: {
            return {
                ...state,
                products: payload
            };
        }
        default:
            return state;

    }
}

export const SelectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {

        case SELECTED_PRODUCTS:
            return {
                ...state,
                ...payload
            }


        default:
            return state;
    }
}