import * as actionTypes from "./types";
import axios from 'axios';

export const addItem = (data) => {
    return {
        type: actionTypes.ADD_ITEM,
        item: data
    }
}

export const deleteItem = (id) => {
    return {
        type: actionTypes.DELETE_ITEM,
        id
    }
}

export const editItem = (data) => {
    return {
        type: actionTypes.EDIT_ITEM,
        item_to_edit: data
    }
}

export const getItemById = (id, data) => {
    return {
        type: actionTypes.GET_ITEM_BY_ID,
        id,
        data
    }
}
/////////////////////////////////////
const fetchItemsStart = (data) => {
    return {
      type: actionTypes.FETCH_ITEMS_START,
      data,
    }
};
  
const fetchItemsSuccess = (data) => {
    return {
      type: actionTypes.FETCH_ITEMS_SUCCESS,
      data,
    }
}
  
const fetchItemsFailed = (error) => {
    return {
      type: actionTypes.FETCH_ITEMS_FAIL,
      error
    };
};
  
export const getItems = () => {
    return dispatch => {
      dispatch(fetchItemsStart());
      return axios.get('http://localhost:3000/data')
        .then((response) => {
            console.log(response.data)
          return dispatch(fetchItemsSuccess(response.data));
        })
        .catch(err => {
          return dispatch(fetchItemsFailed(console.log(err)));
        });
    }
}
