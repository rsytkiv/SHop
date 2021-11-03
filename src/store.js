import { createStore, combineReducers } from 'redux'
import itemsReducer from "./store/reducers/ads";

const appReducer = combineReducers({
  items: itemsReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
