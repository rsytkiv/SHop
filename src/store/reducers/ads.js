import * as actionTypes from "../actions/types";
import { updateObject } from "../../shared/utility";

const initialState = {
    items: [],
    item: null,
}

const fetchItemsStart = (state, action) => {
    return updateObject(state, {item: null, items: []});
};
  
const fetchItemsSuccess = (state, action) => {
    return updateObject(state, {
        items: action.data,
        item: null,
    });
};
  
const fetchItemsFailed = (state, action) => {
    return updateObject(state, {
        item: action.item,
    });
};

export const addItem = (state, action) => {
    return {...state, items: [...state.items, action.item]}
}

export const deleteItem = (state, action) => {
    return {...state, items: state.items.filter( item => item.id !== action.id)}
}

export const getItemById = (state, action) => {
    return {...state, item: state.items.find(i => i.id === action.id)};
}

export const editItem = (state, action) => {
    const item_to_edit = action.item_to_edit
    const items = state.items.filter( item => item.id !== item_to_edit.id)
    return {...state, items: items.concat(item_to_edit)}
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM: 
            return addItem(state, action)
        case actionTypes.DELETE_ITEM: 
            return deleteItem(state, action)
        case actionTypes.EDIT_ITEM: 
            return editItem(state, action)
        case actionTypes.GET_ITEM_BY_ID: 
            return getItemById(state, action)
        case actionTypes.FETCH_ITEMS_START:
            return fetchItemsStart(state, action);
        case actionTypes.FETCH_ITEMS_SUCCESS:
            return fetchItemsSuccess(state, action);
        case actionTypes.FETCH_ITEMS_FAIL:
            return fetchItemsFailed(state, action);
        default:
            return state
    }
}

export default reducer