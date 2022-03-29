import { combineReducers } from "redux"
import { contactReducer } from './Reducer';
import { contactReducerProduct } from "./ReducerProduct";

export const rootReducer =combineReducers({
    contactReducer,
    contactReducerProduct,
})