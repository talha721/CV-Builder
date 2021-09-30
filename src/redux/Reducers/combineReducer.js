import {combineReducers} from "redux";
import {cvReducer} from "./cvReducer";
import {fetchCVReducer} from "./fetchCVReducer";

export default combineReducers({
    cv: cvReducer,
    cvInfo: fetchCVReducer
})